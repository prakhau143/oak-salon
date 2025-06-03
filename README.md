# Oak Salon Website

## ✨ Description

Welcome to the Oak Salon website project! This is a modern, responsive, and visually appealing front-end website designed for a luxury salon. It showcases the salon's services, specialists, gallery, and provides an easy way for users to get in touch or make appointments. The design focuses on a warm, elegant aesthetic to reflect the salon's brand.

## 🚀 Key Features

*   **Interactive Hero Slider:** Engaging full-width slider with navigation controls and call-to-action buttons.
*   **Services Showcase:** Clearly presents the salon's offerings.
*   **Meet Our Specialists:** Introduces the salon's team members.
*   **Image Gallery:** A filterable gallery to display salon work, ambiance, or products.
*   **Video Integration:** Embedded YouTube video with a custom GIF preview and countdown timer.
*   **Appointment Section:** Information and call-to-action for booking appointments, integrated with Google Maps.
*   **Newsletter Subscription:** An interactive form with animation for users to subscribe.
*   **Responsive Design:** Fully responsive layout ensuring a seamless experience across desktops, tablets, and mobile devices.
*   **Smooth Scrolling:** Elegant navigation to different sections of the page.
*   **Dynamic Content:** JavaScript-powered interactions for the slider, gallery filters, mobile menu, and video loading.

## 🛠️ Technologies Used

*   **HTML5:** For the structure and content of the website.
*   **CSS3:** For styling, layout, animations, and responsiveness (including Flexbox and Grid).
*   **JavaScript (ES6+):** For client-side interactivity, DOM manipulation, and dynamic features.
*   **Font Awesome:** For icons.
*   **Google Fonts:** For typography (Poppins).

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository (or download the files):**
    ```bash
    git clone <repository-url>
    cd oak-salon
    ```
    If you downloaded a ZIP file, extract it to your desired location.

2.  **Navigate to the project directory:**
    ```bash
    cd path/to/oak-salon
    ```

3.  **Run a local web server:**
    Since the website uses JavaScript for some functionalities and to avoid CORS issues with local file access, it's best to serve it through a local web server.

    *   **Using Python's HTTP Server (if Python is installed):**
        Open your terminal or command prompt in the project's root directory (`oak-salon`) and run:
        ```bash
        python -m http.server
        ```
        Or, if you have Python 2:
        ```bash
        python -m SimpleHTTPServer
        ```
        This will typically start a server on `http://localhost:8000`.

    *   **Using VS Code Live Server Extension:**
        If you are using Visual Studio Code, you can install the "Live Server" extension. Once installed, right-click on `index.html` in the VS Code explorer and select "Open with Live Server".

4.  **Open in browser:**
    Open your web browser and navigate to the address provided by your local server (e.g., `http://localhost:8000` or the address Live Server opens).

## 📁 Folder Structure

```
oak-salon/
├── css/
│   └── style.css         # Main stylesheet
├── images/
│   └── ...               # Placeholder for image assets (currently using Unsplash links)
├── js/
│   └── script.js         # Main JavaScript file
├── index.html            # Main HTML file for the website
└── README.md             # This file
```

## 👨‍💻 Author

*   **Prakhar Mittal**

## 🙏 Acknowledgements

*   Images sourced from [Unsplash](https://unsplash.com).
*   Icons provided by [Font Awesome](https://fontawesome.com).
*   Fonts from [Google Fonts](https://fonts.google.com).
