var i18n = require('i18n');
var path = require('path');

i18n.configure({
  locales: ['en', 'sv'],
  directory: path.resolve(__dirname, '../locales'),
  defaultLocale: 'en',
  queryParameter: 'lang',
})

module.exports = (req, res, next) => {
  i18n.init(req, res);
  // res.local('__', res.__);
  // var current_locale = i18n.getLocale();
  return next();
};