public class Solution {

  public int maxSubArray(int[] nums) {
    int sum = 0;
    int max = Integer.MIN_VALUE;
    for (int i = 0; i < nums.length; i++) {
      int n = nums[i];
      sum += n;
      max = Math.max(max, sum);
      if (sum < 0) {
        sum = 0;
      }
    }
    return max;
  }
}
