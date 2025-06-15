const { handleDownload } = require("../services/downloaderService");

exports.downloadPinterest = async (req, res) => {
   try {
    const { url } = req.body;
    const result = await handleDownload("pinterest", url);
    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(500).send(error.message)
  }
};
