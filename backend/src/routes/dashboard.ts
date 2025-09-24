import { Router } from 'express';
import { getDashboardStats, getCourses, getLiveClasses } from '../controllers/dashboard';

const router = Router();

// Dashboard endpoints
router.get('/stats', getDashboardStats);
router.get('/courses', getCourses);
router.get('/live-classes', getLiveClasses);

export { router };