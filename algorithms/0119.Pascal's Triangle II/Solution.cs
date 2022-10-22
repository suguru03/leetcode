namespace PascalsTriangleII
{
    using System.Collections.Generic;

    public class Solution
    {
        public IList<int> GetRow(int rowIndex)
        {
            var result = new List<int> { 1 };
            for (var i = 0; i < rowIndex; i++)
            {
                result.Add(0);
                for (var j = i + 1; j > 0; j--)
                {
                    result[j] += result[j - 1];
                }
            }

            return result;
        }
    }
}
