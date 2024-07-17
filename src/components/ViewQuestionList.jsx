import React from "react";
import styled from "styled-components";

function ViewQuestionList() {
	return (
		<Main>
			<Title>질문 리스트</Title>
			<ListDiv>
				<ListElement></ListElement>
			</ListDiv>
		</Main>
	);
}

export default ViewQuestionList;

const Main = styled.main`
	height: 90vh;
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

const ListDiv = styled.div``;

const ListElement = styled.div`
	width: 500px;
	height: 100px;
	background-color: #343434;
`;
