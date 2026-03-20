Automated Smoke Test Suite for Amazon.com using Playwright and TypeScript. This repository contains a suite of automated Smoke Tests for Amazon.com, developed as a final exam project for a QA Engineering course. The primary goal is to verify critical website functionalities through "Happy Path" scenarios, ensuring the core user journey remains stable.

Tech Stack Framework: Playwright

Language: TypeScript

Design Pattern: Page Object Model (POM)

Architecture: Custom Fixtures for enhanced test readability and maintenance

Reporting: Playwright HTML Reporter

Automated Scenarios (Smoke Tests) Based on the implementation in this project, the following flows are covered:

User Authentication: Verifying the login process with valid credentials (LoginTest.spec.ts).

Product Search & Selection: Searching for specific items (e.g., "Waiting for the Barbarians") and verifying the results.

E-commerce Flow (Buy Flow): Testing the end-to-end journey of adding a book to the shopping cart and verifying the cart count updates (BuyFlowTest.spec.ts).

Form Interaction: General verification of form inputs and submission visibility.

Getting Started

Clone the repository: Bash git clone https://github.com/marija22-dotcom/AmazonSmookeTesting.git
Install dependencies: Bash npm install
Run the tests: Bash npx playwright test
View the HTML report: Bash npx playwright show-report
Note: For security reasons, the TestData.ts file containing credentials is not included in this repository. To run tests locally, please create a TestData.ts file based on the project structure.

###  Test Execution Videos

* [Login Test Video](./media/login_test_video.webm)
* [Buy Flow Test Video](./media/buyFlow_test_video.webm)
