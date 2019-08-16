# @param {Integer} n
# @return {Integer}
def trailing_zeroes(n)
  result = 0
  while n > 0 do
    n = n / 5 | 0
    result += n
  end
  return result
end
