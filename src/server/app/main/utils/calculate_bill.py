import math


# type1-linear,type2-+10%,type3=+10%
# 2-110,3-120
def calculate_bill(membership, guests, rooms, price, discount, id):
    price = float(price)
    discount = float(discount)
    total_cost = 0
    if id == 1:
        for _ in range(rooms):
            total_cost += price
    if id == 2:
        for _ in range(rooms):
            if guests > 1:
                total_cost += price*(110/100.0)
                guests -= 2
            else:
                total_cost += (price)
                guests -= 1
    if id == 3:
        for _ in range(rooms):
            if guests > 2:
                total_cost += (price)*(120/100.0)
                guests -= 3
            elif guests > 1:
                total_cost += (price)*(110//100.0)
                guests -= 2
            else:
                total_cost += (price)
                guests -= 1

    delta_price, dis_price = calPrice(total_cost, discount)
    if membership:
        savings, bill_price = calPrice(dis_price, 5)
        return math.floor(total_cost),  math.floor(bill_price),  math.floor(savings),  math.floor(((total_cost - bill_price) / total_cost) * 100)
    else:
        return math.floor(total_cost),  math.floor(dis_price), 0,  math.floor(((total_cost - dis_price) / total_cost) * 100)


def calPrice(price, discount):
    return (discount/100.0)*price, price-(discount/100.0)*price
