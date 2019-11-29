func convertToTitle(n int) string {
	chars := []byte{}
	for n > 0 {
		charCode := n % 26
		if charCode == 0 {
			charCode = 26
		}
		char := byte('@'+charCode)
		if len(chars) == 0 {
			chars = append(chars, char)
		} else {
			chars, chars[0] = append(chars[:1], chars[0:]...), char
		}
		n -= charCode
		n /= 26
	}
	return string(chars)
}
