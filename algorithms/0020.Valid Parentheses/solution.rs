pub struct Solution;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack = Vec::new();
        for char in s.chars() {
            let target = match char {
                '(' => Some(')'),
                '[' => Some(']'),
                '{' => Some('}'),
                _ => None,
            };
            if let Some(target) = target {
                stack.push(target);
                continue;
            }
            if Some(char) != stack.pop() {
                return false;
            }
        }
        stack.is_empty()
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::is_valid("()".to_string()), true);
}

#[test]
fn test2() {
    assert_eq!(Solution::is_valid("()[]{}".to_string()), true);
}

#[test]
fn test3() {
    assert_eq!(Solution::is_valid("([)]".to_string()), false);
}

#[test]
fn test4() {
    assert_eq!(Solution::is_valid("{[]}".to_string()), true);
}

#[test]
fn test5() {
    assert_eq!(Solution::is_valid("{".to_string()), false);
}
