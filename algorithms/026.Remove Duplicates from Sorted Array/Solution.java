public class Solution {
	public int removeDuplicates(int[] nums) {
		int l = nums.length;
		if (l <= 1) {
			return l;
		}
		int length = 1;
		int prev = nums[0];
		for (int i = 1; i < l; i++) {
			int n = nums[i];
			if (prev == n) {
				continue;
			}
			prev = n;
			nums[length++] = n;
		}
		return length;
	}
}
