pub struct Solution;

impl Solution {
    pub fn number_of_arithmetic_slices(a: Vec<i32>) -> i32 {
        let mut sum = 0;
        let mut left = 0;
        for right in 1..a.len() {
            if a[right] - a[left] != (a[right] - a[right - 1]) * (right - left) as i32 {
                left = right - 1;
                continue;
            }
            sum += right - left - 1;
        }
        sum as i32
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::number_of_arithmetic_slices(vec![1, 2, 3, 4, 6, 8, 10]),
        6
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::number_of_arithmetic_slices(vec![1, 1, 2, 5, 7]),
        0
    );
}
