namespace PascalsTriangle
{
    using System.Collections.Generic;
    using System.Linq;

    public class Solution
    {
        public IList<IList<int>> Generate(int numRows)
        {
            var result = new List<IList<int>> { new List<int> { 1 } };
            while (--numRows > 0)
            {
                var prev = result.Last();
                var next = new List<int>();
                result.Add(next);
                for (var j = 0; j <= prev.Count; j++)
                {
                    next.Add(Get(prev, j - 1) + Get(prev, j));
                }
            }

            return result;
        }

        private static int Get(IList<int> list, int index)
        {
            return index < 0 || index >= list.Count ? 0 : list[index];
        }
    }
}
