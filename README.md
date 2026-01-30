# SwiftTranslator - Automated Testing Documentation (IT3040)

## Student Information
- Full Name: Sachintha Praneeth
- Student ID: IT23595262
- Module: IT3040 - ITPM (Assignment 1)
- Institution: SLIIT

---

## Project Description
This repository contains the automated functional and non-functional testing suite developed for the SwiftTranslator web application. The project focuses on verifying the accuracy and robustness of Singlish-to-Sinhala character transliteration using a data-driven testing approach implemented via the Playwright framework.

---

## Test Environment and Configuration
The automation suite is specifically configured for the following execution environment:
- Automation Framework: Playwright
- Primary Browser Engine: Firefox
- Scripting Language: JavaScript/TypeScript
- Data Integration: External Excel file (IT23595262.xlsx)

---

## Test Coverage Summary
A total of 36 test scenarios were designed and executed to ensure comprehensive system quality:

| Category | Count | Focus Areas |
| :--- | :--- | :--- |
| Positive Functional | 25 | Standard phonetic mapping and complex linguistic structures. |
| Negative Functional | 10 | Resilience against leetspeak, symbols, and formatting errors. |
| UI Synchronization | 01 | Real-time output updates during keyboard events. |

Detailed test steps, justifications, and execution results (Expected vs Actual) are documented in the IT23595262.xlsx master file.

---

## Repository Structure
The project is organized according to standard automation framework practices:
- tests/: Directory containing the Playwright automation scripts.
- IT23595262.xlsx: The primary data source and test case documentation.
- playwright.config.ts: Global configuration file tailored for Firefox browser execution.
- package.json: Contains project dependencies and execution scripts.
- playwright-report/: Directory where execution results are stored as HTML reports.

---

## Execution Instructions

Follow the sequence of commands below to set up the environment and execute the test suite locally.

### 1. Prerequisite Setup
Install the necessary project dependencies:
```bash
npm install
2. Browser Engine Installation
Install the Firefox browser engine specifically for Playwright execution:

Bash
npx playwright install firefox
3. Running Automated Tests
Execute the full suite of tests using the Firefox project configuration:

Bash
npx playwright test --project=firefox
4. Viewing Execution Reports
Generate and display the detailed HTML report to review execution logs:

Bash
npx playwright show-report
