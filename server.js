const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { name, birthDate, birthTime, birthPlace } = req.body;
    // Por ahora solo devolvemos los datos recibidos
    res.json({
        message: 'Datos recibidos correctamente',
        data: { name, birthDate, birthTime, birthPlace }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
