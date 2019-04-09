#!/bin/bash

# sync build & main page
scp -v -P 2222 -r ~/repos/djHippo/build/bundle.js djhippo@192.185.21.201:./public_html/build~
scp -v -P 2222 -r ~/repos/djHippo/build/index.html djhippo@192.185.21.201:./public_html
