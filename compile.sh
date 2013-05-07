#!/bin/bash

# compiles assets/less to assets/css

# needs npm install -g less
lessc assets/less/screen.less assets/css/style.css
lessc --yui-compress assets/less/screen.less assets/css/style.min.css
echo "done"

