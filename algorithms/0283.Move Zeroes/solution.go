package main

func moveZeroes(nums []int) {
	var j int
	for i, n := range nums {
		if n == 0 {
			continue
		}
		nums[i], nums[j] = nums[j], n
		j++
	}
}
