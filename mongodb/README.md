# MongoDB # 
This folder will hold all the relevant files for our mongo db instace. Mongo is a popular NoSQL database, and for this project we will be running mongo using docker. This is our first instance running mongodb for this project and the purpose of this directory as of right now is to get everyone familiar with both mongodb and docker.

Here we will walk through what docker is, why we are using it (at least for now) and how to use it. 

## Docker ## 
### What is docker anyway? ### 
Docker is a contanier-based platform that allows you to generate,control and deploy applications at scale. Docker contaniers are a lightweight/portable virtual operating systems which contain all the libraries, system tools and code you need to run an application like mongodb. 

The purpose of docker is to tackle the classical problem "It works on my machine, but it doesn't work on others". Docker allows us to easily run applications like mongodb,redis,node js or even python by using containers instead of manually downloading them onto our machine. No more worrying about if this application will run on my OS, simply build the container and you are off to the races! 

### Terminology #### 
Before we get to far, we better slow down and go over some terminology. While this isn't a comprehnsive list, these are the key terms to help us work with docker for the first time. 

#### 1. Images #### 
An image acts as the blueprint for creating docker containers. It is a file with specific instructions on how to create, start, and run the container. A useful analogy is to think of images as classes in OOP. Images are a class, and containers are an instance of that class. Just as classes can have parents from which they inherent certain methods so to can images. 

A base image is just like a superclass. It has no parent, and the entire image is built from scratch. Other images can reference base images, and add in their own additional libraries, directories or any other additional software. 

#### 2. Containers #### 
Containers are simply instances of images. When we run our containers we create a live instance of the application refrenced in our image. From here we can run commands within the container and perform all the normal operations we could do with the application just as if it was directly installed on our machine. 

Containers unlike images can have be in various states. Some of these states include running, paused, or exited.  

#### 3. Dockerfile #### 
A dockerfile is the text document which contains all the commands used to build docker images. It is important to note that a dockerfile isn't a file extension. For example if we created an image, we would save the instructions to build that image as simply `Dockerfile`. The reason why we do this is when we go to build our image, docker can easily identify the file that conatins all the instructions to build our image. 

#### 4. Docker Hub #### 
Just like how GitHub is a repository for code, Docker Hub is a repository for images. In Docker Hub we can find all the images we may want or need from large/popular applications like mongodb and Node js, to more custome images like juypter notebooks with pytorch. 

With Data Hub we can pull in these images directly to our local registry on our machine and have the latest version of the applications we want to run.

#### 5. Docker-Compose #### 
Docker Compose is an additional tool built on top of docker. It is designed to handle multiple conatiners being run at once. For this project, we may need a container for mongodb, another one for node js, and another container for vue js. Managing all these conatiners can ge to be complicated especially when they all need to be able to work with each other, so the folks at docker created the tool docker-compose.  

Docker Compose allows us to run multiple conatiners using simple commands like `docker-compose up` and stop/remove all conatiners via `docker-compose down`. We use docker compose with a file we create called simply `docker-compose.yml`. This file provides all the instructions of how we want each one of our conatiners to be run. You can see an example of this kind of file in this very directory. The docker-compose file that we have here only runs 1 container, namely mongodb.  

### Tutorial ###  
A great place to start learning how to use docker is through this tutorial which I have linked below: 

https://www.youtube.com/watch?v=fqMOX6JJhGo 

In the description section below the video is a link to some practice labs which allows you to run docker in a virtualized lab enviorment directly through you're browser, no need to worry about installing. You can follow along with the commands shown in the video by using this virutal lab enviroment which I highly recommend. 

### Installing Docker ### 
Installing docker is very starightforward. Docker was orginally designed to run on linux however they have also created an extremely easy way to download docker for windows/mac through docker desktop. Below are the links on how to easily install docker on windows/mac. Further down I will also have a link for a create blog post which shows how to easily install  docker and docker compose on Ubuntu.

Note: By installing Docker Desktop on Windows/Mac you also automatically install docker-compose!

#### Installing Docker Desktop for Windows #### 
Link: https://hub.docker.com/editions/community/docker-ce-desktop-windows 

#### Installing Docker Desktop for Mac #### 
Link: https://hub.docker.com/editions/community/docker-ce-desktop-mac  

#### Installing Docker & Docker-compose on Ubuntu #### 
Link: https://www.bmc.com/blogs/mongodb-docker-container/ 

Note: Follow the 2 sections installing docker and intsalling Docker Compose




