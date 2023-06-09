class HashTable{
  constructor(size){
    this.table=new Array(size)
    this.size=size

  }

  hash(key){
    let total = 0
    for(let i=0;i<key.length;i++){
        total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key,value){
    const index = this.hash(key)
    // this.table[index]=value
    const bucket = this.table[index]
    if(!bucket){
        this.table[index] = [[key,value]]
    }else{
        const sameKeyitem = bucket.find(item => item[0] === key)
        if(sameKeyitem){
            sameKeyitem[1]=value
        }else{
            bucket.push([key,value])
        }
      
    }

  }

  get(key){
    const index = this.hash(key)
    // return this.table[index]
    const bucket = [[key,value]]
    if(bucket){
        const sameKeyitem =bucket.find(item=>item[0] === key)
        if(sameKeyitem){
           return  sameKeyitem[1]
        }
    }
     return undefined
  }

  remove(key){
    const index = this.hash(key)
    // this.table[index]=undefined
    const bucket = this.table[index]
    if(bucket){
        const sameKeyitem=bucket.find((item)=>item[0]===key)
        if(sameKeyitem){
            bucket.splice(bucket.indexOf(sameKeyitem),1)
        }
    }
  }

  display(){
    for(let i =0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }
       
    }
  }
}

const table= new HashTable(50)

table.set("name","chicku")

table.set("mane","unni")
table.set("eanm","sree")
table.set("age",30)
table.display()