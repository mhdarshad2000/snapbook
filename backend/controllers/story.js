exports.postStory = async (req, res) => {
  try {
    console.log(req.user.id);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
