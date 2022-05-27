import { timeStamp } from 'console';
import mongoose from 'mongoose';
import { ProjectInfo } from '../interfaces/project/ProjectInfo';

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    writer: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<ProjectInfo & mongoose.Document>(
  'Project',
  ProjectSchema
);
