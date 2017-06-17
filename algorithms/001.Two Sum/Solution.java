public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int l = nums.length;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < l; i++) {
          int n = nums[i];
          int diff = target - n;
          if (map.containsKey(diff)) {
            return new int[]{map.get(diff), i};
          }
          map.put(n, i);
        }
        return new int[]{0, 0};
    }
}
