var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
//import { DefaultPluginUISpec, PluginUISpec } from 'molstar/lib/mol-plugin-ui/spec';
//import { createPluginAsync } from 'molstar/lib/mol-plugin-ui/index';
//import { PluginConfig } from 'molstar/lib/mol-plugin/config';
var mol = require('molstar/build/viewer/molstar');
require('molstar/build/viewer/molstar.css')

function initViewer(target) {
    return new mol.Viewer(target, { 
        layoutIsExpanded: false,
        layoutShowControls: false,
        layoutShowRemoteState: false,
        layoutShowSequence: true,
        layoutShowLog: false,
        layoutShowLeftPanel: true,

        viewportShowExpand: true,
        viewportShowSelectionMode: false,
        viewportShowAnimation: false,

        pdbProvider: 'rcsb',
        emdbProvider: 'rcsb',})
}

//mol.Viewer

// See example.py for the kernel counterpart to this file.


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'pymolstar',
        _view_module : 'pymolstar',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World!'
    })
});

var MolstarModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'MolstarModel',
        _view_name : 'MolstarView',
        _model_module : 'pymolstar',
        _view_module : 'pymolstar',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : '1pqr'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        this.value_changed();

        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
    }
});

var MolstarView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        this.value_changed();

        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        var app = document.createElement("div")
        app.setAttribute("id", "app")
        app.setAttribute("style", "width:800px;height:400px;")
        this.el.appendChild(app)
        var viewer = initViewer(app);
        this.viewer = viewer;
        this.viewer.loadPdb(this.model.get('value'))
    }
});


module.exports = {
    HelloModel: HelloModel,
    HelloView: HelloView,
    MolstarModel: MolstarModel,
    MolstarView: MolstarView,
};
