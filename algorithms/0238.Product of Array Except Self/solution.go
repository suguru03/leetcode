package main

func productExceptSelf(nums []int) []int {
	size := len(nums)
	left := make([]int, size)
	right := make([]int, size)
	for l := 0; l < size; l++ {
		r := size - l - 1
		if l == 0 {
			left[l] = nums[l]
			right[r] = nums[r]
		} else {
			left[l] = nums[l] * left[l-1]
			right[r] = nums[r] * right[r+1]
		}
	}
	result := make([]int, size)
	for i := 0; i < size; i++ {
		l := i - 1
		r := i + 1
		if i == 0 {
			result[i] = right[r]
		} else if i == size-1 {
			result[i] = left[l]
		} else {
			result[i] = left[l] * right[r]
		}
	}
	return result
}
