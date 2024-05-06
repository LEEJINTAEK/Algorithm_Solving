from collections import deque

n = int(input())
m = int(input())

friends = [[] for _ in range(n+1)]

for _ in range(m):
  a,b = map(int, input().split())
  friends[a].append(b)
  friends[b].append(a)

max_distance = 2
q = deque([1])
check = [-1] * (n+1)
check[1] = 0

while q:
  cur = q.popleft()

  for friend in friends[cur]:
    if check[friend] != -1 :
      continue
    check[friend] = check[cur] + 1
    q.append(friend)

cnt = 0
for d in check:
  if d > 0 and d <= max_distance:
    cnt +=1

print(cnt)