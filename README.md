<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/vallezw/Image-Uploader">
    <img src="docs/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Image Uploader</h3>

  <p align="center">
    An open source, self hosted image uploader
    <br />
    <a href="https://github.com/vallezw/Image-Uploader/blob/master/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://hub.docker.com/repository/docker/vallezw/image-uploader-client">Dockerhub Frontend</a>
    ·
    <a href="https://hub.docker.com/repository/docker/vallezw/image-uploader-client">Dockerhub Backend</a>
    ·
    <a href="https://github.com/vallezw/Image-Uploader/issues">Report Bug</a>
    ·
    <a href="https://github.com/vallezw/Image-Uploader/issues">Request Feature</a>
  </p>
</p>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#hosting-it-with-docker">Hosting it with Docker</a></li>
        <ul>
            <li>   
            <a href="#setting-it-up">Setting it up</a>
            </li>
            <li>   
            <a href="#run-the-docker-file">Run the docker file</a>
            </li>
            <li>   
            <a href="#changing-the-url">Changing the URL</a>
            </li>
        </ul>
        <li><a href="#hosting-with-node">Hosting with Node</a></li>
        <ul>
            <li>   
            <a href="#run-the-docker-file">Run the docker file</a>
            </li>
            <li>   
            <a href="#changing-the-url-1">Changing the URL</a>
            </li>
        </ul>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
![Example Video](docs/images/example-video.gif)
<!-- <img src="docs/images/screenshot.png" alt="Logo" width="6000"> -->

There are already a few image uploader out there in the internet, however, I didn't find any uploader which is fully open source, lightweight and made for self hosting. So I created one myself and hope you enjoy it.

You may also suggest changes by forking this repo and creating a [pull request](https://github.com/vallezw/Image-Uploader/compare) or opening an [issue](https://github.com/vallezw/Image-Uploader/issues/new/choose). Thanks to all the people have have contributed to expanding this project!

### Built With

Here a list of the major frameworks I used for this project.
* [React](https://reactjs.org/)
* [Express](https://expressjs.com/de/)
* [Material-UI](https://material-ui.com/)

<!-- GETTING STARTED -->
## Getting Started

There are two ways on how to host this project. You can either use [docker](https://www.docker.com/) or host it with [node](https://nodejs.org/en/). I would highly suggest hosting it with docker since it's more flexible.

### Hosting it with Docker
#### Setting it up
In order to host the project you will need to create a docker-compose file. These files are combining multiple docker images to interact with each other.

The file needs to be called `docker-compose.yml` paste the following code in the file.

Insert in `docker-compose.yml`:
```yml
version: "3.8"
services:
    frontend:
        image: vallezw/image-uploader-client
        ports:
            - "80:80"
        environment:
            - "API_URL=http://localhost:5000"
            - "CLIENT_URL=http://localhost"
        
    backend:
        image: vallezw/image-uploader-backend 
        ports:
            - "5000:5000"
        volumes:
            - .upload/:/usr/src/app/upload
```

#### Run the docker file
Once you finished setting up the file you can go ahead and run it with

1. Building
   ```sh
   docker-compose build
   ```
2. Hosting the project
   ```sh
   docker-compose up
   ```

#### Changing the URL
In case you want to host the project without Docker you can do that too.

```yml
...
environment:
    - "API_URL=http://your_api_url:your_port"
    - "CLIENT_URL=http://your_client_url:your_port"
```

After that you are good to go and host it on your custom domain
### Hosting with Node
#### Running the project
This is the option for those who don't want to host it with docker.
1. Go into the backend directory with a terminal/powershell
   ```sh
   cd backend/
   ```
2. Build and run it
   ```sh
   npm run build
   ```
#### Changing the URL
In case you want to change the URL you have to change the env variables.
1. Go into the frontend directory and open the `.env` file
2. Change the `API_URL` and the `CLIENT_URL` to your specific usecase 
   ```env
    API_URL=http://your_api_url:your_port
    CLIENT_URL=http://your_client_url:your_port
   ```
After that you are good to go and host it on your custom domain

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/vallezw/Image-Uploader/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a [Pull Request](https://github.com/vallezw/Image-Uploader/compare)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Valentin Zwerschke - [@vallezw](https://github.com/vallezw)

Project Link: [github.com/vallezw/Image-Uploader](https://github.com/vallezw/Image-Uploader)
