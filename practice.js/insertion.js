function insert(arr){
    for(let i =1;i<arr.length;i++){
        let numberToinsert = arr[i]
        let j =i-1
        while(j>=0 && arr[j]>numberToinsert){
            arr[j+1]=arr[j]
            j=j-1
        }

        arr[j+1]=numberToinsert
    }
}

const arr=[6,3,-4,5,7,1,9]
insert(arr)
console.log(arr)