test_case = int(input())
day_dict = {'MON':1, 'TUE':2, 'WED':3, 'THU':4, 'FRI':5, 'SAT':6, 'SUN':7}
for test in range(1, test_case+1):
    day = input()
    diff = day_dict['SUN'] - day_dict[day]
    if diff == 0 :
        diff = 7
    print(f'#{test} {diff}')