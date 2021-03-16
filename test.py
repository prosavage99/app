def ch_li(n):
    help_li = list()
    for i in range(n):
        if i == 0 or i == n - 1:
            help_li.append(1)
        else:
            p_li = ch_li(n - 1)
            help_li.append(p_li[i - 1] + p_li[i])
    return help_li


def triangle(m):
    li = list()
    for i in range(m + 1):
        li.append(ch_li(i + 1))
    print("RESULT:", *li[-1])


triangle(0)
triangle(1)
triangle(2)
triangle(3)
triangle(4)
triangle(5)
triangle(10)
