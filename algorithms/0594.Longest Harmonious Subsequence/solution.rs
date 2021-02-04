pub struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn find_lhs(nums: Vec<i32>) -> i32 {
        let mut count_map: HashMap<i32, i32> = HashMap::new();
        for n in nums {
            *count_map.entry(n).or_default() += 1;
        }
        count_map.iter().fold(0, |acc, (num, c1)| {
            count_map.get(&(num + 1)).map_or(acc, |c2| acc.max(c1 + c2))
        })
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::find_lhs(vec![1, 3, 2, 2, 5, 2, 3, 7]), 5);
}

#[test]
fn test2() {
    assert_eq!(Solution::find_lhs(vec![1, 2, 3, 4]), 2);
}

#[test]
fn test3() {
    assert_eq!(Solution::find_lhs(vec![1, 1, 1, 1]), 0);
}
