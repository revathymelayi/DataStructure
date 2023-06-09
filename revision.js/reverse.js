class Stack{
    constructor(){
        this.items =[]
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

function reverseName(name) {
    const stack = new Stack();
    for (let i = 0; i < name.length; i++) {
      stack.push(name[i]);
    }
    let reversedName = '';
    while (!stack.isEmpty()) {
      reversedName += stack.pop();
    }
    return reversedName;
  }
  
  // Example usage:
  const name = 'Revathy';
  const reversedName = reverseName(name);
  console.log(reversedName)
  