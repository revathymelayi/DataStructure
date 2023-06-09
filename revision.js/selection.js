function selection(arr){
    for(let i =0;i<arr.length-1;i++){
        let min = i
        for(let j =i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }

        let temp =arr[min]
        arr[min]=arr[i]
        arr[i]=temp
    }
}

const array=[64,25,12,22,11]



selection(array)
console.log(array)

