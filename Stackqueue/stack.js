class Stack{
    constructor(){
        this.items=[]
    }

    push(elements){
        this.items.push(elements)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
    
}

const stack = new Stack()
// console.log(stack.isEmpty())

stack.push(20)
stack.print()

stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
console.log(stack.getSize())
console.log(stack.pop(50))
// console.log(stack.getSize())
// console.log(stack.peek())

