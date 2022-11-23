using System.Collections.Generic;

namespace ValidSudoku
{
    public class Solution
    {
        public bool IsValidSudoku(char[][] board)
        {
            for (var y = 0; y < 9; y++)
            {
                var memo = new HashSet<char>();
                for (var x = 0; x < 9; x++)
                {
                    if (!TryAdd(memo, board[y][x]))
                    {
                        return false;
                    }
                }
            }

            for (var x = 0; x < 9; x++)
            {
                var memo = new HashSet<char>();
                for (var y = 0; y < 9; y++)
                {
                    if (!TryAdd(memo, board[y][x]))
                    {
                        return false;
                    }
                }
            }

            for (var z = 0; z < 9; z++)
            {
                var x0 = z % 3 * 3 + 1;
                var y0 = z / 3 * 3 + 1;
                var memo = new HashSet<char>();
                for (var dx = -1; dx <= 1; dx++)
                {
                    var x = x0 + dx;
                    for (var dy = -1; dy <= 1; dy++)
                    {
                        if (!TryAdd(memo, board[y0 + dy][x]))
                        {
                            return false;
                        }
                    }
                }
            }

            return true;
        }

        private static bool TryAdd(HashSet<char> memo, char val)
        {
            if (val == '.')
            {
                return true;
            }

            if (memo.Contains(val))
            {
                return false;
            }

            memo.Add(val);
            return true;
        }
    }
}
