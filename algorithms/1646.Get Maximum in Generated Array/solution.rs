pub struct Solution;

impl Solution {
    pub fn get_maximum_generated(n: i32) -> i32 {
        if n <= 1 {
            return n;
        }
        let n = n as usize + 1;
        let mut nums = vec![0; n];
        nums[1] = 1;
        for i in 2..n {
            let j = i / 2;
            nums[i] = if i % 2 == 0 {
                nums[j]
            } else {
                nums[j] + nums[j + 1]
            }
        }
        *nums.iter().max().unwrap()
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::get_maximum_generated(7), 3);
}

#[test]
fn test2() {
    assert_eq!(Solution::get_maximum_generated(2), 1);
}

#[test]
fn test3() {
    assert_eq!(Solution::get_maximum_generated(3), 2);
}
