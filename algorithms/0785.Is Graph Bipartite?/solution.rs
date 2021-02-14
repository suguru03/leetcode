pub struct Solution;

impl Solution {
    pub fn is_bipartite(graph: Vec<Vec<i32>>) -> bool {
        let mut group = vec![0; graph.len()];
        let mut stack: Vec<usize> = (0..group.len()).collect();
        while let Some(i) = stack.pop() {
            if group[i] == 0 {
                group[i] = 1;
            }
            for j in &graph[i] {
                let j = *j as usize;
                if group[j] == 0 {
                    group[j] = -group[i];
                    stack.push(j);
                }
                if group[j] == group[i] {
                    return false;
                }
            }
        }
        true
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::is_bipartite(vec![vec![1, 3], vec![0, 2], vec![1, 3], vec![0, 2]]),
        true
    );
}

#[test]
fn test2() {
    assert_eq!(
        Solution::is_bipartite(vec![vec![1, 2, 3], vec![0, 2], vec![0, 1, 3], vec![0, 2]]),
        false
    );
}

#[test]
fn test3() {
    assert_eq!(
        Solution::is_bipartite(vec![vec![1, 2, 3], vec![0], vec![0], vec![0]]),
        true
    );
}

#[test]
fn test4() {
    assert_eq!(
        Solution::is_bipartite(vec![vec![1], vec![0], vec![3], vec![2]]),
        true
    );
}

#[test]
fn test5() {
    assert_eq!(
        Solution::is_bipartite(vec![vec![1], vec![0, 3], vec![3], vec![1, 2]]),
        true
    );
}
