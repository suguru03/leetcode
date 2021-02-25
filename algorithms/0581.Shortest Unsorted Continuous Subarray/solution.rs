pub struct Solution;

impl Solution {
    pub fn find_unsorted_subarray(nums: Vec<i32>) -> i32 {
        let (mut l, mut r) = (0, 0);
        let (mut max, mut min) = (std::i32::MIN, std::i32::MAX);
        for i in 0..nums.len() {
            let j = nums.len() - i - 1;
            let n1 = nums[i];
            let n2 = nums[j];
            max = max.max(n1);
            min = min.min(n2);
            if n1 < max {
                r = i;
            }
            if n2 > min {
                l = j;
            }
        }
        if l == r {
            0
        } else {
            (r - l + 1) as i32
        }
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::find_unsorted_subarray(vec![2, 6, 4, 8, 10, 9, 15]),
        5
    );
}
