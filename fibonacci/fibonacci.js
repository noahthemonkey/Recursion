function fibs(n) {
    const result = [];
    let a = 0, b = 1;
    
    for(let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    
    return result;
  }
  

  const fibp = document.getElementById('fib')
  console.log(fibp)
const fibInput = document.getElementById('fibonacciInput')

  fibInput.addEventListener('input', function(e) {
    const n = e.target.value;
    const result = fibs(n);
    document.getElementById('fib').textContent = result.join(', ');
  });


  function fibsRec(n) {
    if (n <= 2) return Array(n).fill(1);
    let fibs = fibsRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    return fibs;
}


const fibRecInput = document.getElementById('fibonacciRec')

fibRecInput.addEventListener('input', function(e) {
    const n = e.target.value;
    const result = fibsRec(n);
    document.getElementById('fibRec').textContent = result.join(', ');
});