package main

import "math"

func findRestaurant(list1 []string, list2 []string) []string {
	scoreMap := map[string]int{}
	for score, restaurant := range list1 {
		scoreMap[restaurant] = score
	}
	min := math.MaxInt16
	var result []string
	for score, restaurant := range list2 {
		if _, ok := scoreMap[restaurant]; !ok {
			continue
		}
		sum := score + scoreMap[restaurant]
		if sum > min {
			continue
		}
		if sum < min {
			min = sum
			result = result[:0]
		}
		result = append(result, restaurant)
	}
	return result
}
