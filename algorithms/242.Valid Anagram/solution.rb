# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
  if s.length != t.length then
    return false
  end
  map = {}
  s.each_char do |c|
    map[c] = map[c] || 0
    map[c] += 1
  end
  t.each_char do |c|
    if !map[c] || map[c] == 0 then
      return false
    end
    map[c] -= 1
  end
  return true
end
