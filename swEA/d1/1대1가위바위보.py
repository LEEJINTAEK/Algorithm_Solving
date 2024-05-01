A,B = map(int, input().split())
game_role = {'3,1':1, '1,3':1, '3,2':3, '2,3':3, '2,1':2, '1,2':2}
user = {A:'A',B:'B'}
win = game_role[f'{A},{B}']
print(user[win])