def solution(prices):
  n = len(prices)
  answer = [0] * n

  stack = []
  for i in range(n):
    while stack and prices[stack[-1]] > prices[i]:
      t = stack.pop()
      answer[t] = i - t
    stack.append(i)
    
  while stack:
    t = stack.pop()
    answer[t] = n - 1 - t

  return answer