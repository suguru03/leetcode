package main

func rotate(nums []int, k int) {
	var count, start int
	size := len(nums)
	for count < size {
		from := start
		prev := nums[from]
		for {
			to := (from + k) % size
			nums[to], prev, from = prev, nums[to], to
			count++
			if count >= size || start == from {
				break
			}
		}
		start++
	}
}
