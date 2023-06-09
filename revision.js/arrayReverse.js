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
    isEmpty(){
        return this.items.length ===0

    }
    peek(){
        return this.items[this.items.length-1]
    }
    getSize(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}




function reverseArray(array) {
    const stack = new Stack();
    for (let i = 0; i < array.length; i++) {
      stack.push(array[i]);
    }
    let reversedArray = [];
    while (!stack.isEmpty()) {
      reversedArray.push(stack.pop());
    }
    return reversedArray;
  }
  
  const array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const reversedArray = reverseArray(array);
  console.log(reversedArray);
  