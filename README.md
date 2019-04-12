<h1 align="center" style="border-bottom: none;">🚀 Watson Assistant Duo Demo</h1>

[![Build Status](https://travis-ci.org/watson-developer-cloud/assistant-demo.svg?branch=master)](https://travis-ci.org/watson-developer-cloud/assistant-demo)

In this sample application, you're engaging with a banking virtual assistant. The assistant simulates a few scenarios, such as making a credit card payment, booking an appointment with a banker and choosing a credit card. Watson can understand your entries and respond accordingly.


[![Demo](./demo.gif)](https://watson-assistant-demo.ng.bluemix.net)



## Prerequisites

1. Sign up for an [IBM Cloud account](https://cloud.ibm.com/registration).
1. Download the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html#overview).
1. Create an instance of the Watson Assistant service and get your credentials:
    - Go to the [Watson Assistant][service_url] page in the IBM Cloud Catalog.
    - Log in to your IBM Cloud account.
    - Click **Create**.
    - Click **Show** to view the service credentials.
    - Copy the `apikey` value.
    - Copy the `url` value.

## Configuring the application

1. In the application folder, copy the *.env.example* file and create a file called *.env*

    ```
    cp .env.example .env
    ```

2. Open the *.env* file and add the service credentials that you obtained in the previous step.

    Example *.env* file that configures the `apikey` and `url` for a Watson Assistant service instance hosted in the US East region:

    ```
    ASSISTANT_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
    ASSISTANT_URL=https://gateway-wdc.watsonplatform.net/assistant/api
    ```

## Running locally

1. Install the dependencies

    ```
    npm install
    ```

1. Run the application

    ```
    npm start
    ```

1. View the application in a browser at `localhost:3000`

## Deploying to IBM Cloud as a Cloud Foundry Application

1. Login to IBM Cloud with the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli/index.html#overview)

    ```
    ibmcloud login
    ```

1. Target a Cloud Foundry organization and space.

    ```
    ibmcloud target --cf
    ```

1. Edit the *manifest.yml* file. Change the **name** field to something unique.  
  For example, `- name: my-app-name`.
1. Deploy the application

    ```
    ibmcloud app push
    ```

1. View the application online at the app URL.  
For example: https://my-app-name.mybluemix.net


## Codebase Structure

```s
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

## License

This sample code is licensed under Apache 2.0.  
Full license text is available in [LICENSE](LICENSE).

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM

Find more open source projects on the
[IBM Github Page](http://ibm.github.io/).

[service_url]: https://www.ibm.com/cloud/watson-assistant/
[docs]: https://cloud.ibm.com/docs/services/assistant/index.html#about
