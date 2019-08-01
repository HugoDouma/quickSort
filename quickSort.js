const fs = require('fs');

const file = fs.readFileSync('./quickSort.txt', 'utf-8');



const finalFile = file.split('\n').map(e => {
    return parseInt(e, 10);
})



let comparisons = 0;


    function quick_Sort(origArray) {

        if (origArray.length <= 1) { 
            return origArray;
        } else {
            var left = [];
            var right = [];
            var newArray = [];
            var pivot = origArray.pop();
            var length = origArray.length;
            // I have tried comparisons += length - 1; too, but i doesn't work
            comparisons += length;
            for (var i = 0; i < length; i++) {
                if (origArray[i] <= pivot) {
                    left.push(origArray[i]);
                    
                } else {
                    right.push(origArray[i]);
                }
            }

            for(var i = 0; i < right.length; i++) {
                comparisons++;
                if(right[i] < pivot) {
                    return right.splice(i, 0, pivot);
            }
            }

            
    
            return newArray.concat(quick_Sort(left), quick_Sort(right));
        }
    }

const result = quick_Sort(finalFile); 
// expected output: 25

console.log(result);


/*res.status(200).json({
    "data": {
        comparisons,
        length: result.length,
        result
    }
})





app.listen(3500, () => {
    console.log('Server is listening');
}) */

//var sortedArray = quick_Sort(finalFile, 0, items.length - 1);
//console.log(sortedArray);