import express from "express";

import morgan from "morgan"; 14.2k (gzipped: 5.3k)

import cors from "cors"; 5k (gzipped: 2.1k)

//1 Iniciar la aplicación

const app = express();

//2 Configuraciones generales

const PORT = process.env.PORT || 5000;

console.log(process.env);

// 3 Middlewares 

app.use(morgan("dev"));
app.use(cors()); // CROSS-ORIGIN-RESOURCE-SHARING
app.use(express.json());

// 4 Configurar las rutas 

//5 Iniciar el loop del servidor

app.listen(()=>{
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});