import mongoose from 'mongoose';
import config from '../config';
import File from '../models/File';
import Project from '../models/Project';
import User from '../models/User';
import Story from '../models/Story';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);

    console.log('Mongoose Connected ...');

    User.createCollection().then(function (collection) {
      console.log('User collection created');
    });

    Project.createCollection().then(function (collection) {
      console.log('Project Collection Created');
    });

    File.createCollection().then(function (collection) {
      console.log('File Collection Created');
    });

    Story.createCollection().then(function (collection) {
      console.log('Story Collection Created');
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
