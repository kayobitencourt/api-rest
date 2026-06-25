import express from 'express';

const PORT = 3333; //Em caixa alta quando é algo de configuração

const app = express();

app.get('/products/:id', (request, response) => {
  const { id } = request.params;
  response.send(` Produto ${id}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
