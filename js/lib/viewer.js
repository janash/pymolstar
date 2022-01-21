var widgets = require('@jupyter-widgets/base');
var mol = require('./molstar');
require('./molstar.css')

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
    MolstarModel: MolstarModel,
    MolstarView: MolstarView,
};