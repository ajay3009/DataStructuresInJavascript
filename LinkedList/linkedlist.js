class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        } else {
            let prevNode = this.head;
            let currentNode = this.head;
            while(currentNode.next != null) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = null;
            this.length--;
            return currentNode;
        }
    }
}