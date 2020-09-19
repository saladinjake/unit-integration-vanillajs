# Front-end Javascript Testing

Goals:

1. Unit testing
2. Integrations testing



## Unit testing

Unit tests will need to test individual functions (white-box) using:

- Runner: Karma
- Framework: Mocha
- Assertions: Chai Expect, Chai-as-promised

Individual functions will be required,
and tested in isolation.(White box testing): Testing
concerned with the internal details of how each function works.

Karma is used as the test runner
rather than Mocha directly,
because we need access browser functionality.

## Integration testing

Integration tests will need to test entire application (black-box) using:

- Runner: Webdriver.io
- Framework: Mocha
- Assertions: Chai Expect, Chai-as-promised

The entire application will be run,
and tests will simulation actual usage of the web site.
(black box testing): Testing not concerned with the details of how the application works,
just the end results.

Webdriver.io is used as the test runner,
it is used to interface with a selenium server.
