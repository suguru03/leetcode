pub struct Solution;

impl Solution {
    pub fn min_remove_to_make_valid(s: String) -> String {
        let mut stack = vec![];
        let mut indices = vec![false; s.len()];
        for (i, c) in s.chars().enumerate() {
            match c {
                '(' => stack.push(i),
                ')' => {
                    if let Some(j) = stack.pop() {
                        indices[i] = true;
                        indices[j] = true;
                    }
                }
                _ => indices[i] = true,
            }
        }
        s.chars()
            .enumerate()
            .filter_map(|(i, v)| if indices[i] { Some(v) } else { None })
            .collect()
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::min_remove_to_make_valid(String::from("lee(t(c)o)de)")),
        String::from("lee(t(c)o)de")
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::min_remove_to_make_valid(String::from("a)b(c)d")),
        String::from("ab(c)d")
    );
}

#[test]
fn test3() {
    assert_eq!(
        Solution::min_remove_to_make_valid(String::from("(a(b(c)d)")),
        String::from("a(b(c)d)")
    );
}
