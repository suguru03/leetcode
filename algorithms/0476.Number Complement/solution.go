package main

import "math"

func findComplement(num int) int {
	return num ^ (1<<(int(math.Log2(float64(num)))+1) - 1)
}
