class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            
        }
        this.length++
        return this
    }

    pop(){
        let poppedItem = this.tail;
        if(this.length < 1) return undefined;
        else if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedItem.prev;
            this.tail.next = null;
            poppedItem.prev = null
        }
        this.length--;
        return poppedItem
    }

    shift(){
        let shiftedNode = this.head;
        if(this.length < 1) return undefined;
        else if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null
        }
        this.length--;
        return shiftedNode
    }

    unshift(val) {
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this
    }

    get(index){
        if(index > this.length - 1 || index < 0) return undefined;
        let counter = 0;
        let current;
        if(this.length/2 >= index){
            current = this.head
            while(counter !== index){
                current = current.next;
                counter++
            }
        } else {
            current = this.tail;
            counter = this.length - 1
            while(counter !== index){
                current = current.prev;
                counter--
            }
        }
        return current
    }

    set(index, val){
        let node = this.get(index)
        node.val = val
    }

    insert(index, val){
        const newNode = new Node(val)
        let node = this.get(index)
        let prevNode = node.prev;
        newNode.next = node
        prevNode.next = newNode
    }

    remove(index){
        let node = this.get(index)
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode
    }

}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(4);
doublyLinkedList.push(14);
doublyLinkedList.push(53);
doublyLinkedList.push(15);
doublyLinkedList.insert(2, 50);

console.log(doublyLinkedList.get(0))
doublyLinkedList.set(0,3232)
doublyLinkedList.remove(2)




console.log(doublyLinkedList)