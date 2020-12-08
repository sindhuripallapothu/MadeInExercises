var lookAndSay = function(input){
    if(input == 0) return;
    var output = []
    var count = 0

    for(let i=0; i< input.length; i++){
        count++
        if(input[i] != input[i+1]){
            output.push([count, input[i]])
            count = 0
        }
    }
    // console.log(output)
    return output
}

lookAndSay([1])
lookAndSay([1, 1]) 
lookAndSay([2, 1])
lookAndSay([1,2,1,1])

console.log(JSON.stringify(lookAndSay([1])) === JSON.stringify([ [ 1, 1 ] ]))
console.log(JSON.stringify(lookAndSay([1,1])) === JSON.stringify([ [ 2, 1 ] ]))
console.log(JSON.stringify(lookAndSay([2,1])) === JSON.stringify([ [ 1, 2 ], [ 1, 1 ] ]))
console.log(JSON.stringify(lookAndSay([1,2,1,1])) === JSON.stringify([ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ] ]))
