import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.status(200).json({
        mensaje: 'API de reservas CTPI funcionando correctamente'
    });
});
//Crear ruta GET/api/health  //primer EndPoint punto salida para comunicarme con el servidor
app.get('/api/health', (req, res)=>{
    res.status(200).json({
        status: 'ok',
        servicio: 'sena-reservas-API',

    });
});

export default  app;