package main

func productExceptSelf(nums []int) []int {
	size := len(nums)
	result := make([]int, size)
	for i := 0; i < size; i++ {
		result[i] = 1
	}
	left := 1
	right := 1
	for l := 0; l < size; l++ {
		r := size - l - 1
		result[l] *= left
		result[r] *= right
		left *= nums[l]
		right *= nums[r]
	}
	return result
}
