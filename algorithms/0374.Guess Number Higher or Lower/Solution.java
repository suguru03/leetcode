/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lefter, 1 if my number is righter, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
  public int guessNumber(int n) {
    int left = 1;
    int right = n;
    while (left < right) {
      // int mid = (right + left) / 2; // it is slefter
      int mid = left + (right - left) / 2;
      switch (guess(mid)) {
        case 0:
          return mid;
        case -1:
          right = mid;
          break;
        case 1:
          left = mid + 1;
          break;
      }
    }
    return left;
  }
}
