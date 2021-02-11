pub struct Solution;

const CHAR_SIZE: usize = 26;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        Solution::count(s) == Solution::count(t)
    }

    fn count(s: String) -> [i32; CHAR_SIZE] {
        let mut counts = [0; CHAR_SIZE];
        for c in s.bytes() {
            counts[(c - b'a') as usize] += 1;
        }
        counts
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::is_anagram(String::from("anagram"), String::from("nagaram"),),
        true
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::is_anagram(String::from("rat"), String::from("car"),),
        false
    );
}
