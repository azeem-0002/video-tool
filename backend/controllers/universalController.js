const { handleDownload } = require("../services/downloaderService");

// Supported platforms list for validation
const supportedPlatforms = [
  "instagram",
  "tiktok",
  "facebook",
  "twitter",
  "youtube",
  "capcut",
  "pinterest"
];

exports.downloadUniversal = async (req, res) => {
  try {
    const { url, platform } = req.body;

    if (!url || !platform) {
      return res.status(400).json({ success: false, error: "URL and platform are required." });
    }

    if (!supportedPlatforms.includes(platform)) {
      return res.status(400).json({
        success: false,
        error: `Unsupported platform. Supported platforms are: ${supportedPlatforms.join(", ")}`
      });
    }

    const result = await handleDownload(platform, url);

    res.status(result.statusCode).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }

};
