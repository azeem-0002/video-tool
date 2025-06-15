const { handleDownload } = require("../services/downloaderService");

exports.downloadTikTok = async (req, res) => {
  try {
    const { url } = req.body;
    const result = await handleDownload("tiktok", url);
    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(500).send(error.message)
  }
};
