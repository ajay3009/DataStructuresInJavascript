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
        head.next.next = head;
        head.next = null;
        return node;
    }

    /* Given a ‘key’, delete the first occurrence of this key in linked list */
    deleteNode(key) {
        if (!key) {
            return false;
        } else {
            if (this.head.val === key) {
               this.head = this.head.next; 
               this.length--;
               return true;
            } else {
                let temp = this.head;
                let prev = null;
                while(temp.val != key) {
                    prev = temp;
                    temp = temp.next;
                }
                if (temp.val === key) {
                    prev.next = temp.next;
                    this.length--;
                    return true;
                }
                return false;
            }
        }
    }

    /* Given a singly linked list and a position, delete a linked list node at the given position. */
    deleteNodeAtPosition(pos) {
        if (pos < 0 || pos > this.length-1) {
            return -1;
        } else {
            if (pos === 0) {
                this.head = this.head.next;
                this.length--;
                return pos;
            } else {
                let temp = this.head;
                let prev = null;
                let counter = 0;
                while(counter !== pos-1) {
                    prev = temp;
                    temp = temp.next;
                    counter++;
                }
                if (!temp) {
                    return -1;
                }

                prev.next = temp.next;
                this.length--;
                return pos;
            }
        }
    }

    /** Find Length of a Linked List (Iterative and Recursive) */

    getCountIterative() {
        let counter = 0;
        while(this.head) {
            counter++;
            this.head = this.head.next;
        }
        return counter;
    }

    getCountRecursive(head) {
        
        if(!head) return 0;
        return 1 + this.getCountRecursive(head.next);
    }
    
}
