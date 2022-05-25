import mongoose from 'mongoose';

export interface ProjectInfo {
  title: string;
  photo: string;
  writer: mongoose.Types.ObjectId;
}
