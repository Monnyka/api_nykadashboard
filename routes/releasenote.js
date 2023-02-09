const express = require("express");
const router = express.Router();

const { getAllReleaseNote,createReleaseNote,updateReleaseNote,deleteReleaseNote, getReleaseNote } = require("../controllers/releasenote");

router.route("/").get(getAllReleaseNote).post(createReleaseNote);
router.route("/:id").get(getReleaseNote).patch(updateReleaseNote).delete(deleteReleaseNote)

module.exports = router;
