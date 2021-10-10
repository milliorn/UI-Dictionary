import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
	const [word, setWord] = useState("");
	const [meanings, setMeanings] = useState([]);
	const [category, setCategory] = useState("en");

		const dictionaryApi = async () => {
			try {
				const data = await axios.get(
					"https://api.dictionaryapi.dev/api/v2/entries/en/plane"
				);

				setMeanings(data.data);
			} catch (error) {
				console.log(error);
			}
		};

		console.log(meanings);

	useEffect(() => {
		dictionaryApi();
		// eslint-disable-next-line
	}, [word, category]);

		return (
			<div
				className="App"
				style={{
					height: "100vh",
					backgroundColor: "#282c34",
					color: "white",
				}}
			>
				<Container
					maxWidth="md"
					style={{
						display: "flex",
						flexDirection: "column",
						height: "100vh",
						justifyContent: "space-evenly",
					}}
				>
					<Header
						setWord={setWord}
						category={category}
						setCategory={setCategory}
						word={word}
						setMeanings={setMeanings}
					/>
				</Container>
			</div>
			);
}

export default App;
