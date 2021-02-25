pub struct Solution;

impl Solution {
    pub fn score_of_parentheses(s: String) -> i32 {
        let mut stack = vec![0; 25];
        let mut depth = 0;
        for c in s.chars().into_iter() {
            if c == '(' {
                depth += 1;
                continue;
            }
            stack[depth - 1] += match stack[depth] {
                0 => 1,
                val => val * 2,
            };
            stack[depth] = 0;
            depth -= 1;
        }
        stack[0]
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::score_of_parentheses(String::from("()")), 1);
}

#[test]
fn test2() {
    assert_eq!(Solution::score_of_parentheses(String::from("(())")), 2);
}

#[test]
fn test3() {
    assert_eq!(Solution::score_of_parentheses(String::from("()()")), 2);
}

#[test]
fn test4() {
    assert_eq!(Solution::score_of_parentheses(String::from("(()(()))")), 6);
}
