import express from 'express';


const app = express();

// Middleware para que Express entienda JSON en el body de las peticiones
app.use(express.json());
const recursos = [
    { id: 1, nombre: 'Aula 101', tipo: 'aula', capacidad: 30 },
    { id: 2, nombre: 'Laboratorio de Redes', tipo: 'laboratorio', capacidad: 20 },
    { id: 3, nombre: 'Videobeam portátil #1', tipo: 'equipo', capacidad: null }
];

// Ruta de prueba: verificar que la API está viva
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'API de SENA Reservas funcionando correctamente '
    });
}); 

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        servicio: 'sena-reservas-api',
        timestamp: new Date().toISOString()
      });
}); 

app.get('/api/recursos', (req, res) => {
    const { tipo } = req.query;

    if (tipo) {
        const filtrados = recursos.filter(r => r.tipo === tipo);
        return res.status(200).json(filtrados);
    }

    res.status(200).json(recursos);
});

app.get('/api/recursos/:id', (req, res) => {
    const id = Number(req.params.id);
    const recurso = recursos.find(r => r.id === id);
    
    if (!recurso) {
        return res.status(404).json({
            error: `No se encontró un recurso con id ${id}`
        });
    }

    res.status(200).json(recurso);
});

export default app;