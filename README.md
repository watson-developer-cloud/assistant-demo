# Watson Conversation Demo for IBM.com - Redesign

### Build Status
Master [![Build Status](https://travis.ibm.com/Watson/watson-conversation-demo-redesign.svg?token=iJCYw8QYkDn5J4kz9weU&branch=master)](https://travis.ibm.com/Watson/watson-conversation-demo-redesign)  
Dev [![Build Status](https://travis.ibm.com/Watson/watson-conversation-demo-redesign.svg?token=iJCYw8QYkDn5J4kz9weU&branch=dev)](https://travis.ibm.com/Watson/watson-conversation-demo-redesign)

Stage   
This is the repository for an updated Watson Conversation demo, which is intended to be embedded directly within IBM.com on the Conversation service page. It runs on `bluemix.net` and will be `<iframe>`'d into the service page.

### Codebase Structure

```
Root  
  /src  
    index.js (React frontend index)  
    /components  
      /ExampleComponentDirectory  
        ExampleComponent.js  
        ExampleComponent.test.js  
  /public  
    index.html (served at the root route)  
    /styles  
      duo-grid.min.css (Duo grid styles)
    /js
      bundle.js (imports the root react component)
   /config
    Configuration files for Express backend
   /test
    Backend unit and integration tests
index.js (express backend)
server.js (main backend entry point)
.config files
package.json
```

### How to run application

To run the application, you need to:

- `git clone` the repo

- `npm i` to install the dependencies

- `npm start` to launch the server at `localhost:3000`
