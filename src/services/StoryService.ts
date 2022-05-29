import { StoryResponseDto } from '../interfaces/story/StoryResponseDto';
import Story from '../models/Story';

const getStories = async (): Promise<StoryResponseDto[]> => {
  try {
    const data = await Story.find();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { getStories };
