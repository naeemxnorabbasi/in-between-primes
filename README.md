# Prime & Twin Prime Finder

## Overview
The **Prime & Twin Prime Finder** is a web app that allows users to find all prime numbers between two specified values. It also identifies twin prime pairs and provides an estimated computation time based on the range. This tool is helpful for exploring prime numbers and twin primes quickly and efficiently within a defined range.

## Features
- **Input two numbers** to define the range for prime number computation.
- Displays:
  - The total number of prime numbers in the range.
  - A list of all prime numbers in the range.
  - Twin prime pairs in the range.
  - The total number of twin prime pairs.
- Provides an estimated computation time based on the input range.
- **Save Results** button to download results as a text file.

## How to Use the App

### 1. Input Values
- **Start Number**: Enter the lower bound (≥ 2) for the range.
- **End Number**: Enter the upper bound for the range. It must be greater than the Start Number.

### 2. Start Computation
- Click the **Compute** button to start the computation.
- The app will:
  - Calculate the prime numbers within the specified range.
  - Identify twin prime pairs (pairs of primes that differ by 2).
  - Display the results in a professional format.

### 3. View Results
The results section displays the following information:
- **Estimated Computation Time**: Shows an approximate time for the computation to complete based on the range size.
- **Prime Numbers Found**: The count of prime numbers within the range.
- **List of Prime Numbers**: A list of all prime numbers found in the range.
- **Twin Prime Pairs Found**: The count of twin prime pairs in the range.
- **List of Twin Primes**: Lists all twin prime pairs in the range in the format `[prime1, prime2]`.

### 4. Save Results
- Click the **Save Results** button to download the results as a text file.
- The file, named `PrimeTwinPrimeResults.txt`, will contain all displayed information, including the list of prime numbers and twin prime pairs.

## Example Usage
1. Enter **10** in the Start Number field and **50** in the End Number field.
2. Click **Compute**.
3. You will see:
   - Estimated computation time (e.g., 0.01 seconds).
   - Prime numbers found: 11.
   - List of primes: 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.
   - Twin prime pairs found: 4.
   - Twin primes: [11, 13], [17, 19], [29, 31], [41, 43].
4. Click **Save Results** to download the results to a text file.

## Running the App Locally
1. **Download the files**: Ensure `index.html`, `styles.css`, and `script.js` are saved in the same folder on your computer.
2. **Open** `index.html` in a web browser to access the app.

## Hosting the App on GitHub Pages

### Step-by-Step Instructions
1. **Create a GitHub Repository**: Go to [GitHub](https://github.com/) and create a new repository. Name it descriptively (e.g., `prime-twin-prime-finder`).
2. **Upload Files**: Upload `index.html`, `styles.css`, `script.js`, and optionally `USER_GUIDE.md` to the repository.
3. **Enable GitHub Pages**:
   - Go to the repository’s **Settings** tab.
   - Scroll down to **GitHub Pages** and set the source to **main branch**.
4. **Access the Hosted App**: GitHub will provide a URL (e.g., `https://your-username.github.io/repo-name/`) where you can view and access your app.

## Troubleshooting
- **Input Validation**: Ensure the **Start Number** is ≥ 2 and the **End Number** is greater than the **Start Number**.
- **Hosting Issues**: If the app doesn’t load correctly on GitHub Pages, double-check your files and ensure you followed the hosting steps correctly.
- **Updates Not Showing**: Clear your browser cache or refresh the GitHub Pages link if updates don’t appear.

## License
This app is open-source and available under the MIT License.
