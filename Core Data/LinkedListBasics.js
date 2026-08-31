// class node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }

// let node1=new node(10);
// let node2=new node(20);
// let node3=new node(30);
// let node4=new node(40);

// node1.next=node2;
// node2.next=node3;
// node3.next=node4;

// let head=node1;
// let connect=head;

// while(connect!=null){
//   console.log(connect.data);
//   connect=connect.next;
// }





//linkdin basic
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode;
    }

    print(){
        let current = this.head;
        let result = "";

        while(current){
            result += current.data + "->";

            current = current.next;
        }

        console.log(result + "null")
    }
}

let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print();