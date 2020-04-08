package main

func twoSum(numbers []int, target int) []int {
	l, r := 0, len(numbers)-1
	for {
		if l == r {
			return []int{0, 0}
		}
		sum := numbers[l] + numbers[r]
		if sum == target {
			return []int{l + 1, r + 1}
		}
		if sum < target {
			l++
		} else {
			r--
		}
	}
}
