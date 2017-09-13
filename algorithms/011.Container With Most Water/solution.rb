# @param {Integer[]} height
# @return {Integer}
def max_area(height)
  max = 0
  left = 0
  right = height.length - 1
  while left < right do
    n1 = height[left]
    n2 = height[right]
    if n1 < n2 then
      max = [max, n1 * (right - left)].max
      left += 1
    else
      max = [max, n2 * (right - left)].max
      right -= 1
    end
  end
  return max
end
