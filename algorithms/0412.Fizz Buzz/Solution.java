import java.util.LinkedList;
public class Solution {
    public LinkedList<String> fizzBuzz(int n) {
      LinkedList<String> list = new LinkedList<String>();
      for (int i = 1; i <= n; i++) {
        if (i % 15 == 0) {
          list.add("FizzBuzz");
        } else if (i % 5 == 0) {
          list.add("Buzz");
        } else if (i % 3 == 0) {
          list.add("Fizz");
        } else {
          list.add("" + i);
        }
      }
      return list;
    }
}
