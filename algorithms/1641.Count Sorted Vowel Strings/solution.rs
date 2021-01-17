pub struct Solution;

const SIZE: usize = 5;

impl Solution {
    pub fn count_vowel_strings(n: i32) -> i32 {
        let mut dp = [1; SIZE];
        for _ in 1..n {
            for i in 1..SIZE {
                dp[i] += dp[i - 1];
            }
        }
        dp.iter().sum()
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::count_vowel_strings(1), 5);
}

#[test]
fn test2() {
    assert_eq!(Solution::count_vowel_strings(2), 15);
}

#[test]
fn test3() {
    assert_eq!(Solution::count_vowel_strings(33), 66045);
}
