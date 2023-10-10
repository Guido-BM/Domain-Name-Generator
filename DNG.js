const part1 = ["my", "the"];
const part2 = ["great", "super"];
const part3 = ["website", "project"];

for(let i = 0; i < part1.length; i++){
    for(let j = 0; j < part2.length; j++) {
        for (let k = 0; k < part3.length; k++){
            console.log(`${part1[i]}${part2[j]}${part3[k]}.com`)
        }
    }
}