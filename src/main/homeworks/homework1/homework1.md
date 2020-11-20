# Homework # 1

## Before you start:

1. All tasks should be done in VS Code/any other IDE
2. The result of homework - updated `.js` files under `homework1` folder
3. Avoid using `var` - try out `const` + `let` instead
4. ANY SENSITIVE DATA (like your credentials) should not be stored on GitHub

## Task #1:

There is a string "Text". Create a function that:
- finds all "\" (backslashes),
- logs their amount into console,
- replaces them with "" (empty string)

<details>
<summary>I could use some help...</summary>
<p>
Checkout `String.prototype.split()` + `Array.prototype.join()` methods:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
</p>
</details> 

## Task #2:

There is an object "Planets". Create a function that:
- finds all planets, where "diameter" <= 10000, and puts them into array "small planets".
- finds all planets, where "diameter" > 10000, and puts them into array "big planets".

<details>
<summary>I could use some help...</summary>
<p>
Checkout `Array.prototype.filter()` method:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
</p>
</details> 

## Task #3:

There are 2 arrays: "names1" and "names2". Create a function that:

- returns array, that has names from array names1 excluding names from array names2

```js
const names1 = ['Alex', 'Dima', 'Kate', 'Galina', 'Ivan'];
const names2 = ['Dima', 'Ivan', 'Kate'];
```

<details>
<summary>I could use some help...</summary>
<p>
Checkout `Array.prototype.includes()` method:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
</p>
</details> 

## Task #4:

Create object "utils". It should contain:
- function to generate random number;
- function to generate random alphanumeric string;
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message;

<details>
<summary>I could use some help...</summary>
<p>
Checkout StackOverflow for help:

- https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
</p>
</details> 