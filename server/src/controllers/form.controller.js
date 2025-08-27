import { postFormService } from "../services/form.services.js";

export const postForm = async (req, res) => {
  try {
    const data = req.validatedData;
    const response = await postFormService(data);
    console.log(response);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
