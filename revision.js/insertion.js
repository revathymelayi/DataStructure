function insertion(arr){
    for(let i =1;i<arr.length;i++){
        let numberToinsert= arr[i]
        let j =i-1
        while(j>=0 && arr[j]>numberToinsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numberToinsert
    }
}

const array =[-6,20,8,-2,4]

insertion(array)
console.log(array)