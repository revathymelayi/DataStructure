function bubbleSort(array){
    let swapped
    do{
        swapped = false
        for(let i =0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                let temp =array[i]
                array[i]=array[i+1]
                array[i+1]=temp  
                swapped = true              
            }
        }
    }while(swapped)
    return array
}

const arr=[2,1,-4,8,6,5,4,-6]
console.log(bubbleSort(arr))