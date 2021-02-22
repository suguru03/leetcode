pub struct Solution;

impl Solution {
    pub fn find_longest_word(s: String, mut d: Vec<String>) -> String {
        d.sort_unstable_by(|a, b| a.cmp(&b));
        d.sort_by(|a, b| b.len().cmp(&a.len()));

        let bs = s.as_bytes();
        d.into_iter()
            .find(|t| {
                let mut is = 0;
                t.as_bytes().iter().all(|bt| {
                    while is < s.len() && bs[is] != *bt {
                        is += 1;
                    }
                    is += 1;
                    is <= s.len()
                })
            })
            .unwrap_or_default()
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::find_longest_word(
            String::from("abpcplea"),
            vec!["ale", "apple", "monkey", "plea"]
                .iter()
                .map(|str| String::from(*str))
                .collect()
        ),
        "apple"
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::find_longest_word(
            String::from("abpcplea"),
            vec!["b", "a", "c"]
                .iter()
                .map(|str| String::from(*str))
                .collect()
        ),
        "a"
    );
}
#[test]
fn test3() {
    assert_eq!(
        Solution::find_longest_word(
            String::from("aewfafwafjlwajflwajflwafj"),
            vec![
                "apple",
                "ewaf",
                "awefawfwaf",
                "awef",
                "awefe",
                "ewafeffewafewf"
            ]
            .iter()
            .map(|str| String::from(*str))
            .collect()
        ),
        "ewaf"
    );
}
