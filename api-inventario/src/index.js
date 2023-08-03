import express  from 'express';
import cors  from 'cors';

import inventarioRoutes from './routes/dispositivo.routes.js';
import facRoutes from './routes/factibilidad.routes.js'

const app = express()
const port = 3000

const Directorios = "http://localhost:4200";

app.use(cors({
    origin: Directorios
}))
app.use(express.json())

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/inventario', inventarioRoutes)
app.use('/factibilidades', facRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}!`))