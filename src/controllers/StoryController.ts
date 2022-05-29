import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import StoryService from '../services/StoryService';

/**
 * @route GET /story
 * @desc Get Stories
 * @access Public
 */
const getStories = async (req: Request, res: Response) => {
  try {
    const data = await StoryService.getStories();
    if (data.length === 0) {
      return res
        .status(statusCode.NOT_FOUND)
        .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND_STORY));
    }
    res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.READ_STORY_SUCCESS, data));
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

export default { getStories };
