/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let prev=null;
    let current=head;
    let count=right-left+1;
    for(let i=1;i<left;i++){
        prev=current;
        current=current.next;
    }
    let connection = prev;  
    let tail = current; 

    while(count!=0){
        let newnode=current.next;
        current.next=prev;
        prev=current;
        current=newnode;
        count--;
    }
    if(connection!==null){
        connection.next = prev;
        tail.next = current;
        return head;
    }
    else{
        tail.next=current;
        return prev;
    }
    


    

};