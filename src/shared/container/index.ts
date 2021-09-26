import { container } from 'tsyringe';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",     // Nome do container
    CategoriesRepository
);

// ISpecificationsRepository
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",     // Nome do container
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)