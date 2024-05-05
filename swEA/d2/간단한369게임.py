n = int(input())
game_str = ''
for num in range(1,n+1):
    cnt = str(num).count('3') + str(num).count('6') + str(num).count('9')
    if cnt > 0:
        game_str += ' '+ '-' * cnt
    else: 
        game_str += ' ' + str(num)
        
print(game_str.strip())