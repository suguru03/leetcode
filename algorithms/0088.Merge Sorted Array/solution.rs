pub struct Solution;

const MIN: i32 = std::i32::MIN;

impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, mut m: i32, nums2: &mut Vec<i32>, mut n: i32) {
        let to_usize = |num: i32| num as usize;
        let get = |nums: &Vec<i32>, index: i32| match index {
            0 => MIN,
            m => nums[to_usize(m - 1)],
        };

        while m + n > 0 {
            let n1 = get(nums1, m);
            let n2 = get(nums2, n);
            let index = to_usize(m + n - 1);
            if n1 > n2 {
                nums1[index] = n1;
                m -= 1;
            } else {
                nums1[index] = n2;
                n -= 1;
            }
        }
    }
}

#[test]
fn test1() {
    let mut nums1 = vec![1, 2, 3, 0, 0, 0];
    let m = 3;
    let mut nums2 = vec![2, 5, 6];
    let n = 3;
    Solution::merge(&mut nums1, m, &mut nums2, n);
    assert_eq!(nums1, vec![1, 2, 2, 3, 5, 6]);
}

#[test]
fn test2() {
    let mut nums1 = vec![1];
    let m = 1;
    let mut nums2 = vec![];
    let n = 0;
    Solution::merge(&mut nums1, m, &mut nums2, n);
    assert_eq!(nums1, vec![1]);
}
