import heapq
def solution(scoville, K):
    if K == 0:
      return 0
    answer = 0
    heap = []
    for i in scoville:
        heapq.heappush(heap, i)

    i = 0
    while(heap[0] <= K and i < len(scoville)-1):
        heapq.heappush(heap, heapq.heappop(heap) + heapq.heappop(heap) * 2)
        answer += 1
        i+= 1
        
    if heap[len(heap)-1] <= K:
        answer = -1
        
    return answer