pub struct Solution;

use std::collections::HashSet;

impl Solution {
    pub fn distribute_candies(candy_type: Vec<i32>) -> i32 {
        candy_type
            .iter()
            .collect::<HashSet<_>>()
            .len()
            .min(candy_type.len() / 2) as i32
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::distribute_candies(vec![1, 1, 2, 2, 3, 3]), 3);
}

#[test]
fn test2() {
    assert_eq!(Solution::distribute_candies(vec![1, 1, 2, 3]), 2);
}

#[test]
fn test3() {
    assert_eq!(Solution::distribute_candies(vec![6, 6, 6, 6]), 1);
}

#[test]
fn test4() {
    assert_eq!(Solution::distribute_candies(vec![1000, 1, 1, 1]), 2);
}

#[test]
fn test5() {
    assert_eq!(
        Solution::distribute_candies(vec![0, 0, 14, 0, 10, 0, 0, 0]),
        3
    );
}
