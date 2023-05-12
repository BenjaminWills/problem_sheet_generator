import React from 'react';
import './Blog.css';

var Latex = require('react-latex');

const divergenceTheorem = `
        Let $\\mathbf{F} = (F_1, F_2, F_3)$ be a vector field defined on a solid region $V$ bounded by a closed surface $S$. The divergence of $\\mathbf{F}$ is given by $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial F_1}{\\partial x} + \\frac{\\partial F_2}{\\partial y} + \\frac{\\partial F_3}{\\partial z}$.

          Using the divergence theorem, we want to prove that
          \\[
          \\oiint\\limits_{\\partial V} \\mathbf{F} \\cdot \\mathbf{n} \\, dS = \\iiint\\limits_V \\nabla \\cdot \\mathbf{F} \\, dV.
          \\]

          Let's consider a small volume element $\\Delta V$ within the solid region $V$. The flux of $\\mathbf{F}$ through the differential area element $\\Delta S$ on the boundary surface of $\\Delta V$ is given by $\\mathbf{F} \\cdot \\mathbf{n} \\, dS$, where $\\mathbf{n}$ is the outward unit normal vector to the surface $\\Delta S$.

          By summing up the flux of $\\mathbf{F}$ through all the small surface elements of $\\partial V$, we obtain the surface integral on the left-hand side:
          \\[
          \\oiint\\limits_{\\partial V} \\mathbf{F} \\cdot \\mathbf{n} \\, dS = \\sum \\mathbf{F} \\cdot \\mathbf{n} \\, dS.
          \\]

          Now, let's divide the solid region $V$ into smaller subvolumes, and consider the flux of $\\mathbf{F}$ through the boundary surfaces of these subvolumes. As we decrease the size of the subvolumes, the sum of the fluxes approaches the triple integral on the right-hand side:
          \\[
          \\iiint\\limits_V \\nabla \\cdot \\mathbf{F} \\, dV = \\lim_{{\\Delta V \\to 0}} \\sum \\nabla \\cdot \\mathbf{F} \\, \\Delta V.
          \\]

          Applying the divergence theorem, we have:
          \\[
          \\oiint\\limits_{\\partial V} \\mathbf{F} \\cdot \\mathbf{n} \\, dS = \\iiint\\limits_V \\nabla \\cdot \\mathbf{F} \\, dV,
          \\]
          which proves the divergence theorem.`;
        

const t1 = `$\\text{Weight of the displaced fluid} = \\rho_f \\cdot V_f$`
const t2 = `$F_b = \\rho_f \\cdot V_f \\cdot g$`
const t3 = `$W_o = \\rho_o \\cdot V_o \\cdot g$`


function Blog() {
  return (
    <div>
        <br></br>
        <div className="blog-container">
        <div className="blog-post">
            <h1>The divergence theorem</h1>
            <p>Here is the divergence theorem: </p>
            <Latex>{divergenceTheorem}</Latex>
            <p className="author">Author: Ben Wills</p>
            <p className="date">Published on: 12th of May 2023</p>
        </div>

        <div className="blog-post">
            <h1>Mathematical Justification of Buoyancy</h1>
            <p>
                When an object is submerged in a fluid, it experiences an upward force called buoyancy. This force can be mathematically justified using Archimedes' principle.
            </p>
            <p>
                According to Archimedes' principle, the buoyant force acting on an object submerged in a fluid is equal to the weight of the fluid displaced by the object.
            </p>
            <p>
                Let's consider an object with volume $V_o$ and density $\\rho_o$ submerged in a fluid with density $\\rho_f$. The weight of the fluid displaced by the object is given by the product of the volume of the fluid $V_f$ and its density $\\rho_f$:
            </p>
            <Latex>{t1}</Latex>
            <p>
                Since the object is in equilibrium, the buoyant force $F_b$ acting on the object is equal to the weight of the displaced fluid:
            </p>
            <Latex>{t2}</Latex>
            <p>
                where $g$ is the acceleration due to gravity. On the other hand, the weight of the object $W_o$ is given by its volume and density:
            </p>
            <Latex>{t3}</Latex>
            <p>
                If the buoyant force is greater than the weight of the object ($F_b > W_o$), the object will experience a net upward force and rise to the surface. This is the principle of buoyancy.
            </p>
            <p className="author">Author: Jane Smith</p>
            <p className="date">Published on: May 5, 2023</p>
        </div>
        

        {/* Add more blog posts as needed */}
        </div>
    </div>
  );
}

export default Blog;
