import { Router } from 'express';
import ProjectRouter from './ProjectRouter';
import StoryRouter from './StoryRouter';
import FileRouter from './FileRouter';

const router = Router();

router.use('/project', ProjectRouter);
router.use('/story', StoryRouter);
router.use('/file', FileRouter);

export default router;
