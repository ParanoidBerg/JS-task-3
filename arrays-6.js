const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}

let i1 = 0
while (i1 < arr.length) {
    if (i1 % 2 === 0) {
        console.log(arr[i1])
    }
    i1++
}
