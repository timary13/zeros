# Zeros

## Task

Implement function `zeros(str)`, that for given expression will return the number of zeros in the end of number.
Expression contains only factorials of numbers and multiplying signs, like: `zeros('5!*7!*6!!*7!!')`
`5! === 1 * 2 * 3 * 4 * 5`
`10!! === 2 * 4 * 6 * 8 * 10`
`7!! === 1 * 3 * 5 * 7`

```js
zeros('5!') // -> 1 because 5! === 120
zeros('10!') // -> 2 because 10! === 3628800
zeros('9!!*10!!') // 2 -> because 9!!*10!! === 3628800
8!! = 2 * 4 * 6 * 8 = 384
9!! = 1 * 3 * 5 * 7 * 9 = 945
10!! = 2 * 4 * 6 * 8 * 10 = 3840
8!! * 9!! * 10!! = 1 393 459 200‬

11!! = 1 * 3 * 5 * 7 * 9 * 11 = 10 395
9!! * 10!! * 11!! = 37 721 376 000‬

20!! = 3 715 891 200‬
9!! * 10!! * 20!! = 13 484 225 986 560 000‬ 

7!! = 105
9!! = 945
7!! * 9!! = ...225
```

Write your code in `src/index.js`

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/Shastel/zeros/  
3. Clone your newly created repo: https://github.com/<%your_github_username%>/zeros/  
4. Go to folder `zeros`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run npm test in command line  
7. You will see the number of passing and failing tests you 100% of passing tests is equal to 100p in score  

## Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2019-q3)
3. Select your task (zeros)
4. Press the submit button and enjoy 

credits [@yankouskia](https://github.com/yankouskia/)
