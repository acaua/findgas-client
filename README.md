# findgas-client

Client in **React** using **Create React App** and browser geolocation for the findgas API from here:

<https://github.com/acaua/findgas-server>

# Downloading and usage instructions

1.  Clone repository

```
git clone https://github.com/acaua/findgas-client.git
```

2.  cd into server folder

```
cd findgas-client
```

3.  Install dependencias

```
npm install
```

3.  Create `.env` file and set API server REACT_APP_API_SERVER enviroment variable

```
REACT_APP_API_SERVER=http://localhost:5000
```

    The default server url is http://localhost:5000

5.  Start development server

```
npm start
```

6.  (optional) Build app

```
npm run build
```

7. (optional) Deploy app to now <https://zeit.co/now>

   Remember to change REACT_APP_API_SERVER enviroment to a live findgas server (see <https://github.com/acaua/findgas-server>)

```
cd build
now
```

8.  (mandatory) Enjoy! 😎
