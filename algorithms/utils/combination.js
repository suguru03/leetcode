function factorial(n) {
  let f = n;
  if (n <= 0) {
    return 1;
  }
  while (--n) {
    f *= n;
  }
  return f;
}

function combination(n, r) {
  if (r <= 0) {
    return 1;
  }
  return factorial(n) / (factorial(r) * factorial(n - r));
}
