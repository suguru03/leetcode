use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<&i32, i32> = HashMap::new();
        for (idx, n) in nums.iter().enumerate() {
            let diff = target - n;
            if let Some(&i) = map.get(&diff) {
                return vec![i, idx as i32];
            }
            map.insert(n, idx as i32);
        }
        vec![]
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::two_sum(vec![2, 7, 11, 15], 9), vec![0, 1]);
}

#[test]
fn test2() {
    assert_eq!(Solution::two_sum(vec![3, 2, 4], 6), vec![1, 2]);
}

// rustc solution.rs
