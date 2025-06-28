class Solution:
    def findGCD(self, nums: List[int]) -> int:
        nums.sort()
        smallest_number = nums[0]
        largest_number =nums[-1]
        gcd = 1
        for n in range(1, largest_number +1): 
            if smallest_number % n == 0 and largest_number % n == 0:
                gcd = n
        return gcd