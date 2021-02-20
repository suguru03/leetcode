pub struct Solution;

impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let chars: Vec<char> = s.chars().into_iter().collect();
        chars.iter().enumerate().fold(0, |sum, (i, char)| {
            let prev = Solution::char_to_num(Some(&char));
            let next = Solution::char_to_num(chars.get(i + 1));
            sum + if next > prev { -prev } else { prev }
        })
    }

    fn char_to_num(char: Option<&char>) -> i32 {
        match char {
            Some('I') => 1,
            Some('V') => 5,
            Some('X') => 10,
            Some('L') => 50,
            Some('C') => 100,
            Some('D') => 500,
            Some('M') => 1000,
            _ => 0,
        }
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::roman_to_int(String::from("MCMXCIV")), 1994);
}

#[test]
fn test2() {
    assert_eq!(Solution::roman_to_int(String::from("DCXXI")), 621);
}
