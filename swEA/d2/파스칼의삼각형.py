test_case = int(input())
def change_str(arr, n):
    return '\n'.join(' '.join(map(str,row)) for row in arr)

for test in range(1, test_case+1):
    n = int(input())
    arr = [[1] * i for i in range(1,n+1)]
    print(f'#{test}')
    if n>2:
        for i in range(2, n):
            for j in range(1,i):
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    print(f'{change_str(arr,n)}')