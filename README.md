A full Stack Dockerized Application with React running at clientside, Node.js for the backend, Postgres to store data in the Database and then finally Nginx which served two purposes;
1. Serves as a HTTP server which serve our builded React front-end code
2. As a router in front of our front-end and Node.js express server.

After that we deploy our multicontainer application to kubernetes using ingress Nginx controller as load balancer.
