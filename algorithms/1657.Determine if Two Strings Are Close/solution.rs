pub struct Solution;

const CHAR_SIZE: usize = 26;

impl Solution {
    pub fn close_strings(word1: String, word2: String) -> bool {
        let mut counts1 = Solution::count(word1);
        let mut counts2 = Solution::count(word2);
        if (0..counts1.len()).any(|i| (counts1[i] > 0) != (counts2[i] > 0)) {
            return false;
        }
        counts1.sort_unstable();
        counts2.sort_unstable();
        counts1 == counts2
    }

    fn count(word: String) -> [i32; CHAR_SIZE] {
        let mut counts = [0; CHAR_SIZE];
        for c in word.bytes() {
            counts[(c - b'a') as usize] += 1;
        }
        counts
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::close_strings(String::from("abc"), String::from("bca")),
        true
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::close_strings(String::from("a"), String::from("aa")),
        false
    );
}

#[test]
fn test3() {
    assert_eq!(
        Solution::close_strings(String::from("cabbba"), String::from("abbccc")),
        true
    );
}

#[test]
fn test4() {
    assert_eq!(
        Solution::close_strings(String::from("cabbba"), String::from("aabbss")),
        false
    );
}

#[test]
fn test5() {
    assert_eq!(
        Solution::close_strings(String::from("uau"), String::from("ssx")),
        false
    );
}
