package main

func twoSum(nums []int, target int) []int {
	var indexMap map[int]int = make(map[int]int)
	var result []int
	for index, num := range nums {
		var diff = target - num
		if indexMap[diff] != 0 {
			result = []int{indexMap[diff] - 1, index}
			break
		}
		indexMap[num] = index + 1
	}
	return result
}
