package main

func minDeletionSize(A []string) int {
	var count int
	for c := 0; c < len(A[0]); c++ {
		for r := 1; r < len(A); r++ {
			if A[r][c] >= A[r-1][c] {
				continue
			}
			count++
			break
		}
	}
	return count
}
