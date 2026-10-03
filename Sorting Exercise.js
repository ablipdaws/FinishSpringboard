//bubble sort
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      const next = j + 1;
      if (arr[j] > arr[next]) {
        const temp = arr[j];
        arr[j] = arr[next];
        arr[next] = temp;
      }
    }
  }
  return arr;
}


//insertion sort
function insertionSort(arr) {
 
  for (let i = 0; i < arr.length; i++) {

    let currentValue = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j]; // shift the number over
      j--;                 // keep going backwards
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}

//merge sort
function merge(arr1, arr2) {

  let results = [];
  let i = 0; 
  let j = 0; 

  
  while (i < arr1.length && j < arr2.length) {

 
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++; 
    } else {

      results.push(arr2[j]);
      j++; 
    }
  }


  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }


  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

//quick sort
function pivot(arr, start = 0, end = arr.length - 1) {

  let pivotValue = arr[start];
  let swapIndex = start;


  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivotValue) {
      swapIndex++;

      let temp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = temp;
    }
  }

  let temp = arr[start];
  arr[start] = arr[swapIndex];
  arr[swapIndex] = temp;

  return swapIndex; 
}

//radix sort
function radixSort(nums) {
  console.log("Starting radix sort with:", nums);


  let maxDigitCount = mostDigits(nums);
  console.log("Most digits in any number:", maxDigitCount);


  for (let k = 0; k < maxDigitCount; k++) {
    console.log("\n--- Digit place:", k, "---");

  
    let digitBuckets = [];
    for (let b = 0; b < 10; b++) {
      digitBuckets.push([]);
    }
    console.log("Created empty buckets:", digitBuckets);


    for (let i = 0; i < nums.length; i++) {
      let currentNumber = nums[i];
      let digit = getDigit(currentNumber, k);

      console.log(
        "Number:", currentNumber,
        "Digit at place", k, "is:", digit,
        "→ goes to bucket", digit
      );

      digitBuckets[digit].push(currentNumber);
    }

    console.log("Buckets after distributing numbers:", digitBuckets);

    let newArray = [];
    for (let x = 0; x < digitBuckets.length; x++) {
      
      console.log("Dumping bucket", x, "contents:", digitBuckets[x]);

      for (let y = 0; y < digitBuckets[x].length; y++) {
        newArray.push(digitBuckets[x][y]);
      }
    }

    console.log("New array after collecting buckets:", newArray);

    nums = newArray;
  }

  return nums;
}

//selection sort
function selectionSort(arr) {


  for (let i = 0; i < arr.length; i++) {


    let lowestIndex = i;

    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestIndex]) {
        lowestIndex = j; // found a new smallest value
      }
    }

    if (lowestIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[lowestIndex];
      arr[lowestIndex] = temp;
    }
  }

  return arr;
}
