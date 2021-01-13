#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { val, next: None }
    }
}

pub fn to_list(vec: Vec<i32>) -> Option<Box<ListNode>> {
    let mut head = None;
    for &val in vec.iter().rev() {
        let mut node = ListNode::new(val);
        node.next = head;
        head = Some(Box::new(node));
    }
    head
}

#[macro_export]
macro_rules! list {
    () => (
       ListNode::new(0)
    );
    ($($x:expr),+ $(,)?) => (
        to_list(<[_]>::into_vec(Box::new([$($x),+])))
    );
}

#[test]
fn test() {
    assert_eq!(to_list(vec![1, 2, 3]), list![1, 2, 3]);
}
