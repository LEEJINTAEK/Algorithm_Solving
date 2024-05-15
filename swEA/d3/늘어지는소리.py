test_case = int(input())
for test in range(1, test_case+1):
    s = input()
    H = int(input())
    positions = list(map(int, input().split()))
    for pos in sorted(positions, reverse=True):
        s = s[:pos] + '-' + s[pos:]
    print(f"#{test} {s}")
