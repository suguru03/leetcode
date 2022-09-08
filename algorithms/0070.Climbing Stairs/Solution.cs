namespace ClimbingStairs
{
    public class Solution
    {
        public int ClimbStairs(int n)
        {
            var arr = new int[n + 2];
            arr[0] = 1;
            for (var i = 0; i < n; i++)
            {
                arr[i + 1] += arr[i];
                arr[i + 2] += arr[i];
            }

            return arr[n];
        }

        public int ClimbStairs2(int n)
        {
            var (prev, next) = (0, 1);
            for (var i = 0; i < n; i++)
            {
                (prev, next) = (next, next + prev);
            }

            return next;
        }
    }
}
