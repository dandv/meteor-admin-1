Package.describe({
  name: "dcsan:yogiben-admin",
  summary: "A complete admin dashboard solution",
  version: "0.9.7",
  git: "https://github.com/dcsan/meteor-admin"
});

Package.on_use(function(api){

  both = ['client','server']

  api.versionsFrom('METEOR@1.0');

  api.use([
    'iron:router@0.9.3',
    'coffeescript',
    'accounts-base',
    'accounts-password',
    'underscore',
    'aldeed:autoform@4.0.0-rc6',
    'aldeed:collection2',
    // 'aldeed:autoform@2.0.2 || 3.1.0',
    // 'aldeed:autoform@3.2.0',
    // 'aldeed:autoform@4.0.0-rc9',
    'aldeed:simple-schema',
    'alanning:roles@1.2.13',
    'aldeed:template-extension',
    'raix:handlebar-helpers@0.1.2'
  ],
  both);

  api.use(['less','session','jquery','templating'],'client')

  api.use(['email'],'server')

  api.add_files([
    'lib/both/AdminDashboard.coffee',
    'lib/both/router.coffee'
    ], both);

  api.add_files([
    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/admin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/css/admin-layout.less',
    'lib/client/css/admin-custom.less',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/slim_scroll.js',
    'lib/client/js/datatable.js',
    'lib/client/js/autoForm.coffee',
  ], 'client');

  api.add_files([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee'
    ], 'server');



  api.export('AdminDashboard',both)

});
