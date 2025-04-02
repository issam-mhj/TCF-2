<div align="center">
<h3 align="center">Ultimate French Language Quiz Application</h3>

  <p align="center">
    An interactive web app to test and improve your French language skills.
    <br />
     <a href="https://issam-mhj.github.io/tcf-2/">issam-mhj.github.io/tcf-2/</a>
  </p>
</div>

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#admin-dashboard">Admin Dashboard</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

The **Ultimate French Language Quiz Application** is an interactive web application designed to help users test their proficiency in the French language. It offers a series of multiple-choice questions covering vocabulary, grammar, and comprehension, aligned with the TCF exam levels (A1 to C2). The application provides immediate feedback, tracks progress, and displays the user's estimated proficiency level upon completion of a quiz.  Administrators have access to a dashboard for managing questions, viewing user scores, generating reports, and analyzing general statistics.

### Key Features

- **Interactive Quizzes:** Engaging multiple-choice questions to test French language skills.
- **TCF Exam Alignment:** Content tailored for TCF exam preparation, covering levels A1 to C2.
- **Immediate Feedback:** Instant feedback on answer correctness to reinforce learning.
- **Progress Tracking:** Visual indicators to track the user's progress through the quiz.
- **Proficiency Level Assessment:** Estimated French proficiency level displayed at the end of each quiz.
- **Admin Dashboard:** A dedicated admin interface for managing questions, users, and generating reports.
- **User Authentication:** Sign-up and login functionality to track individual progress.
- **Responsive Design:** User interface adapts to different screen sizes for optimal viewing on various devices.

## Architecture

The application is structured with a client-side frontend built using HTML, CSS, and JavaScript. It uses vanilla JavaScript for core functionality, including question shuffling, answer tracking, and score updates.  The application stores user data, including scores and progress, in the browser's local storage.  The admin dashboard provides interfaces for question management, user score analysis, and report generation.

**Technologies Used:**

*   **HTML5:** For structuring the content of the application.
*   **CSS3:** For styling the user interface and ensuring responsiveness across devices, using Tailwind CSS in admin panel.
*   **JavaScript (Vanilla JS):** For handling the core functionality of the quiz.
*   **jsPDF:** For generating PDF reports in the admin dashboard.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- Git (optional, for cloning the repository).

### Installation

1.  Clone the repository from GitHub:

    ```sh
    git clone https://github.com/issam-mhj/tcf-2.git
    ```
2.  Navigate to the project directory:

    ```sh
    cd tcf-2
    ```
3.  Open `index.html` in your browser.

## Usage

1.  **Sign Up/Login:** Create a new account or log in with an existing username on the landing page (`index.html`).
2.  **User Dashboard:** After logging in, you will be redirected to the user dashboard (`user.html`).
3.  **Select Level:** Choose a level (A1, A2, B1, B2, C1, C2) to start the quiz. Levels are unlocked sequentially based on your progress.
4.  **Select Category:** Choose a category (Grammaire, Vocabulaire, Compréhension) to start the quiz.
5.  **Take Quiz:** Answer the multiple-choice questions. A timer will run for each question.
6.  **View Results:** After completing the quiz, your score will be displayed. If you achieve a perfect score, the next level will be unlocked.

## Admin Dashboard

The admin dashboard (`admin.html`) provides the following functionalities:

*   **Login:** Access the dashboard using the username "admin" and password "password123" on the `loginadmin.html` page.
*   **Question Management:** Add, edit, and delete quiz questions.
*   **User Scores:** View and search user scores.
*   **General Statistics:** View success rates and attempts per level.
*   **Report Generation:** Generate PDF reports for individual users.

To access different sections of the admin dashboard, use the navigation buttons in the sidebar:

*   **Gestion des Questions:** Manage quiz questions.
*   **Tableau des Scores:** View user scores.
*   **Statistiques Générales:** View general statistics.
*   **Générer Rapports:** Generate PDF reports.
