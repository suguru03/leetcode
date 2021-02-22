pub struct Solution;

impl Solution {
    pub fn broken_calc(x: i32, mut y: i32) -> i32 {
        let mut count = 0;
        while y > x {
            count += 1;
            if y % 2 == 1 {
                y += 1;
            } else {
                y /= 2;
            }
        }
        count + x - y
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::broken_calc(2, 3), 2);
}

#[test]
fn test2() {
    assert_eq!(Solution::broken_calc(5, 8), 2);
}

#[test]
fn test3() {
    assert_eq!(Solution::broken_calc(3, 10), 3);
}

#[test]
fn test4() {
    assert_eq!(Solution::broken_calc(1024, 1), 1023);
}
