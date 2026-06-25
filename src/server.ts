import express from 'express';

const PORT = 3333; //Em caixa alta quando é algo de configuração

const app = express();

app.get('/products', (request, response) => {
  const { page, limit } = request.query;
  // /products?page=1&limit=10
  response.send(`${page}e${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
