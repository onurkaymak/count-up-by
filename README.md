Don't forget to consider how to handle any input that might be submitted:

- Empty values (user just presses enter)
- Non-numeric values (It may be helpful to read up about the numerical value, NaN)
- Negative numbers
- Count by number is larger than the count to numbers

Describe: countBy()

Test #1

Test: "It should return 0 when inputs are empty"
Code:
const num1 = "";
const num2 = "";
countBy(num1,num2);
Expected Output: 0
