def solution(phone_book):
  hmap = {}
  for cell in phone_book:
    hmap[cell] = 1
  for cell in phone_book:
    temp = ""
    for number in cell:
      temp += number
      if temp in hmap and temp != cell:
        return False
  return True