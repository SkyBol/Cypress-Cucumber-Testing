# Cypress/Cucumber Testing

## Description
This Repository uses a preprocessor to build Cypress TestFiles from Cucumber TestFiles.

It should be used as a submodule for git/BitBucket, or can be expanded.


With normal configurations it detects **.feature/.features** files (in the parent directory):
- **'../test/*filename.feature*'**
- **'../test/*directory*/*filename.feature*'**

And **.ts/.js** files:
- **'../test/common/filename.ts'**
- **'../test/*directory*/filename.js'**


This can be changed in **cypress.config.ts** under **specPattern**

## IMPORTANT
Due to a bug in Cypress for Windows, you cannot include files from the parent directory.

To Fix this, on loadtime, the files inside **'../test'** directory need to be copied into their according folders. This can all be seen inside these two plugin files:
- **'./plugins/copyTestFiles.js'**
- **'./plugins/removeTestFiles.js'**
Should this behaviour ever be fixed, these files can/will be removed and replaced with a simple import.

reference: *https://github.com/cypress-io/cypress/issues/2595*
> **_NOTE:_** It **doesn't** seem like this behaviour will be fixed in the near future.

## Setup
Once Downloaded, run:
> **npm install**

And then
> **npm start**

## Commands

#### start
Opens the Cypress Window to debug Tests.

#### test
Runs all Cypress Tests one after another

