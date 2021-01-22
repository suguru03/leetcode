pub struct Solution;

impl Solution {
    pub fn close_strings(word1: String, word2: String) -> bool {
        let mut counts1 = Solution::count(word1);
        let mut counts2 = Solution::count(word2);
        if counts1
            .iter()
            .enumerate()
            .any(|(i, c1)| (*c1 == 0) != (counts2[i] == 0))
        {
            return false;
        }
        counts1.sort();
        counts2.sort();
        counts1 == counts2
    }

    fn count(word: String) -> [i32; 26] {
        let mut counts = [0; 26];
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
