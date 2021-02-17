pub struct Solution;

impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = height.len() - 1;
        let mut result = 0;
        while left < right {
            let hl = height[left];
            let hr = height[right];
            result = result.max(hl.min(hr) * (right - left) as i32);
            if hl < hr {
                left += 1;
            } else {
                right -= 1;
            }
        }
        result
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
}
