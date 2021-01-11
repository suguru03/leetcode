use std::cmp::min;
use std::collections::{HashMap, HashSet};
use std::iter::FromIterator;

pub struct Solution;

/// TLE
impl Solution {
    pub fn create_sorted_array(instructions: Vec<i32>) -> i32 {
        let hash_set: HashSet<i32> = HashSet::from_iter(instructions.clone().into_iter());
        let mut vec = hash_set.iter().collect::<Vec<_>>();
        vec.sort();
        let memos = vec
            .into_iter()
            .map(|num| Memo {
                num: *num,
                count: 0,
            })
            .collect::<Vec<_>>();

        let mut hash_map: HashMap<&i32, usize> = HashMap::new();
        for (index, memo) in memos.iter().enumerate() {
            hash_map.insert(&memo.num, index);
        }

        let mut memos = memos.to_vec();

        let size = memos.len();
        let mut prev = 0;
        let mut prev_index = 0;
        let mut left = Memo { num: 0, count: 0 };
        let mut right = Memo { num: 0, count: 0 };
        let mut total = 0;
        let mut result = 0;
        let modulo = 1000000007;

        let count_left = |memos: &Vec<Memo>, from: usize, prev: i32, left: &Memo| {
            let mut i = from;
            let mut cost = 0;
            while i > 0 {
                let memo = memos.get(i - 1).unwrap();
                cost += memo.count;
                if memo.num == prev {
                    cost += left.count;
                    break;
                }
                i -= 1;
            }
            cost
        };
        let count_right = |memos: &Vec<Memo>, from: usize, prev: i32, right: &Memo| {
            let mut i = from + 1;
            let mut cost = 0;
            while i < size {
                let memo = memos.get(i).unwrap();
                cost += memo.count;
                if memo.num == prev {
                    cost += right.count;
                    break;
                }
                i += 1;
            }
            cost
        };

        for num in instructions {
            let index = *hash_map.get(&num).unwrap();
            let next = memos.get(index).unwrap();
            let cl;
            let cr;
            if num == prev {
                cl = left.count;
                cr = right.count;
            } else if num > prev {
                let diff = index - prev_index;
                if diff < size / 2 {
                    cl = count_left(&memos, index, prev, &left);
                    cr = total - cl - next.count;
                } else {
                    cr = count_right(&memos, index, prev, &right);
                    cl = total - cr - next.count;
                }
            } else {
                let diff = prev_index - index;
                if diff < size / 2 {
                    cl = count_left(&memos, index, prev, &left);
                    cr = total - cl - next.count;
                } else {
                    cr = count_right(&memos, index, prev, &right);
                    cl = total - cr - next.count;
                }
            }
            let cost = min(cl, cr);
            result = (result + cost) % modulo;
            prev = num;
            prev_index = index;
            left = Memo { num, count: cl };
            right = Memo { num, count: cr };
            total += 1;
            // should not write mutable get before immutable get :writing:
            let next = memos.get_mut(index).unwrap();
            next.incr();
        }
        result
    }
}

#[derive(Debug, Clone)]
struct Memo {
    num: i32,
    count: i32,
}

impl Memo {
    pub fn incr(&mut self) {
        self.count = self.count + 1;
    }
}

#[test]
fn test1() {
    assert_eq!(Solution::create_sorted_array(vec![1, 5, 6, 2]), 1);
}

#[test]
fn test2() {
    assert_eq!(
        Solution::create_sorted_array(vec![1, 3, 3, 3, 2, 4, 2, 1, 2]),
        4
    );
}
