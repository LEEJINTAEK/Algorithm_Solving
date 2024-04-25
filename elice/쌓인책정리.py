def min_moves_to_order(books):
  move = 0
  correct_position = len(books)
  for i in range(len(books)-1, -1, -1):
    if books[i] == correct_position:
      correct_position -= 1
    else:
      move += 1
      
  return move

books = list(map(int, input().split()))

print(min_moves_to_order(books))
