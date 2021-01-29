#[macro_use]
extern crate utils;
use utils::{to_tree, TreeNode};

pub struct Solution;

use std::borrow::Borrow;
use std::cell::RefCell;
use std::collections::LinkedList;
use std::rc::Rc;

struct Cell<'a> {
    x: i32,
    y: i32,
    node: &'a Option<Rc<RefCell<TreeNode>>>,
}

impl Solution {
    pub fn vertical_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut cells: Vec<&Cell> = Vec::new();
        let mut queue: LinkedList<&Cell> = LinkedList::new();
        queue.push_back(&Cell {
            x: 0,
            y: 0,
            node: &root,
        });
        // TODO: NOT WORKING!
        while let Some(cell) = queue.borrow().pop_front() {
            if cell.node == &None {
                continue;
            }
            let node = &cell.node.unwrap().borrow();
            queue.push_back(&Cell {
                x: &cell.x - 1,
                y: &cell.y + 1,
                node: &node.left,
            });
            queue.push_back(&Cell {
                x: &cell.x + 1,
                y: &cell.y + 1,
                node: &node.right,
            });
            cells.push(cell);
        }
        vec![]
    }
}

#[test]
fn test1() {
    assert_eq!(
        Solution::vertical_traversal(tree![3, 9, 20, None, None, 15, 7]),
        vec![vec![9], vec![3, 15], vec![20], vec![7]]
    );
}
