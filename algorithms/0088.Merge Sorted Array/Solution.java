public class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
      int l = m + n;
      int i = m - 1;
      int j = n - 1;
      while (i >= 0 && j >= 0) {
        int n1 = nums1[i];
        int n2 = nums2[j];
        if (n1 > n2) {
          nums1[--l] = n1;
          i--;
        } else {
          nums1[--l] = n2;
          j--;
        }
      }
      while (j >= 0) {
        nums1[--l] = nums2[j--];
      }
    }
}
