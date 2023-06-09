function bubbleSort(arra){
    let swapped 
    do{
        swapped =false
        for(let i=0;i<arra.length-1;i++){
            if(arra[i]>arra[i+1]){
                let temp =arra[i]
                arra[i]=arra[i+1]
                arra[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
   
}

const arr=[4,-1,7,-6,5,8]
bubbleSort(arr)
console.log(arr)