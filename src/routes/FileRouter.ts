import { Router } from 'express';
import FileController from '../controllers/FileController';
import multer from 'multer';
import { multerConfig } from '../config/multerConfig';
import { body } from 'express-validator';

const router: Router = Router();

const upload = multer(multerConfig);

router.post(
  '/upload',
  [body('image').notEmpty()],
  upload.single('image'),
  FileController.uploadFileToS3
);

export default router;
