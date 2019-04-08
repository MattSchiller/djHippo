#!/bin/bash

# sync configs
scp -v -P 2222 -r ~/repos/djHippo/configs djhippo@192.185.21.201:./public_html~
scp -v -P 2222 -r ~/repos/djHippo/assets djhippo@192.185.21.201:./public_html
