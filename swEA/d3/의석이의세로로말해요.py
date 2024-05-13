T = int(input())  
for t in range(1, T+1):
    words = [input() for _ in range(5)]  
    result = '' 
    max_length = max(len(word) for word in words)
    for i in range(max_length):
        for word in words:
            if i < len(word):  
                result += word[i]

    print(f'#{t} {result}')
