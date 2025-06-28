class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) <= 1:
            return 0
        else:
            minPrice = pow(10,4)
            maxProfit = 0
            for price in prices:
                if price < minPrice:
                    minPrice = price
                potentialProfit = price- minPrice
                if potentialProfit > maxProfit:
                    maxProfit = potentialProfit
            return maxProfit