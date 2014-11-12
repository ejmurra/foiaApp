foiaApp
=======
The goal for this app is to create an intuitive system for filing and documenting responses to FOIA requests. The aim is to create a system that is ready out-of-the-box and can be hosted internally by a newsroom or publicly by a government office.

Setup
=====
Enter the following commands in your *nix terminal:

* `sudo apt-get install nodejs`
* `sudo apt-get install mongodb`
* `mongod`
* `mkdir foiaFiler`
* `cd foiaFiler`
* `git clone <this repo>`
* `sudo npm install`
* `gulp dev`

Then point your browser to: `127.0.0.1:3000`

TODO
====
* ~~Authenticate requests with user~~
* Implement a show/hide div with request and response info when a user clicks on a request
* Configure request email handling

Future features
===============
* Require editor approval before a request is sent
