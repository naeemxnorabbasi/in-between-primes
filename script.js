function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function computePrimes() {
    const startNumber = parseInt(document.getElementById("startNumber").value);
    const endNumber = parseInt(document.getElementById("endNumber").value);

    if (isNaN(startNumber) || isNaN(endNumber) || startNumber < 2 || endNumber < startNumber) {
        alert("Please enter valid numbers with start number ≥ 2 and end number greater than start.");
        return;
    }

    const primes = [];
    const twinPrimes = [];
    const startTime = performance.now();

    // Find primes in range
    for (let i = startNumber; i <= endNumber; i++) {
        if (isPrime(i)) primes.push(i);
    }

    // Find twin primes
    for (let i = 1; i < primes.length; i++) {
        if (primes[i] - primes[i - 1] === 2) {
            twinPrimes.push([primes[i - 1], primes[i]]);
        }
    }

    const endTime = performance.now();
    const elapsedTime = (endTime - startTime) / 1000; // Convert to seconds

    // Estimate time based on range size
    const estimatedTime = Math.max(0.01, (endNumber - startNumber) / 10000).toFixed(2);

    // Display results
    document.getElementById("timeEstimate").innerText = `Estimated computation time: ${estimatedTime} seconds`;
    document.getElementById("primeCount").innerText = `Prime numbers found: ${primes.length}`;
    document.getElementById("primeList").innerText = `Primes: ${primes.join(", ")}`;
    document.getElementById("twinPrimeCount").innerText = `Twin prime pairs found: ${twinPrimes.length}`;
    document.getElementById("twinPrimeList").innerText = `Twin primes: ${twinPrimes.map(pair => `[${pair[0]}, ${pair[1]}]`).join(", ")}`;
}

// Function to save results to a text file
function saveResults() {
    const timeEstimate = document.getElementById("timeEstimate").innerText;
    const primeCount = document.getElementById("primeCount").innerText;
    const primeList = document.getElementById("primeList").innerText;
    const twinPrimeCount = document.getElementById("twinPrimeCount").innerText;
    const twinPrimeList = document.getElementById("twinPrimeList").innerText;

    const content = `${timeEstimate}\n\n${primeCount}\n${primeList}\n\n${twinPrimeCount}\n${twinPrimeList}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "PrimeTwinPrimeResults.txt";
    link.click();

    URL.revokeObjectURL(url);
}
