# @param {Integer[]} arr
# @param {Integer} k
# @param {Integer} x
# @return {Integer[]}
def find_closest_elements(arr, k, x)
  arr.sort! do |n1, n2|
    a1 = (n1 - x).abs
    a2 = (n2 - x).abs
    a1 === a2 ? n1 <=> n2 : a1 <=> a2
  end
  return arr.slice(0, k).sort
end
