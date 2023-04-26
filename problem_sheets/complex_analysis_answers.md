Sure, here are the solutions to the five practice questions on complex analysis:

1. The complex conjugate of a complex number $z = a + bi$ is given by $\overline{z} = a - bi$. To prove that the product $z\overline{z}$ is real, we have:
$$
z\overline{z} = (a + bi)(a - bi) = a^2 + b^2 \in \mathbb{R}.
$$
2. We can write $-1 + i$ in polar form as $r e^{i\theta}$ where $r = \sqrt{2}$ and $\theta = -\frac{3\pi}{4}$. Then, taking the square root gives us:
$$
\sqrt{-1+i} = \sqrt{re^{i\theta}} = \sqrt{r} e^{i\frac{\theta}{2}} = \sqrt{\sqrt{2}} e^{-i\frac{3\pi}{8}}.
$$
The two roots are plotted in the complex plane as two points on the unit circle with an angle of $\frac{3\pi}{8}$ and $\frac{11\pi}{8}$ radians, respectively.
3. We can factor the denominator of $f(z)$ as $z^3 + 1 = (z + 1)(z^2 - z + 1)$. Since $z = -e^{\frac{i\pi}{3}}$ is a simple pole of the function, the residue is given by:
$$
\mathrm{Res}(f,z) = \lim_{z \to -e^{\frac{i\pi}{3}}} (z + e^{\frac{i\pi}{3}}) f(z) = \frac{1}{3} e^{\frac{2\pi i}{3}}.
$$
4. Cauchy's integral theorem states that if $f(z)$ is analytic in a simply connected region $R$ and $C$ is a closed contour in $R$, then $\oint_C f(z) dz = 0$. The proof of the theorem relies on the Cauchy integral formula, which expresses the value of an analytic function at a point inside a closed contour in terms of an integral over the contour.
5. The condition $|\mathrm{Im}(f(z))| \leq 5$ implies that the image of $f(z)$ lies within a strip of width 10 units centered at the real axis. Since $f(z)$ is entire, it must be bounded, and hence by Liouville's theorem, it must be constant.