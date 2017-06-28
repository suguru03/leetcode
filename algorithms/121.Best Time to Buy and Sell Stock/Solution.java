public class Solution {
  public int maxProfit(int[] prices) {
    int min = Integer.MAX_VALUE;
    int max = 0;
    for (int price : prices) {
      int diff = price - min;
      if (diff > 0) {
        max = Math.max(max, diff);
      } else {
        min = price;
      }
    }
    return max;
  }
}
