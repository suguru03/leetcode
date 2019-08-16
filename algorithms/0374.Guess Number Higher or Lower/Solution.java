/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
  public int guessNumber(int n) {
    int low = 1;
    int high = n;
    while (low < high) {
      // int mid = (high + low) / 2; // it is slower
      int mid = low + (high - low) / 2;
      switch (guess(mid)) {
        case 0:
          return mid;
        case -1:
          high = mid;
          break;
        case 1:
          low = mid + 1;
          break;
      }
    }
    return low;
  }
}
