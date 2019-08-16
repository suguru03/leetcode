public class Solution {
    public String addBinary(String a, String b) {
      int al = a.length();
      int bl = b.length();
      int max = Math.max(al, bl);
      String result = "";
      int prev = 0;
      for (int i = 1; i <= max; i++) {
        int ai = al - i;
        int bi = bl - i;
        int an = ai < 0 ? 0 : a.charAt(ai) == '0' ? 0 : 1;
        int bn = bi < 0 ? 0 : b.charAt(bi) == '0' ? 0 : 1;
        int sum = an + bn + prev;
        prev = sum / 2;
        result = sum % 2 + result;
      }
      return prev == 0 ? result : prev + result;
    }
}
