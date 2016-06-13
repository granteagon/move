"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = move;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function move(array, moveIndex, toIndex) {
  /* #move - Moves an array item from one position in an array to another.
      Note: This is a pure function so a new array will be returned, instead
     of altering the array argument.
     Arguments:
    1. array     (String) : Array in which to move an item.         (required)
    2. moveIndex (Object) : The index of the item to move.          (required)
    3. toIndex   (Object) : The index to move item at moveIndex to. (required)
  */
  var itemRemovedArray = [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, array.length)));
  return [].concat(_toConsumableArray(itemRemovedArray.slice(0, toIndex)), [array[moveIndex]], _toConsumableArray(itemRemovedArray.slice(toIndex, itemRemovedArray.length)));
}