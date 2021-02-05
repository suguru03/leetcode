pub struct Solution;

impl Solution {
    pub fn simplify_path(path: String) -> String {
        let mut stack = Vec::new();
        for str in path.split('/') {
            match str {
                "." | "" => {}
                ".." => {
                    stack.pop();
                }
                str => {
                    stack.push(str);
                }
            }
        }
        format!("/{}", stack.join("/"))
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::simplify_path(String::from("/home/")),
        String::from("/home")
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::simplify_path(String::from("/../")),
        String::from("/")
    );
}

#[test]
fn test3() {
    assert_eq!(
        Solution::simplify_path(String::from("/home//foo/")),
        String::from("/home/foo")
    );
}

#[test]
fn test4() {
    assert_eq!(
        Solution::simplify_path(String::from("/a/./b/../../c/")),
        String::from("/c")
    );
}
