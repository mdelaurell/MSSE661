RESTFUL API - 

Running Postgres Database in docker.

run the following docker command:

docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=password -d postgres

The database will become be running and exposed on port 5432.


once installed you can access the container:

docker exec -it postgres bash

Once in the container you can type: psql -U postgres
once into the psql command \? for help

\dn - schemas
\q - quit


by exposing the port 5432 above, you can access the postgres instance if you have psql install or from your favoriate db tool - PGAdmin , DBeaver.

