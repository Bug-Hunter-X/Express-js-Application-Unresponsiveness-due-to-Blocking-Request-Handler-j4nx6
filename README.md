# Express.js Application Unresponsiveness

This repository demonstrates a common issue in Express.js applications: unresponsiveness caused by long-running synchronous operations within request handlers.  Synchronous operations block the event loop, preventing the server from handling other requests.

## Bug Description
The `bug.js` file contains an Express.js application with a GET route that performs a computationally intensive, synchronous operation. This blocks the event loop, causing the application to hang and become unresponsive to subsequent requests.

## Solution
The `bugSolution.js` file demonstrates the solution: using asynchronous operations or offloading work to worker threads. This prevents blocking the event loop and maintains application responsiveness.

## How to Reproduce
1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `node bug.js`.  Make a request to `http://localhost:3000`. Observe that subsequent requests will not be handled until the first request completes.  This is likely to take a very long time.
4.  Now repeat the process with the solution using `node bugSolution.js`.