import { Router } from 'express';
import { getLanguages, getTranslation } from '../controllers/translation';

const router = Router();

// Translation endpoints
router.get('/languages', getLanguages);
router.get('/translate', getTranslation);

export { router };