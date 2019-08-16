# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
  prev = nil
  current = head
  while current do
    node = current.next
    current.next = prev
    prev = current
    current = node
  end
  return prev
end
