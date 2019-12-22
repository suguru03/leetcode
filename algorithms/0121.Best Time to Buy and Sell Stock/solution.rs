use std::cmp;

struct Solution;

impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut min = std::i32::MAX;
        let mut max = 0;
        for price in prices {
            max = cmp::max(max, price - min);
            min = cmp::min(min, price);
        }
        return max;
    }

    // pub fn max_profit(prices: Vec<i32>) -> i32 {
    //     let mut min = std::i32::MAX;
    //     fn max || (i: i32) -> i32 {
    //         if i < 0 {
    //             return 0;
    //         }
    //         let price = prices[i];
    //         let profit = cmp::max(max(i - 1), price - min);
    //         min = cmp::min(min, price);
    //         return profit;
    //     }
    //     return max(prices.len - 1)
    // }
}

fn main() {
    let val = Solution::max_profit(vec![7, 1, 5, 3, 6, 4]);
    println!("{}", val);
}

#[test]
fn max_profit_test() {
    assert_eq!(Solution::max_profit(vec![7, 1, 5, 3, 6, 4]), 5);
}

// rustc solution.rs
