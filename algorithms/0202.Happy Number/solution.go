package main

func isHappy(n int) bool {
	set := map[int]bool{}
	for !set[n] {
		set[n] = true
		var next int
		for ; n > 0; n /= 10 {
			rem := n % 10
			next += rem * rem
		}
		n = next
	}
	return n == 1
}
