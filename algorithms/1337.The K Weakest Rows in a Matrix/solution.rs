pub struct Solution;

use std::collections::HashSet;

impl Solution {
    pub fn k_weakest_rows(mat: Vec<Vec<i32>>, k: i32) -> Vec<i32> {
        let k = k as usize;
        let m = mat.len();
        let n = mat.first().unwrap().len();
        let mut taken = HashSet::with_capacity(k);
        let mut result = Vec::with_capacity(k);
        for x in 0..=n {
            for y in 0..m {
                if taken.contains(&y) {
                    continue;
                }
                if x != n && mat[y][x] == 1 {
                    continue;
                }
                taken.insert(y);
                result.push(y as i32);
                if result.len() == k {
                    return result;
                }
            }
        }
        result
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::k_weakest_rows(
            vec![
                vec![1, 1, 0, 0, 0],
                vec![1, 1, 1, 1, 0],
                vec![1, 0, 0, 0, 0],
                vec![1, 1, 0, 0, 0],
                vec![1, 1, 1, 1, 1]
            ],
            3
        ),
        vec![2, 0, 3]
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::k_weakest_rows(
            vec![vec![1, 1], vec![1, 1], vec![1, 1], vec![1, 1], vec![1, 1]],
            3
        ),
        vec![0, 1, 2]
    );
}
