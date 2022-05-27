import mongoose from 'mongoose';
import { UserInfo } from '../user/UserInfo';

export interface ProjectResponseDto {
  _id: mongoose.Types.ObjectId;
  title: string;
  photo: string;
  writer: UserInfo;
}
