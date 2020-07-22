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

    add(val) {
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
}