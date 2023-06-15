# UssdAPI
This repository contains a simple USSD API built with Node.js, Express, and MongoDB, leveraging the Africa's Talking USSD API for registering users via USSD. The USSD (Unstructured Supplementary Service Data) protocol allows users to interact with a mobile service provider's systems through a series of menu-based prompts.

#Features:

USSD Registration: Users can register by dialing a specific USSD code, which triggers a series of menus for capturing their information, such as name, phone number, and email address.
Validation and Storage: User input is validated and securely stored in a MongoDB database.
Integration with Africa's Talking API: The API integrates with the Africa's Talking API to facilitate the USSD communication, handling user responses and menu navigation.
Error Handling: Proper error handling and validation are implemented to ensure a smooth user experience and data integrity.
API Documentation: Detailed documentation is provided to guide developers on how to use and extend the USSD API.

#Technologies Used:

Node.js: A server-side JavaScript runtime environment.
Express: A popular web application framework for Node.js, used for routing and handling HTTP requests and responses.
MongoDB: A NoSQL database for storing user information securely.
Africa's Talking API: An API service that enables communication through USSD channels.
ngrok: A tool used to expose local servers over the internet to test webhook endpoints during development.

#Installation and Usage:

Clone the repository to your local machine.
Install the required dependencies using npm or yarn.
Set up a MongoDB database and configure the connection details in the application.
Obtain API credentials from Africa's Talking and configure them in the application.
Start the server using the provided npm or yarn scripts.
Use ngrok to expose your local server to the internet and obtain a public URL.
Configure the Africa's Talking API to use the ngrok URL as the webhook endpoint.
Access the USSD API endpoints to register users via the provided USSD codes.

#Contributing:
Contributions to this repository are welcome. If you encounter any issues or have suggestions for improvements, please submit a pull request or open an issue on the repository.
