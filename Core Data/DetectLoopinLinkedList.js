// Detect Loop in Linked List | Floyd’s Algorithm

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Linkedlist{
    constructor(){
        this.head=null
    }

    append(data){
        let newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return
        }
        let current=this.head;
        while(current.next){
            current=current.next
        }
        current.next=newNode;
    }

    print(){
          let current= this.head;
          let result="";
          while(current){
            result = result + current.data + '-';
       
           current= current.next;

          }
          console.log(result,'null')
    }


     detectLoop(){
         let slow=this.head;
         let fast=this.head;

         while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;

            if(slow==fast){
                return true;
            }
         }
         return false;
    }

}


let list=new Linkedlist();

list.append(1)
list.append(2)
list.append(3)
list.append(4)

list.head.next.next.next.next=list.head.next

console.log(list.detectLoop());


//list.print()
