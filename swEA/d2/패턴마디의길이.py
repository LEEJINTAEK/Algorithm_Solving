n = int(input())
def compare(str_len, input_str):
    for i in range(1, str_len):
        if input_str[:i] * (str_len // i)  + input_str[: str_len % i]== input_str:
            return i 
    return str_len

for test in range(1, n+1):
    input_str = input()
    answer = compare(len(input_str), input_str)
    print(f'#{test} {answer}')
    