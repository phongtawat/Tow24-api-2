export const deleteAvailability = async (req, res, next) => {
  try {
    const { AvailabilityId } = req.params;

    const result = await deleteAvailability.deleteAvailability(AvailabilityId);
    if (!result) {
      return res.status(404).json({ message: "Cradle not found" });
    }

    return res.status(200).json({ message: "Cradle deleted successfully" });
  } catch (error) {
    next(error);
  }
};