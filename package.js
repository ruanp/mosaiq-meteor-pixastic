Package.describe({
	summary: "Expose Pixastic.js mosaic method for mosaiq.me"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/pixastic.mosaiq.js', 'client');
});