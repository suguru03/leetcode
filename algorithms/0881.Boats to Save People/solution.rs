use std::cmp::min;

pub struct Solution;

impl Solution {
    pub fn num_rescue_boats(people: Vec<i32>, limit: i32) -> i32 {
        let mut counts = [0; 30001];
        for person in people.iter() {
            counts[*person as usize] += 1;
        }
        let limit = limit as usize;
        let mut right = 0;
        let mut left = 30000;
        let mut result = 0;
        while right < left {
            let cl = counts[left];
            if cl == 0 {
                left -= 1;
                continue;
            }
            let cr = counts[right];
            if cr == 0 {
                right += 1;
                continue;
            }
            match left + right {
                sum if sum <= limit => {
                    let count = min(cr, cl);
                    result += count;
                    counts[left] -= count;
                    counts[right] -= count;
                }
                _ => {
                    result += cl;
                    counts[left] = 0;
                }
            }
        }
        let count = counts[left];
        if count == 0 {
            return result;
        }
        if limit / left == 1 {
            return result + count;
        }
        result + (count as f32 / 2.0).ceil() as i32
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::num_rescue_boats(vec![1, 2], 3), 1);
}

#[test]
fn test2() {
    assert_eq!(Solution::num_rescue_boats(vec![3, 2, 2, 1], 3), 3);
}

#[test]
fn test3() {
    assert_eq!(Solution::num_rescue_boats(vec![3, 5, 3, 4], 5), 4);
}
