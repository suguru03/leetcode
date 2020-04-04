package main

func maxSubArray(nums []int) int {
	cur, res := nums[0], nums[0]
	for _, n := range nums[1:] {
		cur = max(n, cur+n)
		res = max(res, cur)
	}
	return res
}

func max(n1, n2 int) int {
	if n2 > n1 {
		return n2
	}
	return n1
}
