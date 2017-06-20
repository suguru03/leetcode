import java.util.LinkedList;

public class Solution {
  public boolean isValid(String s) {

    LinkedList<String> pendingList = new LinkedList<String>();
    for (int i = 0; i < s.length(); i++) {
      String c = s.substring(i, i + 1);
      switch (c) {
        case "(":
          pendingList.push(")");
          break;
        case "{":
          pendingList.push("}");
          break;
        case "[":
          pendingList.push("]");
          break;
        default:
          if (pendingList.size() == 0) {
            return false;
          }
          String p = pendingList.pop();
          if (!c.equals(p)) {
            return false;
          }
          break;
      }
    }
    return pendingList.size() == 0;
  }
}
