pub struct Solution;

impl Solution {
    pub fn hammingWeight(mut n: u32) -> i32 {
        let mut count = 0;
        while n > 0 {
            count += n & 1;
            n >>= 1;
        }
        count as i32
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::hammingWeight(11), 3);
}

#[test]
fn test2() {
    assert_eq!(Solution::hammingWeight(2147483647), 31);
}

#[test]
fn test3() {
    assert_eq!(Solution::hammingWeight(2147483648), 1);
}
