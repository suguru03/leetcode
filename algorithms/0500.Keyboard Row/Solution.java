import java.util.HashMap;
import java.util.LinkedList;
public class Solution {
  private final String[][] keyboard = new String[][]{
    {"q", "w", "e", "r", "t", "y", "u", "i", "o", "p"},
    {"a", "s", "d", "f", "g", "h", "j", "k", "l"},
    {"z", "x", "c", "v", "b", "n", "m"},
  };
  private final HashMap<String, Integer> map = new HashMap<String, Integer>();
  public Solution() {
    for (int i = 0; i < keyboard.length; i++) {
      String[] keys = keyboard[i];
      for (String s: keys) {
        map.put(s, i);
        map.put(s.toUpperCase(), i);
      }
    }
  }
  public String[] findWords(String[] words) {
    LinkedList<String> list = new LinkedList<String>();
    first:
    for (int i = 0; i < words.length; i++) {
      String word = words[i];
      int l = word.length();
      int index = map.get(word.substring(l - 1, l));
      while (--l > 0) {
        if (index != map.get(word.substring(l - 1, l))) {
          continue first;
        }
      }
      list.add(word);
    }
    int size = list.size();
    String[] result = new String[size];
    for (int i = 0; i < size; i++) {
      result[i] = list.poll();
    }
    return result;
  }
}
