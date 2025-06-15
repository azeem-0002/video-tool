const { handleDownload } = require("../services/downloaderService");

exports.downloadInstagram = async (req, res) => {
   try {
    const { url } = req.body;
    const result = await handleDownload("instagram", url);
    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(500).send(error.message)
  }
};
