import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ProjectInfo } from '../interfaces/project/ProjectInfo';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import ProjectService from '../services/ProjectService';
import { ProjectCreateDto } from '../interfaces/project/ProjectCreateDto';

/**
 * @route POST /project/ios
 * @desc Create Project
 * @access Public
 */
const createProject = async (req: Request, res: Response) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }

  const projectInfo: ProjectInfo = req.body;

  try {
    const data = await ProjectService.createProject(projectInfo);

    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_PROJECT_SUCCESS, data)
      );
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route POST /project/android
 * @desc Create Project
 * @access Public
 */
const createProject_android = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }
  const projectCreateDto: ProjectCreateDto = req.body;
  try {
    const data = await ProjectService.createProject(projectCreateDto);
    if (!data)
      res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    res
      .status(statusCode.CREATED)
      .send(
        util.success(statusCode.CREATED, message.CREATE_PROJECT_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};

/**
 * @route GET /project
 * @desc Get Projects
 * @access Public
 */
const getProjects = async (req: Request, res: Response) => {
  try {
    const data = await ProjectService.getProjects();

    if (data.length === 0) {
      return res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND_PROJECT));
    }

    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_PROJECT_SUCCESS, data));
  } catch (error) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};
export default {
  createProject,
  getProjects,
  createProject_android,
};
