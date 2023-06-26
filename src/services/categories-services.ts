import { ServicesCategories } from '@prisma/client';
import categoriesRepository from 'repositories/categories-repository';

async function listCategories(): Promise<ServicesCategories[]> {
    const categories = await categoriesRepository.findCategories();
    return categories;
}

const categoriesServices = {
    listCategories,
};

export default categoriesServices;
