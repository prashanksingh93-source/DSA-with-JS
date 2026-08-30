function createCircularQueue(size){
    let queue= new Array(size);
    let front=-1;
    let rear=-1;

    function isFull(){
        return (rear+1)%size===front;
    }

    function isEmpty(){
        return front===-1;
    }

    function enQueue(value){
        if(isFull()){
            console.log('Queue is Full');
            return;
        }
        if(isEmpty()){
           front=0;
           rear=0;
         }
         else{
            rear=(rear+1)%size;
         }
         queue[rear]=value
    }

    function deQueue(){
        if(isEmpty()){
            console.log('Queue id Empty');
            return null;
        }
        let removed =queue[front];
        if(front===rear){
           front=-1;
           rear=-1;
        }else{
            front=(front+1)%size;
        }
        return removed;
        
    }

    function peek(){
        if(isEmpty()) return null;
       return queue[front];
    }

    function print(){
        if(isEmpty()){
            console.log('queue is empty')
            return null;
         }
         let result=[];
         let i=front;
         while(true){
            result.push(queue[i]);
            if(i==rear){
             break;
            }
            i=(i+1)%size;
         }
         console.log(result)
    }

    return{enQueue,deQueue,peek,print}
}

let cd=createCircularQueue(5);

cd.enQueue(10)
cd.enQueue(20)
cd.enQueue(30)
cd.enQueue(40)
cd.enQueue(50)
cd.print()
cd.deQueue()