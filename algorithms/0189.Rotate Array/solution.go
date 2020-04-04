package main

func rotate(nums []int, k int) {
	var count, start int
	size := len(nums)
	for count < size {
		from := start
		prev := nums[from]
		for {
			to := (from + k) % size
			next := nums[to]
			nums[to] = prev
			from = to
			prev = next
			count++
			if count >= size || start == from {
				break
			}
		}
		start++
	}
}
