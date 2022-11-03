# Roboger Neighboorhood Project
By Brian Noh
Epicodus Independent Project: Roboger Neighboorhood Project   
_Currently not deployed_: [Roboger Neighboorhood Project](noh24.github.com/roboger-neighborhood/)

## Technologies Used  
* HTML
* CSS
* Bootstrap
* JavaScript
* Web API

## Description
This webpage accepts a number from user input and returns a list of values from 0 to the user's inputted number with the following substitution:
* For numbers that contain a 1, all digits are replaced with "Beep!"
* For numbers that contain a 2, all digits are replaced with "Boop!"
* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"  

__Order of priority: 3 > 2 > 1. 3 has higher prioirty over 2 and 1. 2 has higher priority over 1.__ 

## Setup/Installation Requirements
* Clone this repository to your desktop through the Terminal.
* Access your file explorer(Windows/Linux)/finder(MacOs).
* Find and access the folder/directory labeled "roboger-neighborhood".
* Open the file labeled index.html onto your browser.
* Input required information in forms and press submit.

## Specifications/TDD
```
Describe beepityBoopity()

Test1: Take string 0, return array of 0
Code: 
const num = "0";
beepityBoopity(num);
Expected Output: [0];

Test2: Take a string of numbers, replace 3 with "Won't you be my neighbor?" 
Code: 
const num = "3, 0";
beepityBoopity(num);
Expected Output: ["Won't you be my neighbor?", 0];

Test3: Take a string of numbers, replace 2 with "Boop"
Code: 
const num = "3, 0, 2";
beepityBoopity(num);
Expected Output: ["Won't you be my neighbor?", 0, "Boop"];

Test4: Take a string of numbers, replace 1 with "Beep" 
Code: 
const num = "3, 0, 2, 1";
beepityBoopity(num);
Expected Output: ["Won't you be my neighbor?", 0, "Boop", "Beep"];

Test5: Take a string of numbers with one double digit of 1 AND 3.
Code: 
const num = "3, 0, 2, 1, 13";
beepityBoopity(num);
Expected Output: ["Won't you be my neighbor?", 0, "Boop", "Beep", "Won't you be my neighbor?"];

Test6: Take a string of numbers with two double digits of 2 AND 3.
Code: 
const num = "3, 0, 2, 1, 13, 23";
beepityBoopity(num);
Expected Output: ["Won't you be my neighbor?", 0, "Boop", "Beep", "Won't you be my neighbor?", "Won't you be my neighbor?"];

Test7: Take a string of numbers with two double digits of 2 AND 1.
Code: 
const num = "3, 0, 2, 1, 13, 23, 21";
beepityBoopity(num);
Expected Output: ["Won't you be my neighbor?", 0, "Boop", "Beep", "Won't you be my neighbor?", "Won't you be my neighbor?", "Boop"];

Test8: Take a string of numbers with two double digits of 1 AND 0.
Code: 
const num = "3, 0, 2, 1, 13, 23, 21, 10";
beepityBoopity(num);
Expected Output: ["Won't you be my neighbor?", 0, "Boop", "Beep", "Won't you be my neighbor?", "Won't you be my neighoor?", "Boop", "Beep"];

Test9: Take a string of one number, display an array counting up to number, starting from 0.
Code:
const num = "15";
beepityBoopity(num);
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep", "Boop", "Won't you be my neighbor?", "Beep", "Beep"];

Test10: Take a string as second argument, represents name, and attach to the end of "Won't you be my neighbor?"
Code:
const num = "15";
const name = "brian";
beepityBoopity(num, name);
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor, brian?", 4, 5, 6, 7, 8, 9, "Beep", "Boop", "Won't you be my neighbor, brian?", "Beep", "Beep"];
```

## Known bugs
* _No known bugs_.

## Contributing
_Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change_.  
  
Feel free to contact me through <noh24@ymail.com>.

## License
[MIT](./license.txt) License  
Copyright (c) _2022 Brian Noh_