import { ProjectResponseDto } from '../interfaces/project/ProjectResponseDto';
import { ProjectInfo } from '../interfaces/project/ProjectInfo';
import Project from '../models/Project';
import User from '../models/User';
import { ProjectCreateDto } from '../interfaces/project/ProjectCreateDto';

const createProject = async (
  projectInfo: ProjectInfo
): Promise<ProjectResponseDto | null> => {
  try {
    const project = new Project({
      title: projectInfo.title,
      photo: projectInfo.photo,
      writer: projectInfo.writer,
    });

    await project.save();

    const user = await User.findById(projectInfo.writer);

    if (!user) {
      return null;
    }

    const data = {
      _id: project._id,
      title: project.title,
      photo: project.photo,
      writer: {
        name: user.name,
        photo: user.photo,
      },
    };
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


const createProject_android = async (projectCreateDto: ProjectCreateDto): Promise<ProjectResponseDto | null> => {
  try {
    const project = new Project(projectCreateDto);
    await project.save();

    const writer = await User.findById(project.writer);
    if (!writer) {
      return null;
    }

    const data = {
      _id: project._id,
      title: project.title,
      photo: project.photo,
      writer: {
        name: writer.name,
        photo: writer.photo,
      },
    };
    return data;

  } catch (error) {
    console.log(error);
    throw error;
  }
};


const getProjects = async (): Promise<ProjectResponseDto[]> => {
  try {
    const projects = await Project.find()
      .populate('writer')
      .sort({ createdAt: -1 });

    const data = await Promise.all(
      projects.map((project: any) => {
        const result = {
          _id: project._id,
          title: project.title,
          photo: project.photo,
          writer: {
            name: project.writer.name,
            photo: project.writer.photo,
          },
        };
        return result;
      })
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default { createProject, getProjects, createProject_android };
