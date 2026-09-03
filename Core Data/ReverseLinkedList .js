class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Linkedlist{
    constructor(){
        this.head=null;
    }
    append(data){
       let newNode=new Node(data);
       if(!this.head){
        this.head=newNode;
        return;
       }
       let current=this.head;
       while(current.next){
        current=current.next;
       }
       current.next=newNode;
    }

    print(){
        let current=this.head;
        let result="";
        while(current){
            result += current.data + '_';
            current=current.next;
        }
        console.log(result+'null')
    }

    reverse(){
        let next=null;
        let pev=null;
        let current=this.head;
        while(current){
             next=current.next;
             current.next=pev;
             pev=current;
             current=next
        }
        this.head=pev
    }
}


let list= new Linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.reverse()

list.print()