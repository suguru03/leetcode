// 3:30
public class Solution {
	public String longestCommonPrefix(String[] strs) {
		int length = strs.length;
		if (length == 0) {
			return "";
		}

		String str = strs[length--];
		int prefixLength = str.length();
		while (length-- != 0) {
			prefixLength = getPrefixLength(str, strs[length]);
			str = str.substring(0, prefixLength);
		}
		return str;
	}

	private int getPrefixLength(String str1, String str2) {
		int length = Math.min(str1.length(), str2.length());
		for (int i = 0; i < length; i++) {
			char c1 = str1.charAt(i);
			char c2 = str2.charAt(i);
			if (c1 != c2) {
				return i;
			}
		}
		return length;
	}

	public String longestCommonPrefix2(String[] strs) {
		if (strs.length == 0) {
			return "";
		}
		String prefix = strs[0];
		for (int i = 1; i < strs.length; i++) {
			prefix = findCommonPrefix(prefix, strs[i]);
		}
		return prefix;
	}

	private String findCommonPrefix(String str1, String str2) {
		String prefix = "";
		long length = Math.min(str1.length(), str2.length());
		for (int i = 0; i < length; i++) {
			char c1 = str1.charAt(i);
			char c2 = str2.charAt(i);
			if (c1 != c2) {
				return prefix;
			}
			prefix += c1;
		}
		return prefix;
	}

}
