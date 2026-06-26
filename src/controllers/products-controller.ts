import { Request, Response } from 'express';
import { AppError } from '../utils/app-error';

class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;
    response.send(`${page}e${limit}`);
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body;
    // throw new AppError('Erro ao tentar criar um produto');
    if (!name) {
      throw new AppError('Nome é obrigatórios');
    }

    if (name.trim().length < 6) {
      throw new AppError('Nome do produto precisa ter pelo menos 6 caracteres');
    }

    if (!price) {
      throw new AppError('Preço é obrigatórios');
    }

    if (price < 0) {
      throw new AppError('Preço não pode ser menor que 0');
    }

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
