/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev=null;
    let current=head;
    

    while(current!=null){
        let newnode=current.next;
        current.next=prev;
        prev=current;
        current=newnode;
    }
    return prev;

};