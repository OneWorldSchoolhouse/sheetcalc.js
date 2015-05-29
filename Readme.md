sheetCalc.js
================================================

sheetCalc.js is a calculation library for JavaScript that allows you to leave all of your math calculations in excel.

**Note: This repository is just the run time dependecies!**

What & Why?
----------------------------------------
Writing Math in JavaScript is not fun. It is much easier to write & test math expressions in excel. So we convert them.
We use formula.js to convert all of the excel functions to JavaScript equivalents.

**Note: This library doesn't have the Excel to JavaScript conversions. This just the run time libraries!!!**



Installation
------------------------------
Add the following to your HTML file
`<script src=".path/formula.standalone.js"></script>`
`<script src="path/sheetCalc.js"></script>`

This will include the entire library with all dependences.


How to use
---------------------------------
Check out the example folder for two examples on how to use this library and for the excel sheet it was generated from.

Building
----------------------------------------
1. Install [node.js](http://nodejs.org/)
2. Install grunt `npm install grunt -g`
3. Build with grunt
  * Normal: `grunt`
  * Standalone: `grunt standalone` (deperacted, include both  `formula.standalone.js` and `sheetCalc.js`)
  * Development: `grunt dev`

License
-------------------------------------------
This code is distributed under the MIT License. Se License file for more details

Copyright (c) 2015, One World Schoolhouse, University of Toledo
