const Chance = require("chance");

//What we want to test
const ProjectController = require("../project");

//Dependencies
const ProjectService = require("../../services/project");

const chance = new Chance();

//Mock dependencies
jest.mock("../../services/project");

describe("when calling update project controller", () => {
  let id, projectData, updatedProject, req;

  beforeEach(() => {
    id = chance.guid();
    projectData = {
      name: chance.name(),
      description: chance.string(),
    };
    updatedProject = projectData;
    req = {
      params: { id },
      body: projectData,
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    global.console = { log: jest.fn(), error: jest.fn() };

    ProjectService.updateProject = jest.fn().mockResolvedValue(updatedProject);
  });

  it("shuld call Projectserive.updateProject with the id and project", async () => {
    //ACT
    await ProjectController.updateProject(req, res);

    //ASERT
    expect(ProjectService.updateProject).toHaveBeenCalledWith(id, projectData);
  });

  it("shuld call res.status with a 200 status code", async () => {
    //ACT
    await ProjectController.updateProject(req, res);

    //ASSERT
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("shuld call res.json with updated project data", async () => {
    //ACT
    await ProjectController.updateProject(req, res);

    //ASERT
    expect(res.json).toHaveBeenCalledWith(updatedProject);
  });

  it("shuld call res.status with 500 when the ProjectService.updateProject service fails", async () => {
    //ARRANGE
    const error = new Error();
    ProjectService.updateProject = jest.fn().mockRejectedValue(error);

    //ACT
    await ProjectController.updateProject(req, res);

    //ASERT
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
