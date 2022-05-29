//router index file
import { Router } from 'express';
import FileRouter from './FileRouter';
import ProjectRouter from './ProjectRouter';
import StoryRouter from './StoryRouter';

const router: Router = Router();

router.use('/project', ProjectRouter);
router.use('/story', StoryRouter);
router.use('/file', FileRouter);

export default router;
