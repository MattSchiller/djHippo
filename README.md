# DJ Hippo Website
### Getting Started
To develop on this repo:
- `npm install`
- `npm run start` (to kick off the webpack processes)

### Site Content
The content for this single page app is and should be primarily supplied by config yaml files. This allows non-technical contributors (like dj Hippo himself) to update the site without a recompilation of the source code.

### Syncing Content
For content updates, this should be driven by changes to the files in the `/config` directory or in the `/assets` directory. Feel free to make any changes/additions to files in these directories and use the `scripts/sync-configs-and-assets.sh` command to sync them to the hosted server.

For build/css updates, use the `scripts/sync-build.sh` command.

Both of these require the login for the hosted site, but can be "upgraded" to use rsa keys. These keys *SHOULD NEVER BE COMMITTED TO THIS REPO*, but you should feel free to sync them to the hosted server. To add your key to the server (and therefor not need to keep entering a password in manually), generate a key and use the command
>`~/.ssh/id_rsa.pub | ssh username@your-domain.com 'cat - >> ~/.ssh/authorized_keys'`
