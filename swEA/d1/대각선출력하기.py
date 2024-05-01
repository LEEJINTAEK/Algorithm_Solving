my_str = '#++++'

for i in range(0, len(my_str)):
    print(my_str)
    my_str = my_str[:i] + '+' + '#' + my_str[i+2:]