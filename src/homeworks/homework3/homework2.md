# Homework # 3

## Before you start:

1. The result of homework - single Postman Collection + video/gif of your Jenkins job configuration and execution
2. JQL sample and access to Jira project will be provided by your mentor.
3. Avoid using Environment/Global Variables for the tasks, use Collection Variables instead
4. Clean Collection Variables from their values, just keep variable names
5. Code does not have passwords for access to third-party services in clear form, e.g. ANY SENSITIVE DATA (like your credentials) should not be stored on Postman Cloud/ GitHub
6. If you're generating variables in runtime - Postman should clean them up after the test run.

## Task #1:

You need to implement a Postman collection to migrate test cases from Jira into TestRail by proved JQL query.

You can use following mapping for Test Rail data:

|Test Rail Key                 |Value                            |
|------------------------------|---------------------------------|
|Test Rail Project             |Sandbox 2.0                      |
|Test Rail Suite Name          |Your name + Jira Project Name    |
|Test Rail Case Type           |Random Number from 1 to 5        |
|Test Rail Case Title          |Jira Ticket Header + Current Date|
|Test Rail Case Priority       |Take from Jira Ticket            |
|Test Rail Case Steps          |Take from Ticket Description     |
|Test Rail Case Expected Result|Take from Ticket Description     |

Your Postman Collection should meet the following requirements:
1. Number of steps in Test Case should be calculated basing on the number of steps in Jira Ticket. Each step should be stored in separate Test Rail's Test Case Step.
2. Before creating new Test Suite Collection checks whether Test Suite with the provided name exists. If not - new Test Suite is created. Otherwise, existing Test Suite is used.
3. Before creating new Test Case Collection checks whether Test Case with the provided name exists. If not - new Test Case is created. Otherwise, existing Test Case should be edited/skipped.

## Task #2:

Create Jenkins job that will execute Postman Collection from Task #1 every working day from 3 A.M. to 6 A.M. 