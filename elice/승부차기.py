def is_valid_score(score):
    team_a, team_b = map(int, score.split(':'))
  
    if team_a == team_b:
        return True
    else:
        diff = abs(team_a - team_b)
        
        total_shots = max(team_a, team_b)  

        if total_shots <= 5:
            max_possible_diff = 5 - total_shots + 1
            return diff <= max_possible_diff
        else:
            return diff == 1

score = input()
print(is_valid_score(score))
