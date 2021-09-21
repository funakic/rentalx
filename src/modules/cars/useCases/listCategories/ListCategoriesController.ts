import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./LIstCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesUSeCase: ListCategoriesUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUSeCase.execute();
        return response.json(all);
    }
}

export { ListCategoriesController };