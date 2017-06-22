import java.util.LinkedList;
public class Solution {
  public int[] plusOne(int[] digits) {
    LinkedList<Integer> list = new LinkedList<Integer>();
    int prev = 1;
    for (int i = digits.length - 1; i >= 0; i--) {
      int n = digits[i] + prev;
      prev = n / 10;
      list.push(n % 10);
    }
    while (prev > 0) {
      list.push(prev % 10);
      prev /= 10;
    }
    int size = list.size();
    int[] result = new int[size];
    for (int i = 0; i < size; i++) {
      result[i] = list.pop();
    }
    return result;
  }
}
