# in-between-primes
Computes prime numbers between two given numbers.
# Prime & Twin Prime Finder

## Overview
The **Prime & Twin Prime Finder** is a web app designed to identify all prime numbers between two user-defined values. Additionally, it finds and displays twin prime pairs and provides an estimated computation time based on the range. This tool is ideal for quick, efficient exploration of prime numbers and twin primes within a specific range.

## Features
- Input two numbers to define the range for prime number computation.
- Displays:
  - The total number of prime numbers in the range.
  - Twin prime pairs in the range.
  - Total number of twin prime pairs.
- Provides an estimated computation time based on the input range.

## How to Use the App

### 1. Input Values
- **Start Number**: Enter the lower bound (≥ 2) for the range.
- **End Number**: Enter the upper bound for the range. It must be greater than the Start Number.

### 2. Start Computation
- Click the **Compute** button to begin.
- The app will:
  - Calculate the prime numbers within the given range.
  - Identify twin prime pairs (pairs of primes that differ by 2).
  - Display results below the button.

### 3. View Results
- The results section shows:
  - **Estimated Computation Time**: Based on the input range, shown in seconds.
  - **Prime Numbers Found**: The count of prime numbers within the range.
  - **Twin Prime Pairs Found**: The count of twin prime pairs in the range.
  - **List of Twin Primes**: Displays twin prime pairs as `[prime1, prime2]`.

## Example
1. Enter **10** in the Start Number field and **50** in the End Number field.
2. Click **Compute**.
3. You will see:
   - Estimated computation time (e.g., 0.05 seconds).
   - Prime numbers found: 10 (for example).
   - Twin prime pairs found: 3 (for example).
   - List of twin prime pairs: `[11, 13], [17, 19], [41, 43]`.

## Running the App Locally
1. **Download the files**: Save `index.html`, `styles.css`, and `script.js` in the same folder.
2. **Open** `index.html` in a web browser.

## Hosting on GitHub Pages
1. **Create a GitHub Repository**.
2. **Upload files** (`index.html`, `styles.css`, `script.js`) to the repository.
3. **Enable GitHub Pages**:
   - Go to the repository’s **Settings**.
   - Scroll to **GitHub Pages** and select the branch with the files as the source.
4. **Access the Web App**: GitHub will provide a URL for the app.

## Technical Details
- **Prime Computation**: Uses a loop and basic primality check to find primes.
- **Twin Prime Detection**: Checks each pair of consecutive primes for a difference of 2.
- **Time Estimate**: Uses heuristics based on range size.

## Troubleshooting
- Ensure **Start Number** is ≥ 2 and **End Number** is greater than the **Start Number**.
- If the app is slow, try a smaller range.

## License
This app is open-source and available under the MIT License.
