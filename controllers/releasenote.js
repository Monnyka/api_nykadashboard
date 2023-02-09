const Releasenote = require("../model/releasenote")

const getAllReleaseNote = (req, res) => {
  res.send("Get all releasenote");
};

const createReleaseNote = (req,res) =>{
  res.send(req.body)
}

const getReleaseNote = (req, res) => {
  res.send({id:req.param.id});
};

const updateReleaseNote = (req, res) => {
  res.send("Update releasenote");
};

const deleteReleaseNote = (req, res) => {
  res.send("Delete releasenote");
};

module.exports = {
  getAllReleaseNote,
  createReleaseNote,
  getReleaseNote,
  updateReleaseNote,
  deleteReleaseNote
};
