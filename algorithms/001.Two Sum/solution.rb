# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  hash = {}
  for i in 0..nums.length
    n = nums[i]
    diff = target - n
    t = hash[diff]
    if t != nil
      return [t, i]
    end
    hash[n] = i
  end
end
