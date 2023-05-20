const mongoose = require("mongoose");

const Schemma = mongoose.Schema;

const projectSchema = new Schemma({
  name: { type: String, required: true },
  projectLink: {
    type: String,
  },
  overview: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  tools: { type: [{ type: String }], required: true },
});

module.exports = mongoose.model("Project", projectSchema);
