import mongoose from 'mongoose';
import config from '../config';
import Project from '../models/Project';
import Story from '../models/Story';
import User from '../models/User';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);

    console.log('Mongoose Connected ...');

    User.createCollection().then((collection) => {
      console.log('User Collection Created');
    });

    Project.createCollection().then((collection) => {
      console.log('Project Collection Created');
    });

    Story.createCollection().then((collection) => {
      console.log('Story Collection Created');
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
