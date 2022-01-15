use std::cmp::Ordering;

pub struct Solution;

impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let (mut l, mut r) = (0, nums.len() as i32);
        while l < r {
            let m = l + (r - l) / 2;
            match nums[m as usize].cmp(&target) {
                Ordering::Equal => return m,
                Ordering::Less => l = m + 1,
                Ordering::Greater => r = m,
            }
        }
        l
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::search_insert(vec![1, 3, 5, 6], 5), 2);
}
