package main

func countElements(arr []int) int {
	set := make(map[int]struct{})
	for _, n := range arr {
		set[n-1] = struct{}{}
	}
	var cnt int
	for _, n := range arr {
		if _, ok := set[n]; ok {
			cnt++
		}
	}
	return cnt
}
