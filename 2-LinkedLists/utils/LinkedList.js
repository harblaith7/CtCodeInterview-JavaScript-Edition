class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null; 
        this.length = 0
    }

    push(val){
        const newNode = new Node(val)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this
    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--

        return current

    }

    shift() {
        if(!this.head) return undefined;

        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
        }

        this.length--;
        return this

    }

    get(idx) {
        if(idx >= this.length || idx < 0) return null
        let counter = 0;
        let current = this.head
        while(counter !== idx){
            current = current.next;
            counter++
        }
        console.log(current)
        return current
    }

    set(index, value){
        const node = this.get(index)
        if(node){
            node.val = value;
            return true
        }
        return false
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(value)
        if(index === 0) return this.unshift(value)

        let prevNode = this.get(index - 1)
        const newNode = new Node(value)
        newNode.next = prevNode.next;
        prevNode.next = newNode;

        return true
    }

    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === this.length - 1) return this.pop()
        if(index === 0) return this.shift() 

        let prevNode = this.get(index - 1);
        let removed = previousNode.next;
        prevNode.next = removed.next;
        this.length--;

        return removed
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++){
            next = node.next;
        }
    }
}


let list = new LinkedList()
list.push(5)
list.push(10)
list.push(3)
list.insert(3, 7)
console.log(list)
