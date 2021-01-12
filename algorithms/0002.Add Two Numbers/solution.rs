use utils::{to_list, ListNode};

pub struct Solution;

impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut l1 = &l1;
        let mut l2 = &l2;
        let mut head = ListNode::new(0);
        let mut node = &mut head;
        let mut prev = 0;
        while l1.is_some() || l2.is_some() || prev != 0 {
            let mut next = ListNode::new(prev);
            if let Some(n1) = l1 {
                l1 = &n1.next;
                next.val += n1.val;
            }
            if let Some(n2) = l2 {
                l2 = &n2.next;
                next.val += n2.val;
            }
            prev = next.val / 10;
            next.val = next.val % 10;
            node.next = Some(Box::new(next));
            node = node.next.as_mut().unwrap();
        }
        head.next
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::add_two_numbers(to_list(vec![2, 4, 3]), to_list(vec![5, 6, 4])),
        to_list(vec![7, 0, 8])
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::add_two_numbers(to_list(vec![0]), to_list(vec![0])),
        to_list(vec![0])
    );
}

#[test]
fn test3() {
    assert_eq!(
        Solution::add_two_numbers(
            to_list(vec![9, 9, 9, 9, 9, 9, 9]),
            to_list(vec![9, 9, 9, 9])
        ),
        to_list(vec![8, 9, 9, 9, 0, 0, 0, 1])
    );
}
