import express from 'express';

const PORT = 3333; //Em caixa alta quando é algo de configuração

const app = express();
app.use(express.json());

app.get('/products', (request, response) => {
  const { page, limit } = request.query;
  response.send(`${page}e${limit}`);
});

app.post('/products', (request, response) => {
  const { name, price } = request.body;

  // response.send(`Produto ${name}, custo exatamente ${price}`);
  response.status(201).json({ name, price });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
