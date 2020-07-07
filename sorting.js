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