# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def contains_nearby_duplicate(nums, k)
  map = {}
  nums.each_with_index do |n, i|
    t = map[n]
    if t && i - t <= k then
      return true
    end
    map[n] = i
  end
  return false
end
