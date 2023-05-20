const Chance = require("chance");

//what we want to test
const ProjectService = require("../project");

//Dependencies
const Project = require("../../models/project");

const chance = new Chance();

//Mock dependencies
jest.mock("../../models/project");

describe("when calling the proejct service method", () => {
  let id, projectData, updatedProject;
  beforeEach(() => {
    id = chance.guid();
    projectData = { name: chance.name(), describe: chance.string() };
    updatedProject = projectData;
    Project.findByIdAndUpdate = jest.fn().mockReturnThis();
    Project.lean = jest.fn().mockReturnThis();
    Project.exec = jest.fn().mockResolvedValue(updatedProject);
  });

  it("shuld call Project.findByidAndUpdate with the id, project data and return document new property", async () => {
    //ACT
    await ProjectService.updateProject(id, projectData);

    //ASERT
    expect(Project.findByIdAndUpdate).toBeCalledWith(id, projectData, {
      new: true,
    });
  });

  it("shuld call Project.lean", async () => {
    //ACT
    await ProjectService.updateProject(id, projectData);

    //ASERT
    expect(Project.lean).toBeCalled();
  });

  it("shuld call Project.exec", async ()=> {
    //ACT
    await ProjectService.updateProject(id, projectData);

    //ASERT
    expect(Project.exec).toBeCalled();
  })

  it("shuld return the updated project data", async ()=>{
    //ACT
    const result = await ProjectService.updateProject(id, projectData);

    //ASERT
    expect(result).toEqual(updatedProject);
  });
});
