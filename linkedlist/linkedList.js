//node   |value|next| --> |value|next|
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the beginning (head)
  insertAtHead(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  // Insert a node at the end (tail)
  insertAtTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert a node at a specific position (0-indexed)
  insertAtPosition(value, position) {
    const newNode = new Node(value);
    if (position === 0) {
      this.insertAtHead(value);
      return;
    }

    let current = this.head;
    let prev = null;
    let index = 0;

    while (current && index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    if (index === position) {
      newNode.next = current;
      prev.next = newNode;
    } else {
      console.log("Position out of bounds");
    }
  }

  // Delete a node by its value
  deleteByValue(value) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    // If the head is the node to be deleted
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (!current) {
      console.log("Value not found in the list");
      return;
    }

    // Remove the node
    prev.next = current.next;
  }

  // Delete a node by position (0-indexed)
  deleteAtPosition(position) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    let index = 0;

    while (current && index < position) {
      prev = current;
      current = current.next;
      index++;
    }

    if (!current) {
      console.log("Position out of bounds");
      return;
    }

    prev.next = current.next;
  }

  // Find a node by its value
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Print all values in the linked list
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Usage Example:
const list = new LinkedList();
list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtPosition(25, 2);
list.print();

list.deleteByValue(25);
list.print();

list.deleteAtPosition(1);
list.print();

const node = list.find(30);
console.log(node ? `Found: ${node.value}` : "Not Found");
