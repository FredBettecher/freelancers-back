import { prisma } from 'config';
import { ServicesCategories } from '@prisma/client';

async function findCategories(): Promise<ServicesCategories[]> {
    return await prisma.servicesCategories.findMany();
}

const categoriesRepository = {
    findCategories,
};

export default categoriesRepository;
