import express  from 'express';
import inventarioRoutes from './routes/dispositivo.routes.js';

const app = express()
const port = 3000

app.use(express.json())

app.use(inventarioRoutes)

app.listen(port, () => console.log(`Server listening on port ${port}!`))