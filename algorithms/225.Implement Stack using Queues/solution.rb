class Item

  attr_reader :val, :prev
  def initialize(val, prev)
    @val, @prev = val, prev
  end
end

class MyStack

=begin
  Initialize your data structure here.
=end
  def initialize()
    @head = nil
  end


=begin
  Push element x onto stack.
  :type x: Integer
  :rtype: Void
=end
  def push(x)
    @head = Item.new(x, @head)
  end


=begin
  Removes the element on top of the stack and returns that element.
  :rtype: Integer
=end
  def pop()
    head = @head
    if head == nil then
      return nil
    end
    @head = head.prev
    return head.val
  end


=begin
  Get the top element.
  :rtype: Integer
=end
  def top()
    return @head ? @head.val : nil
  end


=begin
  Returns whether the stack is empty.
  :rtype: Boolean
=end
  def empty()
    return @head == nil
  end


end

# Your MyStack object will be instantiated and called as such:
# obj = MyStack.new()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
