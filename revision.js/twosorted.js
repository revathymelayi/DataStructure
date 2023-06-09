function mergeSort(arr1,arr2){
    let i =0
    let j =0
    const mergedArray=[]
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray.push(arr1[i])
            i++
        }else{
            mergedArray.push(arr2[j])
            j++
        }
      }

      while(i<arr1.length){
        mergedArray.push(arr1[i])
        i++
      }

      while(j<arr2.length){
        mergedArray.push(arr2[j])
        j++
      }

      return mergedArray
}

const arr1=[1,3,5]
const arr2 =[2,4,6]
const mergedArray=mergeSort(arr1,arr2)
console.log(mergedArray)