test_case = int(input())
def car_race(commands):
    go = 0
    speed = 0
    for race in commands:
        if race[0] == 1:
            speed += race[1]
        if race[0] == 2:
            speed -= race[1]
            if speed < 0:
                speed = 0
        go += speed
    return go

for test in range(1,test_case+1):
    n = int(input())
    commands = [list(map(int, input().split())) for _ in range(n)]
    print(f'#{test} {car_race(commands)}')