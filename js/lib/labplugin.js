var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'pymolstar:plugin',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'pymolstar',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

