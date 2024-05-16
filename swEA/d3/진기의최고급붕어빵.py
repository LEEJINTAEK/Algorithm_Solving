test_case = int(input())
for test in range(1, test_case + 1):
    n,m,k = map(int, input().split())
    consumer = list(map(int,input().split()))
    late = max(consumer)
    consumer.sort()
    contain = [0] * (late+1)

    for i in range(1, late+1):
        if i % m == 0:
            contain[i] = contain[i-1] + k
        else:
            contain[i] = contain[i-1]

    sold = 0
    answer = 'Possible'

    for c in consumer:
        if contain[c] - sold > 0:
            sold += 1
        else:
            answer = 'Impossible'
            break

    print(f'#{test} {answer}')

