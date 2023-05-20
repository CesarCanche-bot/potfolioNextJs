const ProjectService = require("../services/project");

exports.getProjects = async (req, res) => {
  try {
    let projects = await ProjectService.getProjects();
    res.json({ projects: projects });
  } catch (err) {
    console.error("err", err);
    res.status(500).json({ message: "Project were not retrieved" });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    let project = await ProjectService.getProjectById(req.params.id);
    res.json({ project: project });
  } catch (err) {
    console.error("error", err);
    res.status(404).json({ mesasge: "Project not retrived" });
  }
};

exports.createProject = async (req, res) => {
  try {
    let projectSaved = await ProjectService.createProject(req.body);
    res.status(201).json({
      message: "project created",
      projectSaved: projectSaved,
    });
  } catch (err) {
    console.error("err creating project", err);
    res.status(400).json({ messaje: "Projects were not created" });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const projectData = req.body;
    
    const updatedProject = await ProjectService.updateProject(id, projectData);
    res.status(200).json(updatedProject);
  } catch (err) {
    console.error("err updating project", err);
    res.status(500).json({ message: " Projects no updated" });
  }
};
