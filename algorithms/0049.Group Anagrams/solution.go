package main

func groupAnagrams(strs []string) [][]string {
	groupMap := make(map[[26]int][]string)
	for _, str := range strs {
		var counts [26]int
		for _, char := range str {
			counts[char-'a']++
		}
		groupMap[counts] = append(groupMap[counts], str)
	}
	var result [][]string
	for _, group := range groupMap {
		result = append(result, group)
	}
	return result
}
