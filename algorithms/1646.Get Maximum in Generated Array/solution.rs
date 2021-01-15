pub struct Solution;

impl Solution {
    pub fn get_maximum_generated(n: i32) -> i32 {
        if n <= 1 {
            return n;
        }
        let n = n as usize + 1;
        let mut nums = Vec::with_capacity(n);
        nums.insert(0, 0);
        nums.insert(1, 1);
        for i in 2..n {
            let j = i / 2;
            if i % 2 == 0 {
                nums.insert(i, nums[j]);
            } else {
                nums.insert(i, nums[j] + nums[j + 1]);
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
