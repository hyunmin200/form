import React, { useState } from "react";
import styled from "styled-components";
import { makeQuestion } from "../api/custom";

function MakeQuestion() {
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
			formData.append("file", img);
			console.log(formData.get("file"));
			makeQuestion(question, summary, formData);
		} catch (e) {}
	};

	return (
		<Main>
			<Title>질문 만들기</Title>
			<QuestionInput onSubmit={onSubmit} encType="multipart/form-data">
				<Label htmlFor="question">question</Label>
				<Input
					id="question"
					type="text"
					placeholder="질문 입력하세요"
					onChange={(e) => {
						setQuestion(e.target.value);
						console.log(question);
					}}
				/>
				<Label htmlFor="summary">summary</Label>
				<Textarea
					id="summary"
					type="text"
					placeholder="설명 입력하세요"
					onChange={(e) => {
						setSummary(e.target.value);
						console.log(summary);
					}}
				/>
				<Label htmlFor="imoji">imoji</Label>
				<Input type="file" id="imoji" accept="image/*" onChange={onChangeImg} />
				<Button>제출</Button>
			</QuestionInput>
		</Main>
	);
}

export default MakeQuestion;

const Main = styled.main`
	padding: 30px;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	background-color: #424242;
`;

const Title = styled.h1`
	font-size: 40px;
	font-weight: bold;
`;

const QuestionInput = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Label = styled.label`
	font-size: 24px;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	border: 2px solid white;
	font-size: 24px;
	background-color: transparent;
	color: white;
	resize: none;
	outline: none;
`;

const Textarea = styled.textarea`
	width: 100%;
	border: 2px solid white;
	padding: 10px;
	font-size: 24px;
	background-color: transparent;
	color: white;
	resize: none;
	outline: none;
`;

const Button = styled.button`
	margin-top: 20px;
	padding: 10px;
	border: 2px solid white;
	border-radius: 20px;
	background-color: #272727;
	color: white;
	font-size: 24px;
`;
