import { Router } from 'express';
import { getPerformanceData, getCourseProgress, getWeeklyActivity } from '../controllers/analytics';

const router = Router();

// Analytics endpoints
router.get('/performance', getPerformanceData);
router.get('/course-progress', getCourseProgress);
router.get('/weekly-activity', getWeeklyActivity);

export { router };