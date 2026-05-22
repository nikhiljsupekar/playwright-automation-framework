# Playwright Automation Framework

A scalable and maintainable end-to-end test automation framework built using **Playwright + TypeScript** following industry-standard design patterns.

---

## Overview

This framework is designed for robust web application testing with:

* Scalable architecture
* Maintainable test structure
* Reusable components
* Cross-browser testing
* CI/CD integration

It follows the **Page Object Model (POM)** for better code organization and test reliability.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions
* HTML Reports

---

## Framework Features

✔ Page Object Model (POM)
✔ Parallel Test Execution
✔ Cross-Browser Testing
✔ Retry Mechanism
✔ Screenshots on Failure
✔ HTML Reporting
✔ Environment Configuration
✔ CI/CD Integration

---

## Project Structure

```bash
playwright-framework/
│
├── tests/
├── pages/
├── utils/
├── fixtures/
├── test-data/
├── reports/
├── playwright.config.ts
└── package.json
```

---

## Installation

Clone repository

```bash
git clone your-repo-link
```

Install dependencies

```bash
npm install
```

---

## Run Tests

Run all tests

```bash
npx playwright test
```

Run specific browser

```bash
npx playwright test --project=chromium
```

Run headed mode

```bash
npx playwright test --headed
```

---

## Generate Report

```bash
npx playwright show-report
```

---

## Sample Features Tested

* Login Functionality
* Form Validation
* Search Flow
* Checkout Process
* API Validation

---

## CI/CD Integration

Integrated with GitHub Actions for:

* Automated test execution
* Scheduled regression runs
* Report generation

---

## Future Enhancements

* Docker support
* Database validation
* API mocking
* Visual testing

---

## Author

**Nikhil Supekar**

QA Automation Engineer focused on building scalable automation solutions.
