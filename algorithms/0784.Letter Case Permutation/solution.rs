pub struct Solution;

impl Solution {
    pub fn letter_case_permutation(s: String) -> Vec<String> {
        if s.len() == 0 {
            return vec![String::from("")];
        }
        let mut chars: Vec<_> = s.chars().collect();
        let last = chars.pop().unwrap();
        Solution::letter_case_permutation(chars.iter().collect())
            .iter()
            .flat_map(|str| {
                if last.is_alphabetic() {
                    vec![
                        format!("{}{}", str, last.to_lowercase()),
                        format!("{}{}", str, last.to_uppercase()),
                    ]
                } else {
                    vec![format!("{}{}", str, tlast)]
                }
            })
            .collect()
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::letter_case_permutation(String::from("a1b2")),
        vec!["a1b2", "a1B2", "A1b2", "A1B2"]
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::letter_case_permutation(String::from("3z4")),
        vec!["3z4", "3Z4"]
    );
}
