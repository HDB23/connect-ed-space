import { Router } from 'express';
import { getAINotes, getLectureData } from '../controllers/ai-notes';

const router = Router();

// AI Notes endpoints
router.get('/lecture-data', getLectureData);
router.get('/notes', getAINotes);

export { router };