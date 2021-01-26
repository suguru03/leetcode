use std::cmp::max;
use std::collections::LinkedList;

pub struct Solution;

type Delta = (i32, i32);
type Coordinate = (usize, usize);
const DELTA: [Delta; 4] = [(-1, 0), (1, 0), (0, -1), (0, 1)];

impl Solution {
    pub fn minimum_effort_path(heights: Vec<Vec<i32>>) -> i32 {
        let get = |mat: &Vec<Vec<i32>>, (x, y): Coordinate| mat[y][x];
        let set = |mat: &mut Vec<Vec<i32>>, (x, y): Coordinate, cost: i32| mat[y][x] = cost;
        let calc = |val: usize, delta: &i32, limit: usize| match val as i32 - *delta {
            val if val >= 0 && val <= limit as i32 => Some(val as usize),
            _ => None,
        };

        let start = (0, 0);
        let dest = (heights.first().unwrap().len() - 1, heights.len() - 1);
        let mut dp = &mut vec![vec![i32::max_value(); dest.0 + 1]; dest.1 + 1];
        let mut queue = LinkedList::new();
        set(dp, start, 0);
        queue.push_back(start);
        while let Some(c1) = queue.pop_front() {
            for (dx, dy) in DELTA.iter() {
                let x1 = calc(c1.0, dx, dest.0);
                let y1 = calc(c1.1, dy, dest.1);
                if x1 == None || y1 == None {
                    continue;
                }
                let c2 = (x1.unwrap(), y1.unwrap());
                let cost = max(
                    get(&dp, c1),
                    i32::abs(get(&heights, c1) - get(&heights, c2)),
                );
                let prev = get(&dp, c2);
                if cost >= prev {
                    continue;
                }
                set(&mut dp, c2, cost);
                queue.push_back(c2);
            }
        }
        get(dp, dest)
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::minimum_effort_path(vec![vec![1, 2, 2], vec![3, 8, 2], vec![5, 3, 5]]),
        2
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::minimum_effort_path(vec![vec![1, 2, 3], vec![3, 8, 4], vec![5, 3, 5]]),
        1
    );
}

#[test]
fn test3() {
    assert_eq!(
        Solution::minimum_effort_path(vec![
            vec![1, 2, 1, 1, 1],
            vec![1, 2, 1, 2, 1],
            vec![1, 2, 1, 2, 1],
            vec![1, 2, 1, 2, 1],
            vec![1, 1, 1, 2, 1]
        ]),
        0
    );
}
