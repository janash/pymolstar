pymolstar
===============================

Jupyter widget for [MolStar Viewer](https://molstar.org/viewer/). Just a simple way to embed for now.

Installation
------------

To install execute the following in your terminal.

```bash
git clone https://github.com/janash/pymolstar.git
cd pymolstar
conda env create -f dev_environment.yaml
conda activate molstar-dev
pip install -e .
jupyter nbextension install --py --symlink --overwrite --sys-prefix pymolstar
jupyter nbextension enable --py --sys-prefix pymolstar
```

When actively developing your extension for JupyterLab, run the command:

    $ jupyter labextension develop --overwrite pymolstar

Then you need to rebuild the JS when you make a code change:

    $ cd js
    $ yarn run build

You then need to refresh the JupyterLab page when your javascript changes.

Usage
-----

```python
import pymolstar
pymolstar.viewer(PDB_ID)
```

To see an example, navigate to the `examples` directory.
