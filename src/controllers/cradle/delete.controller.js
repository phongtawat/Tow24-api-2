
export const deleteCradle = async (req, res, next) => {
  try {
    const { cradleId } = req.params;

    const result = await deleteCradle.deleteCradleById(cradleId);
    if (!result) {
      return res.status(404).json({ message: "Cradle not found" });
    }

    return res.status(200).json({ message: "Cradle deleted successfully" });
  } catch (error) {
    next(error);
  }
};