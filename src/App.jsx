import styled from "styled-components";
import { useState } from "react";
import MakeQuestion from "./components/MakeQuestion";
import ViewQuestionList from "./components/ViewQuestionList";

function App() {
	const [question, setQuestion] = useState("");
	const [summary, setSummary] = useState("");
	const [img, setImg] = useState(null);

	const onChangeImg = (e) => {
		e.preventDefault();

		if (e.target.files) {
			setImg(e.target.files[0]);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append("imoji", img);
			console.log(formData.get("imoji"));
		} catch (e) {}
	};

	return (
		<>
			<MakeQuestion />
			{/* <ViewQuestionList /> */}
		</>
	);
}

export default App;
