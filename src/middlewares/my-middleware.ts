import { Request, Response, NextFunction } from 'express';

export function myMiddleware(request: Request, response: Response, next: NextFunction) {
  request.user_id = '123456';
  //Aqui estamos modificando o conteúdo da requisição, "sobreescrevendo a tipagem global da req em types/request.d.ts"
  return next();
}
