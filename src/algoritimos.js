// Selection Sort
function selectionSort(arr) {
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
    	let minIndex = i;
    	for (let j = i + 1; j < len; j++) {
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

// Bubble Sort
function bubbleSort(arr) {
	const len = arr.length;
	for (let i = 0; i < len - 1; i++) {
    	for (let j = 0; j < len - 1 - i; j++) {
        	if (arr[j] > arr[j + 1]) {
            	[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        	}
    	}
	}
	return arr;
}

// Insertion Sort
function insertionSort(arr) {
	const len = arr.length;
	for (let i = 1; i < len; i++) {
    	let current = arr[i];
    	let j = i - 1;
    	while (j >= 0 && arr[j] > current) {
        	arr[j + 1] = arr[j];
        	j--;
    	}
    	arr[j + 1] = current;
	}
	return arr;
}

// Merge Sort
function mergeSort(arr) {
	if (arr.length <= 1) {
    	return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, mid));
	const right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
    	if (left[leftIndex] < right[rightIndex]) {
        	result.push(left[leftIndex]);
        	leftIndex++;
    	} else {
        	result.push(right[rightIndex]);
        	rightIndex++;
    	}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Quick Sort
function quickSort(arr) {
	if (arr.length <= 1) {
    	return arr;
	}
	const pivot = arr[0];
	const left = [];
	const right = [];
	for (let i = 1; i < arr.length; i++) {
    	if (arr[i] < pivot) {
        	left.push(arr[i]);
    	} else {
        	right.push(arr[i]);
    	}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}

// Heap Sort
function heapSort(arr) {
	const len = arr.length;
	for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    	heapify(arr, len, i);
	}
	for (let i = len - 1; i > 0; i--) {
    	[arr[0], arr[i]] = [arr[i], arr[0]];
    	heapify(arr, i, 0);
	}
	return arr;
}

function heapify(arr, len, i) {
	let largest = i;
	const left = 2 * i + 1;
	const right = 2 * i + 2;
	if (left < len && arr[left] > arr[largest]) {
    	largest = left;
	}
	if (right < len && arr[right] > arr[largest]) {
    	largest = right;
	}
	if (largest !== i) {
    	[arr[i], arr[largest]] = [arr[largest], arr[i]];
    	heapify(arr, len, largest);
	}
}

// Exemplo de uso para cada algoritmo:
const array = [12, 11, 13, 5, 6];

console.log("Selection Sort:", selectionSort([...array]));
console.log("Bubble Sort:", bubbleSort([...array]));
console.log("Insertion Sort:", insertionSort([...array]));
console.log("Merge Sort:", mergeSort([...array]));
console.log("Quick Sort:", quickSort([...array]));
console.log("Heap Sort:", heapSort([...array]));