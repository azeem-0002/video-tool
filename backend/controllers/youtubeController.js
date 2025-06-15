const { handleDownload } = require("../services/downloaderService");

exports.downloadYouTube = async (req, res) => {
   try {
    const { url } = req.body;
    const result = await handleDownload("youtube", url);
    if (!result.success) {
      return res.status(result.statusCode || 500).json({ error: result.error });
    }
    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(500).send(error.message)
  }
};
