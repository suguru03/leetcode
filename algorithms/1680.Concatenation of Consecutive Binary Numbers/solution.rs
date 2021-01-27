pub struct Solution;

const MODULO: i64 = 1_000_000_007;

impl Solution {
    pub fn concatenated_binary(n: i32) -> i32 {
        (1..=n as i64).fold(0, |acc, n| {
            (((acc) << (n as f64).log2().floor() as i64 + 1) + n) % MODULO
        }) as i32
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::concatenated_binary(1), 1);
}

#[test]
fn test2() {
    assert_eq!(Solution::concatenated_binary(3), 27);
}

#[test]
fn test3() {
    assert_eq!(Solution::concatenated_binary(12), 505379714);
}

#[test]
fn test4() {
    assert_eq!(Solution::concatenated_binary(100000), 757631812);
}
