const express = require("express");
const taskController = require("../controllers/taskController");
const validateTask = require("../middleware/validateTask");

const router = express.Router();

router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTask);
router.post("/", validateTask, taskController.createTask);
router.put("/:id", validateTask, taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
