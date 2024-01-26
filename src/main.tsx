import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(// We render our app inside the root element
    // We wrap our app in a BrowserRouter component
    // BrowserRouter is a component that wraps around the rest of our app and provides routing functionality
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
); 