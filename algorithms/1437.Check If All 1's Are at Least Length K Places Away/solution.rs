pub struct Solution;

impl Solution {
    pub fn k_length_apart(nums: Vec<i32>, k: i32) -> bool {
        let mut prev = -k - 1;
        for (i, n) in nums.iter().enumerate() {
            if *n == 0 {
                continue;
            }
            let i = i as i32;
            if i - prev <= k {
                return false;
            }
            prev = i;
        }
        true
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::k_length_apart(vec![1, 0, 0, 0, 1, 0, 0, 1], 2),
        true
    );
}

#[test]
fn test2() {
    assert_eq!(Solution::k_length_apart(vec![1, 0, 0, 1, 0, 1], 2), false);
}

#[test]
fn test3() {
    assert_eq!(Solution::k_length_apart(vec![1, 1, 1, 1, 1], 0), true);
}

#[test]
fn test4() {
    assert_eq!(Solution::k_length_apart(vec![0, 1, 0, 1], 1), true);
}
