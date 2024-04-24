# 시간초과

n = int(input())
matrix = []
for i in range(n):
  row = list(map(int,input().split()))
  matrix.append(row)

answer = 0
check = [[False for _ in range(n)] for _ in range(n)]

def dfs(row,col):
  global answer

  if row == n-1 and col == n-1:
    answer += 1 
    return 
  
  if row < 0 or  col < 0 or row >= n or col >= n or check[row][col]:
    return 
  
  jump = matrix[row][col]

  check[row][col] = True
  dfs(row + jump, col)
  dfs(row, col + jump)
  check[row][col] = False
  
dfs(0,0)

print(answer)