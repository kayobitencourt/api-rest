import express from 'express';
import { myMiddleware } from './middlewares/my-middleware';

const PORT = 3333; //Em caixa alta quando é algo de configuração

const app = express();
app.use(express.json());

// app.use(myMiddleware); //Middleware global

//Middleware com rota específica
app.get('/products', (request, response) => {
  const { page, limit } = request.query;
  response.send(`${page}e${limit}`);
});

app.post('/products', myMiddleware, (request, response) => {
  const { name, price } = request.body;

  // response.send(`Produto ${name}, custo exatamente ${price}`);
  response.status(201).json({ name, price, user_id: request.user_id });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
