// function insertion(array){
//     for(let i=1;i<array.length;i++){
//         let numberToinsert = array[i]
//         let j=i-1

//         while(j>=0 && array[j]>numberToinsert){
//             array[j+1]=array[j]
//             j=j-1
//         }
//         array[j+1]=numberToinsert
//     }
//     return array
// }

// const array =[4,2,1,-2,7,8]
// const sorted =insertion(array)
// console.log(sorted)

Push(elements){
   this.items.push(elements)
}