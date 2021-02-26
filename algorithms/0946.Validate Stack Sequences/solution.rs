pub struct Solution;

use std::collections::VecDeque;

impl Solution {
    pub fn validate_stack_sequences(pushed: Vec<i32>, popped: Vec<i32>) -> bool {
        let mut stack = VecDeque::with_capacity(pushed.len());
        let mut i = 0;
        for n in pushed {
            stack.push_back(n);
            while let Some(&head) = stack.back() {
                if head != popped[i] {
                    break;
                }
                stack.pop_back();
                i += 1;
            }
        }
        stack.is_empty()
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::validate_stack_sequences(vec![1, 2, 3, 4, 5], vec![4, 5, 3, 2, 1]),
        true
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::validate_stack_sequences(vec![1, 2, 3, 4, 5], vec![4, 5, 3, 1, 2]),
        false
    );
}
