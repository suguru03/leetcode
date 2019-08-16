# @param {Integer[]} nums
# @return {Boolean}
def check_possibility(nums)
  prev = -Float::INFINITY
  changed = false
  nums.each_with_index do |n, i|
    if n >= prev
      prev = n
      next
    end
    if changed
      return false
    end
    changed = true
    if i === 1 || n >= nums[i - 2]
      prev = n
    end
  end
  return true
end
