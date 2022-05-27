import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ProjectInfo } from '../interfaces/project/ProjectInfo';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import ProjectService from '../services/ProjectService';

/**
 * @route POST /project
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
export default { createProject };
