pub struct Solution;

use std::cmp::Ordering;

impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        let m = matrix.len();
        let n = matrix.first().unwrap().len();
        let (mut y, mut x) = (0, n - 1);
        while y < m {
            match matrix[y][x].cmp(&target) {
                Ordering::Equal => return true,
                Ordering::Less => y += 1,
                Ordering::Greater if x == 0 => return false,
                Ordering::Greater => x -= 1,
            }
        }
        false
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::search_matrix(
            vec![
                vec![1, 4, 7, 11, 15],
                vec![2, 5, 8, 12, 19],
                vec![3, 6, 9, 16, 22],
                vec![10, 13, 14, 17, 24],
                vec![18, 21, 23, 26, 30]
            ],
            5
        ),
        true
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::search_matrix(
            vec![
                vec![1, 4, 7, 11, 15],
                vec![2, 5, 8, 12, 19],
                vec![3, 6, 9, 16, 22],
                vec![10, 13, 14, 17, 24],
                vec![18, 21, 23, 26, 30]
            ],
            20
        ),
        false
    );
}
