import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<GlobalStyle />
		<App />
	</>,
);
