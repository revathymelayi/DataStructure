function mergeSort(array){
    if(array.length<2)
    return array
 let mid = Math.floor(array.length/2)
 let leftArr = array.slice(0,mid)
 let rightArr = array.slice(mid)

 return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]

}

const arr=[4,-2,6,8,1,-4,5]
console.log(mergeSort(arr))