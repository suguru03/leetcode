package main

import "math"

func maxProfit(prices []int) int {
	var i, profit int
	for i < len(prices) {
		min := math.MaxInt16
		max := math.MinInt16
		for ; i < len(prices) && prices[i] < min; i++ {
			min = prices[i]
		}
		for ; i < len(prices) && prices[i] > max; i++ {
			max = prices[i]
		}
		if max <= min {
			continue
		}
		profit += max - min
	}
	return profit
}

func maxProfit2(prices []int) int {
	var profit int
	for i := 1; i < len(prices); i++ {
		diff := prices[i] - prices[i-1]
		if diff > 0 {
			profit += diff
		}
	}
	return profit
}
