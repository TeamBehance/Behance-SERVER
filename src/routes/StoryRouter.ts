import express, { Router } from 'express';
import StoryController from '../controllers/StoryController';

const router: Router = express.Router();

router.get('/', StoryController.getStories);

export default router;
