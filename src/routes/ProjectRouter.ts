import express, { Router } from 'express';
import { body } from 'express-validator';
import ProjectController from '../controllers/ProjectController';

const router: Router = express.Router();

router.post(
  '/ios',
  [
    body('title').notEmpty(),
    body('photo').notEmpty(),
    body('writer').notEmpty(),
  ],
  ProjectController.createProject
);

router.post(
  '/android',
  [
    body('title').notEmpty(),
    body('photo').notEmpty(),
    body('writer').notEmpty(),
  ],
  ProjectController.createProject_android
);

router.get('/', ProjectController.getProjects);

export default router;
