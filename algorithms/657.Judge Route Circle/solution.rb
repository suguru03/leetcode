# @param {String} moves
# @return {Boolean}
def judge_circle(moves)
  x = 0
  y = 0
  moves.each_char do |c|
    case c
    when "U"
      y += 1
    when "D"
      y -= 1
    when "R"
      x += 1
    when "L"
      x -= 1
    end
  end
  return x === 0 && y === 0
end
