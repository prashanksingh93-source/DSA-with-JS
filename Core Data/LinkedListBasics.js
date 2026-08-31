class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let node1=new node(10);
let node2=new node(20);
let node3=new node(30);
let node4=new node(40);

node1.next=node2;
node2.next=node3;
node3.next=node4;

let head=node1;
let connect=head;

while(connect!=null){
  console.log(connect.data);
  connect=connect.next;
}