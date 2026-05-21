// server.js
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

// gunakan port dari vercel/render
const PORT = process.env.PORT || 3000;

// membaca folder public
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint shortest path
app.get('/api/route', async (req, res) => {
    const { start, end, alt } = req.query;

    try {
        // API OSRM gratis
        const url =
            `https://routing.openstreetmap.de/routed-car/route/v1/driving/${start};${end}?overview=full&geometries=geojson`;

        const response = await axios.get(url);

        // validasi route
        if (!response.data.routes || response.data.routes.length === 0) {
            return res.status(404).json({
                error: 'Rute tidak ditemukan'
            });
        }

        res.json({
            algorithm: alt === 'true' ? 'A* Search' : 'Dijkstra',
            path: response.data.routes[0].geometry.coordinates,
            distance: response.data.routes[0].distance
        });

    } catch (error) {
        console.error('DETAIL ERROR:', error.message);

        res.status(500).json({
            error: 'Gagal mengambil rute',
            detail: error.message
        });
    }
});

// menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});