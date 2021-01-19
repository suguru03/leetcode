pub struct Solution;

impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let bytes = s.as_bytes();
        let last_index = bytes.len() - 1;
        let mut result = (0, 0, 0);
        let iter = |mut l, mut r| {
            if bytes[l] != bytes[r] {
                return (0, 0, 0);
            }
            while l > 0 && r < last_index && bytes[l - 1] == bytes[r + 1] {
                l -= 1;
                r += 1;
            }
            (r - l, l, r)
        };
        for i in 0..last_index {
            for j in 0..=1 {
                let p = iter(i, i + j);
                if p.0 > result.0 {
                    result = p;
                }
            }
        }
        s[result.1..=result.2].to_string()
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::longest_palindrome("babad".to_string()),
        "bab".to_string()
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::longest_palindrome("cbbd".to_string()),
        "bb".to_string()
    );
}
