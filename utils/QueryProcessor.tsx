export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "My Andrew ID is jdabreo"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "My name is jd"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  
  const minMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minMatch) {
    const x: number = parseInt(minMatch[1]);
    const y: number = parseInt(minMatch[2]);
    return (x-y).toString();
  }

  const multiply = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiply) {
    const x: number = parseInt(multiply[1]);
    const y: number = parseInt(multiply[2]);
    return (x*y).toString();
  }
  
  function isPrime(num: number): boolean {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime numbers

    // Check divisibility by 2 and 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
  }
  const largest = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/)
  if (largest){
    const x: number = parseInt(largest[1]);
    const y: number = parseInt(largest[2]);
    const z: number = parseInt(largest[3]);
    const final = Math.max(x, y, z);
    return(final).toString();
  }
  const prime = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/)
  if (prime){
    const x: number = parseInt(prime[1]);
    const y: number = parseInt(prime[2]);
    const z: number = parseInt(prime[3]);
    const p: number = parseInt(prime[4]);
    const t: number = parseInt(prime[5]);
    if(isPrime(x)){
      return(x).toString();
    }
    if(isPrime(y)){
      return(y).toString();
    }
    if(isPrime(z)){
      return(z).toString();
    }
    if(isPrime(p)){
      return(p).toString();
    }
    if(isPrime(t)){
      return(t).toString();
    }

  }
  return "";
}




