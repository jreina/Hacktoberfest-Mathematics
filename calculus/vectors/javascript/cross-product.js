/**
 * Curried cross-product function.
 * Accepts the first 3-position array and returns a function which accepts the 
 * second 3-position array, which returns the cross product of the two. Note that
 * the order in which the arrays are passed in matters.
 * 
 */
const crossProduct = ([i1, j1, k2]) => ([i2, j2, k3]) => [
  j1 * k3 - k2 * j2,
  k2 * i2 - i1 * k3,
  i1 * j2 - j1 * i2
];
