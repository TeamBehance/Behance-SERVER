import mongoose from 'mongoose';
import { StoryInfo } from '../interfaces/story/StoryInfo';

const StorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

export default mongoose.model<StoryInfo & mongoose.Document>(
  'Story',
  StorySchema
);
