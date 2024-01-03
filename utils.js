"use strict";

const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  let result = [];

  for (let num of strNums) {
    let value = Number(num);
    if (Number.isNaN(value)) {
      throw new BadRequestError(
        `${num} is not a valid number.`);
    }
    result.push(value);
  }
  // console.log("result", result);
  return result;
}

// convertStrNums(["Foo", "2", "3"]);

module.exports = { convertStrNums };