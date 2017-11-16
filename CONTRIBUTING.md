## Questions

If you have questions about this project, you can reach out to Jeff Arn (jtarn@us.ibm.com) or Jack Meyers (jmmeyers@us.ibm.com)

## Reporting a bug

If you encounter a bug with this application, you can post an issue with the `bug` label in this repository. Please fill out the issue template and include as much detail as you can about the nature of the bug.

## Contributing code

If you'd like to contribute code to the repository, please be aware of the following conventions:

- We use `eslint` on Javascript files, and we follow the AirBnB settings, with minor exceptions. Please take this into consideration and run `npm lint` often during development (or better yet have linting integrated into your editor/IDE) to make sure that your code looks and feels consistent to the rest of the project.

- If you are implementing new React components, please make sure to create a new directory within the `/components` sub-directory.
  - Additionally, please provide a test file for each component. We use `jest` and `enzyme` for component testing.
  - Therefore, if you were adding an example component `ExampleComponent`, your contributions would look like:
  
    ```
    /components
    ...
      /ExampleComponent
        ExampleComponent.js
        ExampleComponent.test.js
    ```
