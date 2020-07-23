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
            if (this.length === 0) {
                this.head = null;
            }
            return currentNode;
        }
    }

    shift() {
        if (!this.head) {
            return undefined;
        } else {
            let currentHead = this.head;
            this.head = this.head.next;
            this.length--;
            return currentHead;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
        } else {
            let currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
        this.length++;
        return this;
    }

    getIndex(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        } else {
            let counter = 0;
            let currentNode = this.head;
            while(counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode;
        }
    }

    setValue(index, value) {
        let foundNode = this.getIndex(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insertAt(index, val) {
        if (index < 0 || index > this.length) {
            return null;
        } else {
            let node = new Node(val);

            if (this.length === 0) {
                this.head = node;
            } else {
                let curr = this.head;
                let prev;
                let counter = 0;
                while(counter < index) {
                    counter++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.length++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.length) {
            return -1;
        } else {
            let counter = 0;
            let curr = this.head;
            let prev = this.head;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while(counter < index) {
                    counter++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.length--;
            return curr;
        }
    }

    reverse() {
        let current = this.head;
        let next = null;
        let prev = null;
        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

    reverserecursive(head) {
        if (!head || !head.next) {
            return head;
        }
        let node = this.reverserecursive(head.next);
        node.next = head;
        head.next = null;
        return head;
    }
}
