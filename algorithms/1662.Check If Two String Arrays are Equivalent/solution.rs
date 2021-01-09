pub struct Solution;

impl Solution {
    pub fn array_strings_are_equal(mut word1: Vec<String>, mut word2: Vec<String>) -> bool {
        let mut i1 = 0;
        let mut i2 = 0;
        while let (Some(w1), Some(w2)) = (word1.first(), word2.first()) {
            if w1.chars().nth(i1) != w2.chars().nth(i2) {
                break;
            }
            i1 += 1;
            i2 += 1;
            if i1 == w1.len() {
                i1 = 0;
                word1.remove(0);
            }
            if i2 == w2.len() {
                i2 = 0;
                word2.remove(0);
            }
        }
        word1.is_empty() && word2.is_empty()
    }
}

fn to_string(words: Vec<&str>) -> Vec<String> {
    words.iter().map(|str| str.to_string()).collect()
}

#[test]
fn test1() {
    assert_eq!(
        Solution::array_strings_are_equal(to_string(vec!["ab", "c"]), to_string(vec!["a", "bc"]),),
        true
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::array_strings_are_equal(to_string(vec!["a", "cb"]), to_string(vec!["ab", "c"]),),
        false
    );
}

#[test]
fn test3() {
    assert_eq!(
        Solution::array_strings_are_equal(
            to_string(vec!["abc", "d", "defg"]),
            to_string(vec!["abcddefg"]),
        ),
        true
    );
}

// rustc solution.rs
