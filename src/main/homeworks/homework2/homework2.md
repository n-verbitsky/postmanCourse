# Homework # 2

## Before you start:

1. All tasks should be done in Postman
2. The result of homework - single Postman Collection
3. Avoid using Environment/Global Variables for the tasks, use Collection Variables instead
4. Clean Collection Variables from their values, just keep variable names
5. ANY SENSITIVE DATA (like your credentials) should not be stored on Postman Cloud/ GitHub

## Task #1:

There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
- use lodash to complete this task

```javascript
const names1 = ["Alex", "Dima", "Kate", "Galina", "Ivan"];
const names2 = ["Dima", "Ivan", "Kate"];
```

<details>
<summary>I could use some help...</summary>
<p>
Checkout **difference** function in lodahs lib:

- https://lodash.com/docs/4.17.15#difference
</p>
</details>  

## Task #2:

There is a request to get issues from JIRA:
```curl
curl --location --request GET '{{jiraHost}}/rest/api/2/search' \
--header 'Content-Type: application/json' 
```

Create test that checks the response JSON schema using ajv.

Note:
* Custom fields should not be required in your schema.

## Task #3:

There are 3 Requests for https://ws-tracks.demohoster.com/

**Create Project:**

```curl
curl --location --request POST '{{host}}/projects.xml' \
--header 'Content-Type: text/xml' \
--header 'Content-Type: text/plain' \
--data-raw '    <project>
        <default-context-id type="integer" nil="true"/>
        <default-tags></default-tags>
        <description></description>
        <name>${{guid}}</name>
    </project>'
```

**List Projects:**

```curl
curl --location --request GET '{{host}}/projects.xml' \
--header 'Content-Type: text/xml'
```

**Delete Project:**

```curl
curl --location --request DELETE '{{host}}projects/ID.xml' \
--header 'Content-Type: text/xml'
```

Create a collection, that:
* Creates Project with:
  * Description, containing the current date
  * Name, containing random alphanumeric string

* Gets List of Projects:
  * Asserts that new project is in the list

* Deletes:
  * Project created on step 1
  * All other projects with project name length > length of project name from step 1

Note:
* Get extra points for doing all those actions in 1 Request item [e.g there is only 1 request in your collection]

