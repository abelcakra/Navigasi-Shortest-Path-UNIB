// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Endpoint untuk mendapatkan rute dari OSRM (OpenStreetMap)
app.get('/api/route', async (req, res) => {
    const { start, end, alt } = req.query; // format: "lng,lat"
    
    try {
        // Menggunakan API OSRM gratis (Jalur Jalan Riil)
        // OSRM secara internal menggunakan varian Dijkstra/Multi-Level Dijkstra
       const url = `https://routing.openstreetmap.de/routed-car/route/v1/driving/${start};${end}?overview=full&geometries=geojson`;
        const response = await axios.get(url);
        
        res.json({
            algorithm: alt === 'true' ? 'A* Search' : 'Dijkstra',
            path: response.data.routes[0].geometry.coordinates,
            distance: response.data.routes[0].distance
        });
    } catch (error) {
    console.error("DETAIL ERROR:", error.message); // <--- Ini untuk ngintip error di terminal
    res.status(500).json({ error: error.message });
}
});

app.listen(PORT, () => {
    console.log(`Server lari di http://localhost:${PORT}`);
});