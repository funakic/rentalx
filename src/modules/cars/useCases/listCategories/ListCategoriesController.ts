import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./LIstCategoriesUseCase";

class ListCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoriesUSeCase = container.resolve(ListCategoriesUseCase);
        const all = await listCategoriesUSeCase.execute();
        return response.json(all);
    }
}

export { ListCategoriesController };