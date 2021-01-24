use std::cmp::{max, Reverse};
use std::collections::BinaryHeap;

pub struct Solution;

impl Solution {
    pub fn diagonal_sort(mat: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let m = mat.len();
        let n = mat.first().unwrap().len();
        let size = m + n - 1;
        let mut list = vec![BinaryHeap::with_capacity(max(m, n)); size];
        let coordinates = |i: usize| {
            let x = if i < m { 0 } else { i - m + 1 };
            let y = if i < m { i } else { 0 };
            (x, y)
        };
        for i in 0..size {
            let queue = &mut list[i];
            let (mut x, mut y) = coordinates(i);
            while x < n && y < m {
                queue.push(Reverse(mat[y][x]));
                x += 1;
                y += 1;
            }
        }
        let mut result = vec![vec![0; n]; m];
        for i in 0..size {
            let queue = &mut list[i];
            let (mut x, mut y) = coordinates(i);
            while x < n && y < m {
                result[y][x] = match queue.pop() {
                    Some(Reverse(v)) => v,
                    _ => 0,
                };
                x += 1;
                y += 1;
            }
        }
        result
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::diagonal_sort(vec![vec![3, 3, 1, 1], vec![2, 2, 1, 2], vec![1, 1, 1, 2]]),
        vec![vec![1, 1, 1, 1], vec![1, 2, 2, 2], vec![1, 2, 3, 3]]
    );
}
