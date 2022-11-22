using System.Collections.Generic;
using System.Linq;

namespace CourseSchedule
{
    public class Solution
    {
        private readonly Dictionary<int, int> prerequisitesMap = new Dictionary<int, int>();
        private readonly Dictionary<int, HashSet<int>> lookupMap = new Dictionary<int, HashSet<int>>();

        public bool CanFinish(int numCourses, int[][] prerequisites)
        {
            foreach (var pair in prerequisites)
            {
                var a1 = pair[0];
                var b1 = pair[1];
                if (!prerequisitesMap.ContainsKey(a1))
                {
                    prerequisitesMap.Add(a1, 0);
                }

                if (!lookupMap.ContainsKey(b1))
                {
                    lookupMap.Add(b1, new HashSet<int>());
                }

                prerequisitesMap[a1]++;
                lookupMap[b1].Add(a1);
            }

            var remainingSet = new HashSet<int>();
            for (var i = 0; i < numCourses; i++)
            {
                remainingSet.Add(i);
            }

            bool updated;
            do
            {
                updated = false;
                foreach (var i in remainingSet.ToList())
                {
                    if (prerequisitesMap.ContainsKey(i))
                    {
                        continue;
                    }

                    remainingSet.Remove(i);
                    if (RemoveCourse(i))
                    {
                        updated = true;
                    }
                }
            } while (updated && remainingSet.Count != 0);

            return remainingSet.Count == 0;
        }

        private bool RemoveCourse(int course)
        {
            if (!lookupMap.ContainsKey(course))
            {
                return false;
            }

            var courses = lookupMap[course];
            lookupMap.Remove(course);
            foreach (var c in courses)
            {
                if (--prerequisitesMap[c] != 0)
                {
                    continue;
                }

                prerequisitesMap.Remove(c);
                RemoveCourse(c);
            }

            return true;
        }
    }
}
