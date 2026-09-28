const validateTask = (req, res, next) => {
  const { title, description, isCompleted } = req.body;

  if (req.method === "POST") {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Title is required and must be a non-empty string"
      });
    }

    if (typeof description !== "string" || description.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Description is required and must be a non-empty string"
      });
    }
  }

  if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
    return res.status(400).json({
      success: false,
      message: "Title must be a non-empty string"
    });
  }

  if (
    description !== undefined &&
    (typeof description !== "string" || description.trim() === "")
  ) {
    return res.status(400).json({
      success: false,
      message: "Description must be a non-empty string"
    });
  }

  if (isCompleted !== undefined && typeof isCompleted !== "boolean") {
    return res.status(400).json({
      success: false,
      message: "isCompleted must be a boolean"
    });
  }

  next();
};

module.exports = validateTask;
