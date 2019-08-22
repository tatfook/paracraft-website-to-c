
module.exports = app => {
  app.get('/', app.controller.home.homepage);
  app.get('/download', app.controller.home.homepage);
  app.get('/qrDownload', app.controller.qr.index);
  app.get('/paracraftStory', app.controller.home.homepage);
};