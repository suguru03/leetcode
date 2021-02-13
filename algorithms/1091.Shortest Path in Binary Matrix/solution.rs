pub struct Solution;

use std::collections::LinkedList;

impl Solution {
    pub fn shortest_path_binary_matrix(grid: Vec<Vec<i32>>) -> i32 {
        let n = grid.len();
        let mut dp = vec![vec![std::i32::MAX; n]; n];
        let mut queue = LinkedList::new();
        queue.push_front((0, 0, 1));
        while let Some((x, y, c)) = queue.pop_front() {
            if x < 0 || y < 0 {
                continue;
            }
            let (x0, y0) = (x as usize, y as usize);
            if x0 >= n || y0 >= n {
                continue;
            }
            if grid[y0][x0] == 1 || dp[y0][x0] <= c {
                continue;
            }
            dp[y0][x0] = c;
            for dx in -1..=1 {
                for dy in -1..=1 {
                    queue.push_back((x + dx, y + dy, c + 1));
                }
            }
        }
        let result = dp[n - 1][n - 1];
        if result == std::i32::MAX {
            -1
        } else {
            result
        }
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::shortest_path_binary_matrix(vec![vec![0, 1], vec![1, 0]]),
        2
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::shortest_path_binary_matrix(vec![vec![0, 0, 0], vec![1, 1, 0], vec![1, 1, 0]]),
        4
    );
}
