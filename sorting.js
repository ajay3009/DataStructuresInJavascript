/** Bubble Sort Implementation start */

function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++) {
        let swap = false;
        for(let j=0;j<arr.length-i-1;j++) {
            console.log(arr[j], arr[j+1]);
            if (arr[j] > arr[j+1] ) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr;
}

// bubbleSort([37,45,29,8]);

/** Bubble Sort Implementation end */


/** Selection Sort Implementation start */

function selectionSort(arr) {
    for(let i=0;i<arr.length;i++) {
        let minIndex = i;
        console.log(arr);
        for(let j=i+1; j< arr.length;j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

// selectionSort([34,22,10,19,17]);

/** Selection Sort Implementation end */


/** Insertion Sort Implementation start */

function insertionSort(arr) {
    for(let i=1;i<arr.length;i++) {
        let item = arr[i];
        for(var j=i-1;j>=0 && arr[j] > item;j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = item;
        console.log(arr);
    }
    return arr;
}

//insertionSort([2,1,9,76,4])

/** Insertion Sort Implementation end */




/** Merge Sort Implementation start */

function merge(arr1, arr2) {
    let i =0;
    let j = 0;
    let mergeArr = [];
    while(i< arr1.length || j< arr2.length) {
        if (arr1[i] !== undefined && arr2[j] !== undefined) {
            if (arr1[i] < arr2[j]) {
            mergeArr.push(arr1[i]);
            i++;
            } else if (arr1[i] > arr2[j]) {
                mergeArr.push(arr2[j]);
                j++;
            }
        } else {
            if (i === arr1.length) {
                 mergeArr.push(arr2[j]);
                 j++;
            } else if (j === arr2.length) {
                 mergeArr.push(arr1[i]);
                 i++;
            }
        }
        
    }
   return mergeArr;
}

function mergeSort(arr) {
   if (arr.length <= 1) return arr;
   let left = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
   let right = mergeSort(arr.slice(Math.floor(arr.length/2)));
   return merge(left, right);
}

// mergeSort([1,4,7,9,22,45,67,89,5,21,12,3,19]);

/** Merge Sort Implementation end */

/** Quick Sort Implementation start */

function radix(arr, start = 0, end = arr.length - 1) {
    let index = start;
    for(let i=start+1;i<=end;i++) {
        if (arr[start] > arr[i]) {
            index++;
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }
    }
    [arr[start], arr[index]] = [arr[index], arr[start]];
    return index;
}

function quickSort(arr, left= 0, right = arr.length-1 ) {
    if (left < right) {
        let radixIndex = radix(arr, left, right);
        //left
        quickSort(arr, left, radixIndex-1);
        //right
        quickSort(arr, radixIndex+1, right);
    }
    return arr;
}

quickSort([4,6,9,1,2,5,3]);

/** Quick Sort Implementation end */

/** Radix Sort Implemenation start  */

function digitAtIndex(num, index) {
    return Math.floor((Math.abs(num)/Math.pow(10,index))%10);
}

function noOfDigits(num) {
    return num.toString().length;
}

function maxDigits(arr) {
    let max = noOfDigits(arr[0]);
    for(let i=1;i<arr.length;i++) {
        max = Math.max(max, noOfDigits(arr[i]));
    }
    return max;
}

function radixSort(arr) {
    const maxCount = maxDigits(arr);
    console.log(maxCount);
    for(let i=0;i<maxCount;i++) {
        let temparr = Array.from({length:10}, x => []);
        for(let j=0;j<arr.length;j++) {
            console.log(digitAtIndex(arr[j],i));
            temparr[digitAtIndex(arr[j],i)].push(arr[j]);
        }
        console.log(temparr);
        arr = [].concat(...temparr);
    }
    return arr;
}

radixSort([43,21,67,890,43222,5672,981,9,24]);


/** Radix Sort Implemenation start  */