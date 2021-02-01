pub struct Solution;

impl Solution {
    pub fn hammingWeight(mut n: u32) -> i32 {
        let mut count = 0;
        while n > 0 {
            count += 1;
            n &= n - 1;
        }
        count as i32
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::hammingWeight(0b1011), 3);
}

#[test]
fn test2() {
    assert_eq!(Solution::hammingWeight(0b1000_0000), 1);
}

#[test]
fn test3() {
    assert_eq!(
        Solution::hammingWeight(0b1111_1111_1111_1111_1111_1111_1111_1101),
        31
    );
}
