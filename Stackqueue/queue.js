class Queue{
    constructor(){
        this.items=[]
    }

    enequeue(elements){
        this.items.push(elements)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString())
    }

}


const queue = new Queue()
console.log(queue.isEmpty())

queue.enequeue(10)
queue.enequeue(20)
queue.enequeue(30)

queue.print()
console.log(queue.size())

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
