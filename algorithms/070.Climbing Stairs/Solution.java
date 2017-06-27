import java.util.HashMap;
public class Solution {

  private final int[] STEPS = {1, 2};
  private HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

  public int climbStairs(int n) {
    if (n <= 0) {
      return 0;
    }
    if (map.containsKey(n)) {
      return map.get(n);
    }
    int count = 0;
    for (int i = 0; i < STEPS.length; i++) {
      int rest = n - STEPS[i];
      count += rest == 0 ? 1 : this.climbStairs(rest);
    }
    map.put(n, count);
    return count;
  }
}
