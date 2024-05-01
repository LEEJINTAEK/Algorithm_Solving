n = int(input())                        
my_list= list(map(int, input().split()))

print(sorted(my_list)[n//2])