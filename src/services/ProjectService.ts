import { ProjectResponseDto } from '../interfaces/project/ProjectResponseDto';
import { ProjectInfo } from '../interfaces/project/ProjectInfo';
import Project from '../models/Project';
import User from '../models/User';

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
export default { createProject };
