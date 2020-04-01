package main

func singleNumber(nums []int) int {
	var bit int
	for _, n := range nums {
		bit ^= n
	}
	return bit
}

func singleNumber2(nums []int) int {
	countMap := map[int]int{}
	for _, n := range nums {
		countMap[n]++
	}
	for n, count := range countMap {
		if count == 1 {
			return n
		}
	}
	return -1
}
