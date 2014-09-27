Package.describe({
  name: 'francocatena:compass',
  summary: 'Stylesheet Authoring Environment that makes your website design simpler',
  version: '0.4.2',
  git: 'https://github.com/francocatena/meteor-compass'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.3')

  api.addFiles('sass_include_paths.json', 'server')
})
