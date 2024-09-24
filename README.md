# Demo Sauce Testing Suite with Cypress-Cucumber

## Overview

This project is designed to perform end-to-end testing on the Sauce Demo application using Cypress and Cucumber. It covers login functionality, adding products to the cart, and logging out from the application.

## Project Structure

```
sauce-demo-testing/
│
├── cypress/
|   ├── downloads
│   ├── e2e/
│   │   └── saucedemo/
│   │       ├── login.feature
│   │       └── login.js
│   ├── fixtures/
│   ├── reports/
|   |   └── assets
|   |       └── mochawesome.html
│   ├── support/
│   │   └── e2e.js
├── create-report.js
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

### File Descriptions

- **cypress/e2e/saucedemo/login.feature**: This file contains the feature definitions for testing the login, adding products to the cart, and logout functionality.

- **cypress/e2e/saucedemo/login.js**: This file contains the step definitions that implement the steps outlined in the feature file using Cypress and Cucumber.

- **cypress/support/e2e.js**: This file is used to define custom commands that can be reused throughout the tests.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/nakais/Sauce-Demo-Testing-Project.git
   cd Sauce-Demo-Testing-Project
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Open Cypress:

   ```bash
   npx cypress open
   ```
   
## Video Demonstration

A narrated video demonstration of the tests can be viewed here:
https://www.loom.com/share/fe0f3d7993394904aacf77a36eef3411?sid=d4322925-8f14-41da-bbe1-f75a0146cdca

## Run the Tests & Report Generation

After running your tests, you can generate a Mochawesome report by following these steps:

1. **Run the Tests**: Ensure that you have executed your tests using the command:

   ```bash
   npx cypress run
   ```

2. **Generate the Report**: Run the following command to generate the report:

   ```bash
   npm run report
   ```

3. **Report**: After running the above command, check the folder path \`cypress/reports/mochawesome.html\` directory for the generated report files.
![image](https://github.com/user-attachments/assets/13d6e5f6-bedd-4e99-a231-215f377e92d6)
