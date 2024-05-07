test_case = int(input())
for test in range(1, test_case+1):
    direction =input()
    tree = [1,1]
    for d in direction:
        next_node = tree[0] + tree[1]
        if d=='L':
            tree[1] = next_node
        else:
            tree[0] = next_node
    print(f'#{test} {" ".join(map(str, tree))}')