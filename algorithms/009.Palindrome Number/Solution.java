public class Solution {
	public boolean isPalindrome(int x) {
		if (x < 0) {
			return false;
		}
		int n = x;
		long result = 0;
		while (n != 0) {
			result = result * 10 + n % 10;
			n /= 10;
		}
		return x == (int)result;
	}
}
