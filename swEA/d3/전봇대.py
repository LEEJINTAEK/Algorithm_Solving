test_case = int(input())
for test in range(1, test_case + 1):
    n = int(input())
    wires = [tuple(map(int,input().split())) for _ in range(n)]
    answer = 0
    for i in range(n):
        for j in range(i + 1, n):
            if ((wires[i][0]>wires[j][0] and wires[i][1]<wires[j][1]) or (wires[i][0]<wires[j][0] and wires[i][1]>wires[j][1])):
                answer += 1
    print(f'#{test} {answer}')

