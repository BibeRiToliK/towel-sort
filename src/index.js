
// You should implement your task here.
module.exports = function towelSort (matrix = []) {
   let arrConcat = [];
   for (let i = 0; i < matrix.length; i++) {
     if (i % 2 === 0) {
     arrConcat = arrConcat.concat(matrix[i])
     }
     if (i % 2 !== 0) {
     arrConcat = arrConcat.concat((matrix[i]).reverse())
     }
   }
   return arrConcat;
 }
