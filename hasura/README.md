# Hasura GraphQL server

## 1.0 Running Locally

### 1.1 Requirements

- Install [Docker](https://docs.docker.com/get-docker/)
- Install [hasura CLI](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)

### 1.2 Start Docker and make sure you have a clean docker environment (the script may error if there are no volumes present)

```
docker rm -vf $(docker ps -aq)
docker volume rm $(docker volume ls -q)
```

or do,

```
bash clean_docker.sh
```

### 1.3 Docker compose

From the same directory as this readme:

```
docker-compose up -d
```

### 1.4 Apply migrations & metadata

From the same directory as this readme:

```
hasura migrate apply --admin-secret secret
hasura metadata apply --admin-secret secret
```

### 1.5 Run the console

From the same directory as this readme:

```
hasura console --admin-secret secret
```

Then visit [http://localhost:9695/](http://localhost:9695/). Changes made to the schema here will affect your **local** database and create migrations and metadata in the their respective directories.

## 2.0 Commit your changes

Changes in `migrations` and `metadata` directories **must** be checked into source control.

## 3.0 Accessing shared hosted hasura instance console (NOT RECOMMENDED, USE ONLY TO VIEW DATA):

To access shared hasura instance do,

```
hasura console --endpoint <hasura-endpoint> --admin-secret <hasura-admin-secret>
```
