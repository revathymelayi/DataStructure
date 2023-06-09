function insertionsort(array){
    
    for(let i =1;i<array.length;i++){
        let numberToinsert = array[i]
        let j = i-1
       while(j>=0 && array[j]>numberToinsert){
        array[j+1]=array[j]
        j=j-1
       }

       array[j+1]=numberToinsert
    }
}

const array =[-6,20,8,-2,14]
insertionsort(array)
 console.log(array)