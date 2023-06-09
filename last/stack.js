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
       return  this.items.length ===0
    }
    getSize(){
       return this.items.length
    }
    display(){
        console.log(this.items.toString())
    }
}

function reverseName(name){
    const stack = new Stack()
    for(let i =0 ;i<name.length;i++){
        stack.push(name[i])
    }
    let reversedName = ''
    while(!stack.isEmpty()){
        reversedName += stack.pop()
    } 
    return reversedName

}

const name ="Revathy"
const reversedName=reverseName(name)
console.log(reversedName)


function reverseArr(arr){
    const stack = new Stack()
    for(let i =0;i<arr.length;i++){
        stack.push(arr[i])
    }
    let reversedArr = []
    while(!stack.isEmpty()){
        reversedArr.push(stack.pop())
    }
    return reversedArr
}

const arr =[9,8,7,6,5,4]
const revarr=reverseArr(arr)
console.log(revarr)

function deleteMidd(stack){
    const tempstack = new Stack()
    const middle = Math.floor(stack.getSize()/2)
    for(let i =0;i<middle;i++){
        tempstack.push(stack.pop())
    }
    if(stack.getSize() % 2 !==0){
        stack.pop();
    }
    while(!stack.isEmpty()){
        tempstack.push(stack.pop())
    }

    while(!tempstack.isEmpty()){
        stack.push(tempstack.pop())
    }

}
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.display()
deleteMidd(stack)
stack.display()