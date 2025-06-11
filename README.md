## Project Overview

This is a small project I did in a short time. There are some things I would definitely improve if I had more hours, but I'm happy with how it turned out. I like to work using Page Object Model (POM) because it makes things easier to maintain and understand. Also, I added GitHub Actions to run the tests in CI/CD which is something I always try to include (the executions are currently working as expected).

It would be great to have `data-testid` attributes in the app to use better locators. In other projects I worked on, developers added them on purpose to help the QA automation team and make tests more stable.
---

## Test Coverage

There are 3 tests in this framework:

- `login.test.ts`: logs into the app
- `project.test.ts`: creates a new project
- `stakeholders.test.ts`: adds a stakeholder to the project

Each test uses a different page file with its methods, so everything stays clean and organized.

---

## Things I Would Add With More Time

If I had more time, I’d like to:
- Move the test data (like login info) to a separate file
- Add better reporting
- Maybe create custom commands or helpers for repeated actions

---

## ▶How to Run the Tests

You can run the tests in different ways:

### Run All Tests
```bash
npx playwright test
npx playwright test

### Run an specific test
```bash
npx playwright test tests/login.test.ts
npx playwright test tests/project.test.ts
npx playwright test tests/stakeholders.test.ts

### Run Tests With UI (headed)
```bash
npx playwright test --headed

### See report after running the tests
```bash
npx playwright show-report