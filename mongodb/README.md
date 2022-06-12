# MongoDB # 
This folder will hold all the relevant files for our mongo db instance. Mongo is a popular NoSQL database, and for this project we will be running mongo using docker. This is our first instance running mongodb for this project and the purpose of this directory as of right now is to get everyone familiar with both mongodb and docker.

Here we will walk through what docker is, why we are using it (at least for now) and how to use it. After learning some basics we do a simple walkthrough of how to run mongo through the docker-compose file in this directory.

## Docker ## 
### What is docker anyway? ### 
Docker is a container-based platform that allows you to generate, control, and deploy applications at scale. Docker containers are a lightweight/portable virtual operating systems which contain all the libraries, system tools and code you need to run an application like mongodb. 

The purpose of docker is to tackle the classical problem "It works on my machine, but it doesn't work on others". Docker allows us to easily run applications like mongodb, redis, node js, or even python by using containers instead of manually downloading them onto our machine. No more worrying about if this application will run on my OS, simply build the container and you are off to the races! 

### Terminology #### 
Before we get to far, we better slow down and go over some terminology. While this isn't a comprehensive list, these are the key terms to help us work with docker for the first time. 

#### 1. Images #### 
An image acts as the blueprint for creating docker containers. It is a file with specific instructions on how to create, start, and run the container. A useful analogy is to think of images as classes in OOP. Images are a class, and containers are an instance of that class. Just as classes can have parents from which they inherent certain methods so to can images. 

A base image is just like a superclass. It has no parent, and the entire image is built from scratch. Other images can reference base images, and add in their own additional libraries, directories or any other additional software. 

#### 2. Containers #### 
Containers are simply instances of images. When we run our containers we create a live instance of the application referenced in our image. From here we can run commands within the container and perform all the normal operations we could do with the application just as if it was directly installed on our machine. 

Containers unlike images can have be in various states. Some of these states include running, up, paused, or exited.

#### 3. Dockerfile #### 
A dockerfile is the text document which contains all the commands used to build docker images. It is important to note that a dockerfile isn't a file extension. For example if we created an image, we would save the instructions to build that image as simply `Dockerfile`. The reason why we do this is when we go to build our image, docker can easily identify the file that contains all the instructions to build our image. 

#### 4. Docker Hub #### 
Just like how GitHub is a repository for code, Docker Hub is a repository for images. In Docker Hub we can find all the images we may want or need from large/popular applications like mongodb and Node js, to more custom images like juypter notebooks with pytorch. 

With Data Hub we can pull in these images directly to our local registry on our machine and have the latest version of the applications we want to run.

#### 5. Docker-Compose #### 
Docker Compose is an additional tool built on top of docker. It is designed to handle multiple containers being run at once. For this project, we may need a container for mongodb, another one for node js, and another container for vue js. Managing all these containers can get complicated, especially when they all need to be able to work with each other, so the folks at docker created the tool docker-compose.  

Docker Compose allows us to run multiple containers using simple commands like `docker-compose up` and stop/remove all containers via `docker-compose down`. We use docker compose with a file we create called simply `docker-compose.yml`. This file provides all the instructions of how we want each one of our containers to be run. You can see an example of this kind of file in this very directory. The docker-compose file that we have here only runs 1 container, namely mongodb.  

### Tutorial ###  
A great place to start learning how to use docker is through this tutorial which I have linked below: 

https://www.youtube.com/watch?v=fqMOX6JJhGo 

In the description section below the video is a link to some practice labs which allows you to run docker in a virtualized lab environment directly through your browser, no need to worry about installing. You can follow along with the commands shown in the video by using this virtual lab enviroment which I highly recommend. 

### Installing Docker ### 
Installing docker is very straightforward. Docker was originally designed to run on linux however they have also created an extremely easy way to download docker for windows/mac through docker desktop. Below are the links on how to easily install docker on windows/mac. Further down I will also have a link for a create blog post which shows how to easily install  docker and docker compose on Ubuntu.

Note: By installing Docker Desktop on Windows/Mac you also automatically install docker-compose!

#### Installing Docker Desktop for Windows #### 
Link: https://hub.docker.com/editions/community/docker-ce-desktop-windows 

#### Installing Docker Desktop for Mac #### 
Link: https://hub.docker.com/editions/community/docker-ce-desktop-mac  

#### Installing Docker & Docker-compose on Ubuntu #### 
Link: https://www.bmc.com/blogs/mongodb-docker-container/ 

Note: Follow the 2 sections installing docker and installing Docker Compose 

## Running Mongodb with Docker ## 
To run the mongodb with the docker-compose file we have in this directory simply type in the following command: 

`docker-compose up -d`   

If at any point you get a permission denied error simply place `sudo` in front of the command you are trying to run.

After that lets check that our container is up and running using the command `docker ps -a` 

When you run this command you should see the status of the mongodb container as up

From here we are going inside our container to use our mongodb instance that we have running. To do this use the following command 
`docker exec -it mongodb bash` 

This will create open up a bash script within our container. From here we will run mongo by typing `mongo` or `mongosh` 

Now the fun stuff... lets start doing some basic mongo commands. To see what databases currently exist we can simply use a very sql-like command `show databases` which should output a few databases like admin. 

We can create a database by simply running `use <your-database>`. This command will look to see if a database already exists, if it does we automatically go into that database, if not we create the database and then place ourselves within the database. For this simple walkthrough let's make a database for our application, `use rate_my_coop`. 

Once we have our database created let's now create a collection. A collection is similar to a table in relational databases. Instead of a table which contains rows and columns, we create a collection which will store JSON objects.  

Lets make the collection users: `db.createCollection("users")` 

Now we are going to insert a few JSON objects which represent individual users. We do this by typing 
`db.users.insertMany([{name:"Susan",major:"CSC"},{name:"John",major:"ECON"},{name:"Emily",major:"LAW"}])` 

You will notice something interesting when we insert our data, there appears to be a unique id being applied to each JSON object. Mongo automatically creates a unique identifier for each object which is not something offered in most relational databases.  

Now if we want to find all of the data that we just inserted we simply run `db.users.find().pretty()` which print all of our "users" in a nice format. 

From here you can play around with other mongo commands/queries. A handy site which provides a decent tutorial is provided in the link below: 

Link: https://www.tutorialspoint.com/mongodb/index.htm 

To stop running mongo simply exit the mongo database and the bash script. After that simply run `docker-compose down -v` and we have successfully stopped running our mongo container.



