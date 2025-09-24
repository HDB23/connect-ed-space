import { Router } from 'express';
import { router as dashboardRouter } from './dashboard';
import { router as translationRouter } from './translation';
import { router as aiNotesRouter } from './ai-notes';
import { router as analyticsRouter } from './analytics';

// Create the main router
const router = Router();

// Register all feature routes
router.use('/dashboard', dashboardRouter);
router.use('/translation', translationRouter);
router.use('/ai-notes', aiNotesRouter);
router.use('/analytics', analyticsRouter);

export { router };