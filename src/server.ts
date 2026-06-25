import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';

const PORT = 3333; //Em caixa alta quando é algo de configuração

const app = express();
app.use(express.json());

app.use(routes);

//Para lidar com exeções que acontecerem em qualquer outro lugar.
app.use((error: any, request: Request, response: Response, next: NextFunction) => {
  response.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
