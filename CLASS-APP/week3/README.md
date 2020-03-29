Module 3 - Webserver and Database

This weeks assignment will be running with node and database.

Node for running code this week concentrate on running node.



Docker DB images
docker run -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:latest
docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=password -d postgres
docker run --name some-mongo -d mongo:tag

