/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @param {number} skipA
 * @param {number} skipB
 * @return {string}
 */
var getIntersectionNode = function(headA, headB, skipA, skipB) {
    if (!headA || !headA.next) return headA;
    if (!headB || !headB.next) return headB;

    let PointA = headA;
    let PointB = headB;

    while (skipA>0) {
        if (!PointA) { // Added check: If PointA is already null, stop skipping.
            break;
        }
        PointA = PointA.next;
        skipA--;
    }
    while (skipB>0) {
         if (!PointB) { // Added check: If PointB is already null, stop skipping.
            break;
        }
        PointB = PointB.next;
        skipB--;
    }
    if(PointA && PointB && PointA === PointB){
        return `Intersected at '${PointA.val}'`
    }
    else{
        return `No intersection`;
    }



};