from collections import Counter
test_case = int(input())
for test in range(1, test_case +1):
    input_dict = Counter(input())
    answer = 'No'
    if len(input_dict) == 2:
        for value in input_dict.values() :
            if value != 2:
                answer = 'No'
                break
            answer = 'Yes'
    print(f'#{test} {answer}')
    