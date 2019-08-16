# @param {String} s
# @return {Integer}
def title_to_number(s)
  index = s.length
  result = 0
  s.each_byte do |c|
    index -= 1
    val = c - 64
    if index != 0 then
      val *= 26 ** index
    end
    result += val
  end
  return result
end
