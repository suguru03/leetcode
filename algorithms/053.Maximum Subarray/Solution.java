public class Solution {

  final long MAX = Long.MAX_VALUE;
  final long MIN = Long.MIN_VALUE;

  public int maxSubArray(int[] nums) {
    long sum = 0;
    long min = MAX;
    long max = MIN;
    long result = MIN;
    for (int i = 0; i < nums.length; i++) {
      int n = nums[i];
      sum += n;
      min = Math.min(min, sum);
      max = Math.max(max, sum);
      result = Math.max(result, sum);
      result = Math.max(result, n);
      long diff = sum - min;
      if (diff != 0) {
        result = Math.max(result, diff);
      }
    }
    return (int)result;
  }
}
