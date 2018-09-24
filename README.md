# Curtain Co example 

This is a basic page which communicates with the server through a RESTful api.
The page keeps track of one order at a time. When the page is refereshed, the page will be repopulated with the information from the last post to the server, unless new content has been added/edited then it will override the existing order.

1. Clone the repo somewhere on your machine
2. Make sure to run the server file by downloading the binary and running the command java -jar server.jar 
3. cd into the folder you cloned and run the command yarn start in a terminal window
4. visit localhost:3000

More can be done to improve the code such as splitting the code into more reusable components and using redux to manage the state. 
I have already created the folder structure to implement Redux for now. 


