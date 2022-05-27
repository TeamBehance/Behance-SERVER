import mongoose from 'mongoose';

export interface ProjectCreateDto {
    title: string;
    photo: string;
    writer: mongoose.Types.ObjectId;
}
