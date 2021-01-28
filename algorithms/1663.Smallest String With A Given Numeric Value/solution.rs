use std::cmp::min;

pub struct Solution;

const MAX: i32 = 26 - 1;

impl Solution {
    pub fn get_smallest_string(n: i32, mut k: i32) -> String {
        let mut chars = vec![0; n as usize];
        for i in (0..n).rev() {
            let code = min(k - i - 1, MAX);
            chars[i as usize] = b'a' + code as u8;
            k -= code + 1;
        }
        String::from_utf8(chars).unwrap()
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::get_smallest_string(3, 27), String::from("aay"));
}

#[test]
fn test2() {
    assert_eq!(Solution::get_smallest_string(5, 73), String::from("aaszz"));
}
