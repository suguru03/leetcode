pub struct Solution;

use std::cmp::min;

impl Solution {
    pub fn shortest_to_char(s: String, c: char) -> Vec<i32> {
        let c = &(c as u8);
        let mut result = vec![std::i32::MAX; s.len()];
        let mut prev = None;
        for (i, c1) in s.as_bytes().iter().enumerate() {
            if c1 == c {
                prev = Some(i);
            }
            if let Some(prev) = prev {
                result[i] = (i - prev) as i32;
            }
        }
        prev = None;
        for (i, c1) in s.as_bytes().iter().enumerate().rev() {
            if c1 == c {
                prev = Some(i);
            }
            if let Some(prev) = prev {
                result[i] = min(result[i], (prev - i) as i32);
            }
        }
        result
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::shortest_to_char(String::from("loveleetcode"), 'e'),
        vec![3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::shortest_to_char(String::from("aaab"), 'b'),
        vec![3, 2, 1, 0]
    );
}
