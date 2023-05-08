import useLayoutStore from "@/store/useLayoutStore";
import "../styles/range.css";

function Settings() {
	const { fontSize, fonts, setFont, setSize, setTheme } = useLayoutStore((state) => ({
		fontSize: state.fontSize,
		fonts: state.fonts,
		setFont: state.setFont,
		setSize: state.setSize,
		setTheme: state.setTheme
	}));

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
