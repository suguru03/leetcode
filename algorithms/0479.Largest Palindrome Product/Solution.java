class Solution {
  public int largestPalindrome(int n) {
    if (n == 1) {
      return 9;
    }
    long upper = (long) Math.pow(10, n) - 1;
    long lower = (long) Math.pow(10, n - 1);

    long max = upper * upper;
    int half = (int) (max / upper);


    long palindore = 0;
    first:
    while (half > 0) {
      palindore = createPalindrome(half--);
      for (long i = upper; i > lower; i--) {
        if (i * i < palindore) {
          break;
        }
        if (palindore % i == 0) {
          break first;
        }
      }
    }
    return (int) (palindore % 1337);
  }

  private long createPalindrome(long half) {
    long h = half;
    int digit = 0;
    long num = 0;
    while (h > 0) {
      num = num * 10 + h % 10;
      h /= 10;
      digit++;
    }
    return num + half * (long) Math.pow(10, digit);
  }
}
