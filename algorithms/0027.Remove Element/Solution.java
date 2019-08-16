public class Solution {
  public int removeElement(int[] nums, int val) {
    int length = 0;
    for (int i = 0; i < nums.length; i++) {
      int n = nums[i];
      if (n == val) {
        continue;
      }
      nums[length++] = n;
    }
    return length;
  }
}
