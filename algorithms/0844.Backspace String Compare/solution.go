package main

func backspaceCompare(S string, T string) bool {
	var sb, tb int
	si := len(S) - 1
	ti := len(T) - 1
	for si >= 0 || ti >= 0 {
		sc := getChar(S, si)
		tc := getChar(T, ti)
		if sc == '#' {
			si--
			sb++
			continue
		}
		if tc == '#' {
			ti--
			tb++
			continue
		}
		if sb > 0 {
			si--
			sb--
			continue
		}
		if tb > 0 {
			ti--
			tb--
			continue
		}
		if sc != tc {
			return false
		}
		si--
		ti--
	}
	return true
}

func getChar(str string, index int) byte {
	if index < 0 {
		return ' '
	}
	return str[index]
}
