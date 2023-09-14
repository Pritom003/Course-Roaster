# Course Registration Project

## Overview
The Course Registration Project is a web application designed to help students register for courses online. This project simplifies the course selection process, tracks the selected courses, and ensures that students do not exceed their credit limits.

## Key Features
1. **Course Selection:** Users can browse and select from a list of available courses.
2. **Credit Tracking:** The application keeps track of the total credits for selected courses.
3. **Credit Limit Enforcement:** A maximum credit limit is enforced to ensure that students do not exceed their allowed course load.
4. 

## Getting Started
To get started with the Course Registration Project, follow these steps:
1. Clone the repository to your local machine.
2. Install any necessary dependencies.
3. Run the application locally or deploy it to your preferred hosting platform.

# State Management in the Course Registration Project

## Overview
The Course Registration Project utilizes state management techniques to keep track of essential information and user interactions within the application. State management is crucial for maintaining data consistency and providing a seamless user experience.

## State Management Tools
In this project, we primarily used React's built-in `useState` hook to manage component-level state. Here's how we used it:

### 1. Selected Courses
We used the `useState` hook to manage the state of selected courses. Each time a user selects or deselects a course, we update the `Select` state, which is an array containing the selected course objects.

### 2. Total Credit Count
To calculate and display the total credit count for selected courses, we maintained a state variable called `totlcount`. This variable is updated whenever a course is selected or deselected.

### 3. Remaining Time
The remaining time for selecting courses is another piece of state managed using the `useState` hook. We update this value as users add or remove courses.

