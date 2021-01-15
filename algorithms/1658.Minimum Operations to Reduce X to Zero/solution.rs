use std::cmp::min;
use std::collections::HashMap;
use std::i32::MAX;

pub struct Solution;

impl Solution {
    pub fn min_operations(nums: Vec<i32>, x: i32) -> i32 {
        let mut memo = HashMap::new();
        let mut sum = 0;
        let mut result = MAX;
        for (index, n) in nums.iter().enumerate() {
            let left = index as i32 + 1;
            sum += n;
            if sum == x {
                result = left;
            }
            if sum >= x {
                break;
            }
            memo.insert(sum, left);
        }
        sum = 0;
        for (index, n) in nums.iter().rev().enumerate() {
            let right = index as i32 + 1;
            sum += n;
            let rem = x - sum;
            if rem == 0 {
                result = min(result, right);
            }
            if rem <= 0 {
                break;
            }
            if !memo.contains_key(&rem) {
                continue;
            }
            let left = memo.get(&rem).unwrap();
            if index == nums.len() - (*left as usize) {
                continue;
            }
            result = min(result, right + left);
        }
        if result == MAX {
            -1
        } else {
            result
        }
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::min_operations(vec![1, 1, 4, 2, 3], 5), 2);
}

#[test]
fn test2() {
    assert_eq!(Solution::min_operations(vec![5, 6, 7, 8, 9], 4), -1);
}

#[test]
fn test3() {
    assert_eq!(Solution::min_operations(vec![3, 2, 20, 1, 1, 3], 10), 5);
}

#[test]
fn test4() {
    assert_eq!(Solution::min_operations(vec![1, 1], 3), -1);
}
