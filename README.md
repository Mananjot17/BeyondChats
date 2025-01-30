# Chatbot Integration Project

This project allows users to sign up, set up a chatbot for their website, and test the integration. The app uses Clerk for authentication (via Google and email) and provides a user-friendly flow for the setup and testing of the chatbot.

## Project Overview

The project consists of three main pages:

1. **User Registration Page**:
   - Users can register and sign in using either Google or email authentication, powered by [Clerk](https://www.clerk.dev/).
   - Upon successful sign-up, the user is redirected to the setup page.

2. **Setup Page**:
   - This page allows users to provide their website information, including:
     - Website URL
     - Website name
   - Once the form is submitted, metadata is fetched (using dummy data for simulation) from the provided website URL.
   - The user can then proceed to the integration page to test the chatbot.

3. **Integration Page**:
   - Here, users can test their chatbot integration by simulating a chatbot interaction using the provided URL.
   - The page displays integration success messages with confetti animation once the integration is completed successfully.

## Features

- **Clerk Authentication**: Users can sign up and log in via Google or email using Clerk.
- **Website Setup**: Collects and simulates fetching metadata from a user-provided website.
- **Chatbot Integration**: Provides an easy-to-integrate script for adding the chatbot to a website.
- **Test Chatbot**: Allows users to test the chatbot integration on their website with a simulated chatbot interface.
- **Confetti Animation**: Displays a confetti animation when the chatbot integration is successful.

## Setup Instructions

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
