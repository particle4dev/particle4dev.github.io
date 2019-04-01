---
title: Daily Coding Problem 1
date: "2019-04-01T00:00:00.000Z"
description: One of my goals in this year is improve my coding skills, especially in algorithm and data structure. A few days ago, I discovered Daily Coding Problem so decided to give it a shot.
tags: [computer-science]
---

One of my goals in this year is improve my coding skills, especially in algorithm and data structure. I forgot most of them since I graduated from university. A few days ago, my friend suggested me about [Daily Coding Problem](https://www.dailycodingproblem.com/) so decided to give it a shot.

**What is [Daily Coding Problem](https://www.dailycodingproblem.com/)**

Daily Coding Problem is a simple and useful platform that emails you one coding problem to solve in every morning. This ensures that you practice consistently and often enough to stay in shape over along period of time. The premium memebership also offers the opportunity to verify your solution.

This is the question I received in first day after I subscribed:

```
Problem #1

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
```

**This is my solution in JS**

```js
const test = require('tape')

function findTwoNumbers(arr, num){
  const subArrays = arr.map(e => num - e)
  return subArrays.some(e => arr.indexOf(e) !== -1)
}

// TEST CASE

test('find two numbers up to k number test', function (t) {
  t.plan(3)
  t.equal(findTwoNumbers([10, 15, 3, 7], 17),  true)
  t.equal(findTwoNumbers([], 17),  false)
  t.equal(findTwoNumbers([10, 15, 3, 4], 17),  false)
})
```

**Explanation**

My solution is very simple. First, I generated a new array that contains the the difference between the element in the input array and k.

```js
const subArrays = arr.map(e => num - e)
```

In second step, I checked if the new array has any element in the input array. If it has, then we simple return `true` and `false` if it not.

```js
return subArrays.some(e => arr.indexOf(e) !== -1)
```

**Conclusion**

[Daily Coding Problem](https://www.dailycodingproblem.com/) is very useful platform. You should check it out if you have a chance. I think not only it can help you improving your coding skills,
it also can help you to reeparee for an interview in big company like Google, Apple ...

Please share if you think my post is useful :)

Happy Coding; 