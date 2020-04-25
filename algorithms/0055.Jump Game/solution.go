package main

func canJump(nums []int) bool {
	var max int
	for index, num := range nums {
		if index > max {
			return false
		}
		next := index + num
		if next > max {
			max = next
		}
	}
	return true
}
