const names = ["Альви","Хамзат", "Муса", "Дени", "Анвар"]
const newNames = [] 
for (let i = 0; i < names.length; i++) {
    if (names[i][0] === "А") {
        newNames.push(names[i])
    }

}
console.log(newNames)