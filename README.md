Don't forget to consider how to handle any input that might be submitted:

- Empty values (user just presses enter)
- Non-numeric values (It may be helpful to read up about the numerical value, NaN)
- Negative numbers
- Count by number is larger than the count to numbers

Describe: countDracula()

Test #1

Test: "It should return 0 when inputs are empty"
Code:
const countTo = "";
const countBy = "";
countDracula(countTo, countBy);
Expected Output: 0;

Test #2

Test: "It should return the value of countTo if the countBy input is empty"
Code:
const countTo = "30";
const countBy = "";
countDracula(countTo, countBy);
Expected Output: 30;

Test #3

Test: "It should transform user input values into numbers"
Code:
const countTo = "30";
const countBy = "5";
countDracula(countTo, countBy);
Expected Output: 30;

Test #4

Test: "It should count by multiples according to the value of the countBy variable"
Code:
const countTo = "30";
const countBy = "5";
countDracula(countTo, countBy);
Expected Output: 5,10,15,20,25,30;
