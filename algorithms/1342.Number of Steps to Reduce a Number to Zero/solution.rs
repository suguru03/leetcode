pub struct Solution;

impl Solution {
    pub fn number_of_steps(num: i32) -> i32 {
        (num.count_ones() as i32) + (num.max(1) as f32).log2().floor() as i32
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::number_of_steps(14), 6);
}

#[test]
fn test2() {
    assert_eq!(Solution::number_of_steps(8), 4);
}

#[test]
fn test3() {
    assert_eq!(Solution::number_of_steps(123), 12);
}

#[test]
fn test4() {
    assert_eq!(Solution::number_of_steps(0), 0);
}
