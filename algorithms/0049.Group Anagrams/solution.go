package main

import "fmt"

func groupAnagrams(strs []string) [][]string {
	groupMap := map[string][]string{}
	for _, str := range strs {
		var counts [26]int
		for _, char := range str {
			counts[char-97]++
		}
		key := fmt.Sprint(counts)
		if group, ok := groupMap[key]; ok {
			groupMap[key] = append(group, str)
		} else {
			groupMap[key] = []string{str}
		}
	}
	result := [][]string{}
	for _, group := range groupMap {
		result = append(result, group)
	}
	return result
}
