import java.util.HashMap;
public class Solution {

  public int[] twoSum(int[] numbers, int target) {

    HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

    for (int i = 0; i < numbers.length; i++) {
      int num = numbers[i];
      int diff = target - num;
      int index = i + 1;
      if (map.containsKey(diff)) {
        return new int[]{map.get(diff), index};
      }
      map.put(num, index);
    }
    return new int[]{0, 0};
  }
}
