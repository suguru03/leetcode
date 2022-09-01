using NUnit.Framework;

namespace AddTwoNumbers
{
    public class Test
    {
        private readonly Solution solution = new Solution();

        [Test]
        public void Test1()
        {
            Assert.AreEqual(
                solution.AddTwoNumbers(ListNode.Create(new[] { 2, 4, 3 }), ListNode.Create(new[] { 5, 6, 4 }))
                    .ToArray(),
                new[] { 7, 0, 8 }
            );
        }
    }
}
