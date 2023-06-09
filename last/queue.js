class Queue {
    constructor(){
        this.items = []
    }
    enequeue(elements){
        this.items.push(elements)

    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
       return this.items.length ===0
    }
    getSize(){
        return this.items.length
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    display(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
queue.enequeue(10)
queue.enequeue(20)
queue.enequeue(30)
queue.enequeue(40)
queue.display()
queue.dequeue()
queue.display()