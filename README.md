pymolstar
===============================

Jupyter widget for MolStar Viewer

Installation
------------

To install use pip:

    $ pip install pymolstar

For a development installation (requires [Node.js](https://nodejs.org) and [Yarn version 1](https://classic.yarnpkg.com/)),

    $ git clone https://github.com//pymolstar.git
    $ cd pymolstar
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --overwrite --sys-prefix pymolstar
    $ jupyter nbextension enable --py --sys-prefix pymolstar

When actively developing your extension for JupyterLab, run the command:

    $ jupyter labextension develop --overwrite pymolstar

Then you need to rebuild the JS when you make a code change:

    $ cd js
    $ yarn run build

You then need to refresh the JupyterLab page when your javascript changes.
