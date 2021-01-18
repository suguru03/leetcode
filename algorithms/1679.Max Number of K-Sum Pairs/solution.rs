use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn max_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut memo: HashMap<i32, i32> = HashMap::new();
        let mut result = 0;
        for n in nums {
            match memo.get_mut(&(k - n)) {
                Some(count) if *count > 0 => {
                    *count -= 1;
                    result += 1;
                }
                _ => {
                    memo.insert(n, memo.get(&n).unwrap_or(&0) + 1);
                }
            }
        }
        result
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::max_operations(vec![1, 2, 3, 4], 5), 2);
}

#[test]
fn test2() {
    assert_eq!(Solution::max_operations(vec![3, 1, 3, 4, 3], 6), 1);
}

#[test]
fn test3() {
    assert_eq!(
        Solution::max_operations(
            vec![2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
            3
        ),
        4
    );
}
