test_case = int(input())
for test in range(1, test_case+1):
    n, k = map(int, input().split())
    students = []
    for student in range(1, n+1):
        middle, final, work = map(int, input().split())
        total = middle * 0.35 + final * 0.45 + work * 0.2
        students.append([student, total])
    grade_arr = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']
    same = n/10
    students.sort(key=lambda x: x[1], reverse=True)
    grade = {}
    cnt = 0
    cur_idx = 0
    for student, total in students:
        grade[student] = grade_arr[cur_idx]
        cnt += 1 
        if cnt == same:
            cnt = 0
            cur_idx += 1
    print(f'#{test} {grade[k]}')
        
    