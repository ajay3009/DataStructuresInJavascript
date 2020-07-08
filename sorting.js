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