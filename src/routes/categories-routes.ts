import { getCategories } from 'controllers';
import { Router } from 'express';

const categoriesRouter = Router();

categoriesRouter
    .get('/', getCategories);

export { categoriesRouter };
