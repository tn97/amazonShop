console.log("App.js is running and this should display on the browser's console window");

// JSX - JavaScript XML

var template = <p>This is JSX from app.js</p>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);