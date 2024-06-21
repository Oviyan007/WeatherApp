WeatherApp
==========

Welcome to WeatherApp! This application provides real-time weather updates for any location. It's built using Django for the backend and integrates with a weather API to fetch and display the latest weather data.

Features
--------

-   **Current Weather**: Get real-time weather updates for any city.
-   **Weather Details**: Display temperature, humidity, wind speed, and more.
-   **Search Functionality**: Easily search for the weather in different cities.
-   **Responsive Design**: Works on both desktop and mobile devices.

Screenshots
-----------
![Screenshot 2024-06-21 141302](https://github.com/Oviyan007/WeatherApp/assets/86316218/e391e06d-a121-4fd3-b6db-2c639a3c5967)


Installation
------------

1.  Clone the repository:

    bash

    Copy code

    `git clone https://github.com/Oviyan007/WeatherApp.git`

2.  Navigate to the project directory:

    bash

    Copy code

    `cd WeatherApp`

3.  Create a virtual environment and activate it:

    bash

    Copy code

    `python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate``

4.  Install the required dependencies:

    bash

    Copy code

    `pip install -r requirements.txt`

5.  Apply migrations:

    bash

    Copy code

    `python manage.py migrate`

6.  Run the development server:

    bash

    Copy code

    `python manage.py runserver`

7.  Open your web browser and go to `http://127.0.0.1:8000/`.

Usage
-----

-   Open the application in your web browser.
-   Enter the name of the city in the search bar and press enter.
-   View the current weather details for the entered city.

Technologies Used
-----------------

-   **Django**: For the backend framework.
-   **HTML**: For structuring the web page.
-   **CSS**: For styling the web page.
-   **JavaScript**: For handling the client-side logic.
-   **Weather API**: To fetch real-time weather data.

Contributing
------------

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.

Contact
-------

For any questions or suggestions, feel free to contact me at [oviyan.btech@gmail.com].
