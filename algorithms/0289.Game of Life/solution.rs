struct Cell {
    x: usize,
    y: usize,
}

impl Solution {
    pub fn game_of_life(board: &mut Vec<Vec<i32>>) {
        let mut cells : Vec<Cell> = Vec::new();
        for (y, row) in board.iter().enumerate() {
            for (x, cell) in row.iter().enumerate() {
                let mut live = 0;
                for dy in 0..=2 {
                    let y1 = y + dy - 1;
                    if y1 >= board.len() {
                        continue;
                    }
                    for dx in 0..=2 {
                       let x1 = x + dx - 1;
                       if x1 >= row.len() {
                            continue;
                        }
                        if y1 == y && x1 == x {
                            continue;
                        }
                        live += board[y1][x1];
                    }
                }
                match (cell, live) {
                    (&0, 3) => cells.push(Cell { x, y }),
                    (&1, 2..=3) => continue,
                    (&1, _) => cells.push(Cell { x, y }),
                    _ => continue
                }
            }
        }
        for cell in cells {
            board[cell.y][cell.x] ^= 1;
        }
    }
}
