function bubble(arr){
    let swapped
    do{
        swapped =false
        for(let i =0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp =arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
    
            }
        }

    }while(swapped)
    
    return arr
}


const arr =[7,6,8,-4,3,9]
bubble(arr)
console.log(arr)