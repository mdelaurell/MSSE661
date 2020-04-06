RESTFUL API - 

Running MySQL 5.7

run the following docker command:

docker run -p 3306:3306 --name some-mysql -v /Users/michaeldelaurell/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7

The database will become be running and exposed on port 3306 and the volume will be exposed so the database will exist on startup.  

Must create a symbolic link or update the volume spec changing the /Users/michaeldelaurell/mysql to the path to the datafile on your system.  Will continue to make updates
to change the location of the datafiles.  This allows the docker container to startup without lose of data or having to commit each time.

once installed you can access the container:

docker exec -it some-mysql bash
