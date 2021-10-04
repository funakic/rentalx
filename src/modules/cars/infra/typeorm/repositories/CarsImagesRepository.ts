import { ICarsImagesRepository } from "@modules/cars/repositories/ICarImagesRepository";
import { getRepository, Repository } from "typeorm";
import { CarImage } from "../entities/CarImage";


class CarsImagesRepository implements ICarsImagesRepository {
    private repository: Repository<CarImage>;

    constructor() {
        this.repository = getRepository(CarImage);
    }

    async create(car_id: string, iamge_name: string): Promise<CarImage> {
        const carImage = this.repository.create({
            car_id,
            iamge_name
        });

        await this.repository.save(carImage);

        return carImage;
    }

}

export { CarsImagesRepository }