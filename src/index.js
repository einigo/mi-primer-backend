import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

import './database/database.js'; // conexión con base de datos

// 1 Iniciar la aplicación

const app = express();

// 2 Configuraciones generales

const PORT = process.env.PORT || 5000;

// 3 Middlewares

app.use(morgan('dev'));
app.use(cors()); // CROSS-ORIGIN-RESOURCE-SHARING
app.use(express.json());

// 4 Configurar las rutas

app.use(userRoutes);

// 5 Iniciar el loop del servidor

app.listen(() => {
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});
