const {
  igdl,
  ttdl,
  fbdown,
  twitter,
  youtube,
  capcut,
  pinterest
} = require('btch-downloader');

async function handleDownload(platform, url) {
  try {
    switch (platform) {
      case 'instagram': return { success: true, statusCode:200, data: await igdl(url) };
      case 'tiktok': return { success: true, statusCode:200, data: await ttdl(url) };
      case 'facebook': return { success: true, statusCode:200, data: await fbdown(url) };
      case 'twitter': return { success: true, statusCode:200, data: await twitter(url) };
      case 'youtube': return { success: true, statusCode:200, data: await youtube(url) };
      case 'capcut': return { success: true, statusCode:200, data: await capcut(url) };
      case 'pinterest': return { success: true, statusCode:200, data: await pinterest(url) };
      default: return { success: false, statusCode:404, error: 'Unsupported platform' };
    }
  } catch (error) {
    return { success: false, statusCode:500, error: error.message };
  }
}

module.exports = { handleDownload };
