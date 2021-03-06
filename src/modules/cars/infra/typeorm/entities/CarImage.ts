import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

@Entity("cars_image")
class CarImage {
    @PrimaryColumn()
    id: string;
    
    @Column()
    car_id: string;

    @Column()
    iamge_name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { CarImage }