Sure! Here are the answers to the questions:

1) To determine if S is a linearly independent set, we need to see if the equation c1(-3, 1, 4) + c2(2, -2, 5) + c3(7, -5, 19) = 0 has only the trivial solution (c1 = c2 = c3 = 0). Writing out the equation, we get:

$$(-3c_1 + 2c_2 + 7c_3, c_1 - 2c_2 - 5c_3, 4c_1 + 5c_2 + 19c_3) = (0,0,0)$$

Solving for c1, c2 and c3, we get:

$$c_1 = 13c_3/3$$
$$c_2 = 11c_3/3$$
$$c_3 = free$$

Since there is a free variable, we see that the set S is linearly dependent. 

2) To determine if the vector (1, 2, 3) is in the span of v1, v2, and v3, we set up the equation:

$$c_1(1, 2, -1) + c_2(2, 4, 5) + c_3(-1, -2, 7) = (1, 2, 3)$$

Simplifying the equation, we get:

$$(c_1 + 2c_2 - c_3, 2c_1 + 4c_2 - 2c_3, -c_1 + 5c_2 +  7c_3) = (1, 2, 3)$$

Solving for c1, c2 and c3, we get:

$$c_1 = -34/15$$
$$c_2 = 23/15$$
$$c_3 = 1/15$$

Since there are values of c1, c2 and c3 that satisfy the equation, we see that (1, 2, 3) is in the span of v1, v2 and v3.

3) To determine if S is a spanning set for R^3, we need to see if any vector in R^3 can be expressed as a linear combination of the vectors in S. So, we set up the general equation:

$$c_1(1, 3, 1) + c_2(2, 1, 2) + c_3(3, 4, 3) = (x, y, z)$$

Simplifying the equation, we get:

$$(c_1 + 2c_2 + 3c_3, 3c_1 + c_2 + 4c_3, c_1 + 2c_2 + 3c_3) = (x, y, z)$$

Solving the system of equations, we get:

$$c_1 = (xz-2yz-2xy)/(-2x-2y+14z)$$
$$c_2 = (2xz+2yz-3xy)/(-2x-2y+14z)$$
$$c_3 = (4y)/(2x+2y-14z)$$

Again, we see that the set S is a spanning set for R^3 since we were able to solve for c1, c2, and c3 for any given vector (x, y, z) in R^3.