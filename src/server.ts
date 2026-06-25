import express from 'express';
import { routes } from './routes';

const PORT = 3333; //Em caixa alta quando é algo de configuração

const app = express();
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
