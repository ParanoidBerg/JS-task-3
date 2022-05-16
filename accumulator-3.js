let arr = ["JavaScript", "Java", "Python", "Ruby", "C#", "C++", "С", "Go", "Fortran", "PHP"]
let newArr = []
for (let i= 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
        newArr.push(arr[i])
    }
}
console.log(newArr)