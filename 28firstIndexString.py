class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        window_sizer = len(needle)
        window_start = 0
        while window_start < len(haystack):
            window = haystack[window_start:window_sizer]
            if window == needle:
                return window_start
            else:
                window_start += 1
                window_sizer += 1
        return -1