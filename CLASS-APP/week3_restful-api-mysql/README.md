RESTFUL API - 

Running MySQL 5.7

run the following docker command:

docker run -p 3306:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7

The database will become be running and exposed on port 3306

Must create the DB - CREATE DATABASE mikeDB;


once installed you can access the container:

docker exec -it mysql bash
