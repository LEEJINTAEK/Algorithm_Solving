[str1,str2] = input().split()
m,n = len(str1), len(str2)
dp = [[0] * (m+1) for _ in range(n+1)]
answer = 0

for i in range(1, n+1):
  for j in range(1, m+1):
    if str2[i-1] == str1[j-1]:
      dp[i][j] = dp[i-1][j-1] + 1
      answer = max(answer, dp[i][j])
    else:
      dp[i][j] = 0

print(answer)