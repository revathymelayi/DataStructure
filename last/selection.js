function selection (arr){
    for(let i =0;i<arr.length-1;i++){
        let min = i
        for(let j = i+1;j<arr.length;j++)
        {
         if(arr[j]<arr[min]){
            min=j
         }
        }

        let temp = arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    return arr
}

const array =[2,8,3,4,1,-2]
console.log(selection(array))