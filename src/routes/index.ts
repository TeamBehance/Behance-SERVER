import { Router } from 'express';
import ProjectRouter from './ProjectRouter';
import StoryRouter from './StoryRouter';

const router = Router();

router.use('/project', ProjectRouter);
router.use('/story', StoryRouter);

export default router;
