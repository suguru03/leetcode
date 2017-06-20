public class Solution {

  final int MAX = 2147483647;
  final int MIN = -2147483648;

  public int reverse(int x) {
    long result = 0;
    while (x != 0) {
      result = result * 10 + x % 10;
      x /= 10;
    }
    if (result < MIN || result > MAX) {
      return 0;
    }
    return (int)result;
  }
}
