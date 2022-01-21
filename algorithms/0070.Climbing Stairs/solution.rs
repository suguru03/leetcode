pub struct Solution;

impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        let mut pair = (0, 1);
        for _ in 0..n {
            let (prev, cur) = pair;
            pair = (cur, prev + cur);
        }
        pair.1
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::climb_stairs(2), 2);
}

#[test]
fn test2() {
    assert_eq!(Solution::climb_stairs(3), 3);
}

#[test]
fn test3() {
    assert_eq!(Solution::climb_stairs(45), 1836311903);
}
