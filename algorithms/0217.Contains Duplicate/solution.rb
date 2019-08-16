# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
  map = {}
  nums.each do |n|
    if map[n] then
      return true
    end
    map[n] = true
  end
  return false
end
