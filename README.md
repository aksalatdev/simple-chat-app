# Simple Chat App with Vue.js and Laravel

A real-time chat application built using **Vue.js** for the frontend and **Laravel** for the backend. The app uses **Pusher** for real-time message broadcasting, ensuring instant communication between users.

## Prerequisites

You will need the following installed on your system:

-   **PHP**
-   **Composer**
-   **Node.js**

### Installation Tools

For MacOS, you can use **Homebrew** to install the prerequisites. For Windows, follow the respective installation guides:

-   [PHP](https://www.php.net/manual/en/install.php)
-   [Composer](https://getcomposer.org/doc/00-intro.md#installation-windows)
-   [Node.js](https://nodejs.org/)

## Installation Steps

1. **Get Pusher API Keys**  
   Sign up and get your free API keys at [Pusher](https://pusher.com).

2. **Clone the Repository**  
   Clone this repo to your local machine:
    ```bash
    git clone https://github.com/yourusername/simple-chat-app.git
    cd simple-chat-app
    ```
3. **Install Dependencies**
    ```bash
    composer install
    npm install
    ```
4. **Set Up Database**
    ```bash
    touch database/db.sqlite
    ```
5. **Configure ENV**

    ```bash
    PUSHER_APP_ID=
    PUSHER_APP_KEY=
    PUSHER_APP_SECRET=
    PUSHER_APP_CLUSTER=

    DB_DATABASE=<Full path to the sqlite file>
    ```

6. **Initialize the Database**
    ```bash
    php artisan migrate
    ```
7. **Compile Asset & Run the Server**
    ```bash
    npm run dev
    php artisan serve
    ```
8. **Open the App**
   Open your browser and navigate to `http://127.0.0.1:8000/` to see the chat app in action.

## Features

-   Real-time messaging using Pusher
-   User authentication (optional)
-   Responsive design for a seamless user experience

## Contributions

Contributions are welcome! If you have suggestions or want to improve this project, feel free to fork the repository and submit a pull request.
