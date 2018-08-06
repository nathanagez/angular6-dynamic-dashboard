# angular6-dynamic-dashboard 

![Angular Logo](https://avatars0.githubusercontent.com/u/139426?s=200&v=4) ![Clarity Logo](https://raw.githubusercontent.com/vmware/clarity/master/logo.png)

Dynamic dashboard prototype using angular-gridster2 and ngx-dynamic-template
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Start json-server
You need to install json server (Dashboards are generated and saved using a REST API)
run `npm install -g json-server`

run `json-server --watch ./API/db.json`

## Start Angular
Install dependencies first by running `npm i`
Run `ng serve -o` for a dev server. 
Navigate to `http://localhost:4200/`. The app will automatically redirect you to the first dashboard

## Demo
Keep in mind that this is a prototype of a dynamic dashboard saved in a serialized JSON. Actually it communicate with a local REST API using json-server.
This demo allow you to perform GET request for the moment, i'm implementing POST and PUT request to save dashboard state on the fly.
Although JSON is serialized, I can parse it to make an instance of the component that was on the dashboard before serialization.
![demo](demo.gif)
