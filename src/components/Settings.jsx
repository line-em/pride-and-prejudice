"use client";
import { useState } from "react";
import "../styles/range.css";

function Settings() {
	const [fontSize, setFontSize] = useState("1rem");
	function setFont(font) {
		document.body.classList.remove("sans");
		document.body.classList.remove("serif2");
		document.body.classList.remove("serif");
		document.body.classList.remove("mono");
		document.body.classList.remove("sans2");

		if (font === "rubik") {
			document.body.classList.add("sans");
		} else if (font === "lora") {
			document.body.classList.add("serif2");
		} else if (font === "montserrat") {
			document.body.classList.add("sans2");
		} else if (font === "inconsolata") {
			document.body.classList.add("mono");
		} else {
			document.body.classList.add("serif");
		}
	}

	function setSize(value) {
		setFontSize(value);
		const storyElement = document.querySelector(".story");
		if (storyElement) {
			storyElement.style.setProperty("--font-size", value);
		}
	}

	function setTheme(value) {
		if (value === "dark") {
			document.documentElement.style.setProperty("--text", "#f9fafc");
			document.documentElement.style.setProperty("--text-accent", "#f3f4f6");
			document.documentElement.style.setProperty("--background-alt", "#1e1e2e");
			document.documentElement.style.setProperty("--background", "#181825");
		} else if (value === "light") {
			document.documentElement.style.setProperty("--background", "#f9fafc");
			document.documentElement.style.setProperty("--background-alt", "#f3f4f6");
			document.documentElement.style.setProperty("--text", "#203146");
			document.documentElement.style.setProperty("--text-accent", "#0b090d");
		} else if (value === "green") {
			document.documentElement.style.setProperty("--background-alt", "#b4befe");
			document.documentElement.style.setProperty("--background", "#dbe0fa");
			document.documentElement.style.setProperty("--text", "#203146");
			document.documentElement.style.setProperty("--text-accent", "#0b090d");
		} else {
			document.documentElement.style.setProperty("--background-alt", "#f0c6c6");
			document.documentElement.style.setProperty("--background", "#f4dbd6");
			document.documentElement.style.setProperty("--text", "#2e2047");
			document.documentElement.style.setProperty("--text-accent", "#12071a");
		}
	}
	return (
		<details className="config flex column">
			<summary aria-haspopup="listbox" role="link">
				Style
			</summary>
			<h3>Font</h3>
			<article className="flex">
				<button onClick={() => setFont("rubik")} className="sans">
					Aa
				</button>
				<button onClick={() => setFont("lora")} className="serif2">
					Aa
				</button>
				<button onClick={() => setFont("montserrat")} className="sans2">
					Aa
				</button>
				<button onClick={() => setFont("literata")} className="serif">
					Aa
				</button>
				<button onClick={() => setFont("inconsolata")} className="mono">
					Aa
				</button>
			</article>

			<h3>Size</h3>
			<section className="flex">
				<input
					type="range"
					min="0.85"
					max="1.2"
					step="0.01"
					value={parseFloat(fontSize)}
					onChange={(e) => setSize(e.target.value + "rem")}
				/>
			</section>

			<h3>Color</h3>
			<section className="flex">
				<button onClick={() => setTheme("dark")}>Dark</button>
				<button onClick={() => setTheme("sepia")}>Sepia</button>
				<button onClick={() => setTheme("light")}>Light</button>
				<button onClick={() => setTheme("green")}>Blue</button>
			</section>
		</details>
	);
}

export default Settings;
