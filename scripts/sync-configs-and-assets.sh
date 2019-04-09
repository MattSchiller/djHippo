#!/bin/bash

# sync configs & images
scp -P 2222 -r ~/repos/djHippo/configs djhippo@192.185.21.201:./public_html~
scp -P 2222 -r ~/repos/djHippo/assets djhippo@192.185.21.201:./public_html
