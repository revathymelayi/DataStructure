class Stack {
    constructor(){
        this.items = []
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
       return  this.items.length===0
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }


}

function deleteMiddle(stack) {
    const tempStack = new Stack();
  
    // Push half of the elements onto tempStack
    const size = Math.floor(stack.getSize() / 2);
   
    for (let i = 0; i < size; i++) {
      tempStack.push(stack.pop());
    }
    
  
    // Remove the middle element (if the stack has odd length)
    if (stack.getSize() % 2 !== 0) {
      stack.pop();
    }
  
    // Pop the remaining elements from stack and push them onto tempStack
    while (!stack.isEmpty()) {
      tempStack.push(stack.pop());
    }
  
    // Pop the elements from tempStack and push them back onto stack
    while (!tempStack.isEmpty()) {
      stack.push(tempStack.pop());
    }
  }
  
   const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  console.log('Before deletion:');
  stack.print();
  deleteMiddle(stack);
  console.log('After deletion:');
  stack.print();
  