pub struct Solution;

impl Solution {
    pub fn find_error_nums(nums: Vec<i32>) -> Vec<i32> {
        let mut checks = vec![0_i8; nums.len()];
        let mut result = Vec::with_capacity(2);
        for &n in &nums {
            let i = (n - 1) as usize;
            checks[i] ^= 1;
            if checks[i] == 0 {
                result.push(n);
            }
        }
        for i in 0..nums.len() {
            let n = (i + 1) as i32;
            if checks[i] != 0 || result[0] == n {
                continue;
            }
            result.push(n);
            break;
        }
        result
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::find_error_nums(vec![1, 2, 2, 4]), [2, 3]);
}

#[test]
fn test2() {
    assert_eq!(Solution::find_error_nums(vec![2, 2]), [2, 1]);
}
