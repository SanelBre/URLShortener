# URL shortening system

### What is a URL shortening system?

_It is a system which has the goal to reduce the size of long URLs. It is achieved by creating a reference to the original URL, so that when the short URL is reached, a redirection to the original URL will take place._

### What's the main value? Who needs such a system and why?

_Benefits of this system is of having more readable links which will reduce typos, size reduction masking original links._

### Describe The main mechanism of work and system components.

_It works in such a way that the user does provide a URL, here referred as the original link, which would then be acquired by the server and from there a reference URL would be created, shortened URL. Once a request for reaching the shortened URL is made, the server is going to pickup that request and with that URL a search for the original URL would be made, if successfull the client would then with the response be redirected to the original URL._

### What are the main challenges in implementing and running the system

_The main challenge would be in designing the system so that it works in a cluster. It would be required to make some kind of locking system in order to prevent the case where multiple servers would create the same shortened URL for different original URLs._

### Try to suggest some ideas for advanced features.

_Reach the resource with the shortened url without redirection._

## Project Description

The project tech stack:
- TypeScript
- React
- CSS
- Node.js
- Express
- Mongoose / MongooDB

## Running the project

To run the project it would be required that you have installed node and npm.

Additional to that it would be required to install deppendencies for the server, which is the root of the project, and deppendencies for the client, which is located under the client dir.

Set mongodb credentials through the env variable, in order for the app to connect to the databse.

Starting the project can be done by running: __npm run start:full__, this will start both client and the server.

## Inside the app

Once the app start, it will place the initial screen under the /home path, from where the user can enter a valid url (eg https://linkedin.com). Once the user does submit the url, if the request succeeds the server will response back with a hash that will be later used for accessing the original url. Acessing that original url is done by hitting the domain of the app with the path /api/{hash}.

The admin page is located under the /admin path, where we have all the listings of the provided urls, along with the visit counter.
