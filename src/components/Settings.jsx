"use client";
import { useState } from "react";
import "../styles/range.css";
import { rubik, literata, montserrat, mono, lora } from "@/app/layout";

function Settings() {
	const [fontSize, setFontSize] = useState("1rem");

	const fonts = [
		rubik.className,
		lora.className,
		montserrat.className,
		literata.className,
		mono.className
	];

	function setFont(fontIndex) {
		document.body.classList.remove(...fonts.map((f) => f));
		document.body.classList.add(fontIndex);
	}

	function setSize(value) {
		setFontSize(value);
		const storyElement = document.querySelector(".story");
		if (storyElement) {
			storyElement.style.setProperty("--font-size", value);
		}
	}

	function setTheme(textColor, textAccentColor, backgroundColorAlt, backgroundColor) {
		document.documentElement.style.setProperty("--text", textColor);
		document.documentElement.style.setProperty("--text-accent", textAccentColor);
		document.documentElement.style.setProperty(
			"--background-alt",
			backgroundColorAlt
		);
		document.documentElement.style.setProperty("--background", backgroundColor);
	}

	return (
		<details className="config flex column">
			<summary aria-haspopup="listbox" role="link">
				Style
			</summary>
			<h3>Font</h3>
			<article className="flex">
				{fonts.map((font, i) => (
					<button
						key={i}
						onClick={() => setFont(font)}
						className={font}
						data-font
					>
						Aa
					</button>
				))}
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
				<button
					onClick={() => setTheme("#f9fafc", "#f3f4f6", "#1e1e2e", "#181825")}
				>
					Dark
				</button>
				<button
					onClick={() => setTheme("#2e2047", "#12071a", "#f0c6c6", "#f4dbd6")}
				>
					Sepia
				</button>
				<button
					onClick={() => setTheme("#203146", "#0b090d", "#f3f4f6", "#f9fafc")}
				>
					Light
				</button>
				<button
					onClick={() => setTheme("#203146", "#0b090d", "#b4befe", "#dbe0fa")}
				>
					Blue
				</button>
			</section>
		</details>
	);
}

export default Settings;
