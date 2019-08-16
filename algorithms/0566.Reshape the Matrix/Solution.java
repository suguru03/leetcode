public class Solution {
  public int[][] matrixReshape(int[][] nums, int r, int c) {
    int cl = nums.length;
    int rl = nums[0].length;
    int m = cl * rl;
    if (m == 0 || m != r * c) {
      return nums;
    }
    int[][] result = new int[r][c];
    for (int i = 0; i < cl; i++) {
      int[] row = nums[i];
      for (int j = 0; j < rl; j++) {
        int sum = i * rl + j;
        int ci = sum / c;
        int ri = sum % c;
        result[ci][ri] = row[j];
      }
    }
    return result;
  }
}
