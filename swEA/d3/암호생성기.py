from collections import deque

for _ in range(1, 11):
    test = int(input())
    codes = list(map(int,input().split()))
    q = deque(codes)
    cur_value = 1
    while True:
        next_code = q.popleft() - cur_value
        if next_code <= 0:
            next_code = 0 
            q.append(next_code)
            break
        q.append(next_code)
        cur_value += 1
        if cur_value == 6:
            cur_value = 1
    print(f'#{test} {" ".join(map(str, q))}')
        