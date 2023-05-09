import useLayoutStore from "@/store/useLayoutStore";
import "../styles/range.css";
import { RiAlignJustify, RiAlignLeft, RiAlignRight } from "react-icons/ri";

function Settings() {
	const { fontSize, fonts, setFont, setSize, setTheme, setAlign } = useLayoutStore(
		(state) => ({
			fontSize: state.fontSize,
			fonts: state.fonts,
			setFont: state.setFont,
			setSize: state.setSize,
			setTheme: state.setTheme,
			setAlign: state.setAlign
		})
	);

	return (
		<section className="config flex column">
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
					onClick={() => setTheme("#2e2047", "#12071a", "#ebcfca", "#f4dbd6")}
				>
					Sepia
				</button>
				<button
					onClick={() => setTheme("#203146", "#0b090d", "#f3f4f6", "#f9fafc")}
				>
					Light
				</button>
				<button
					onClick={() => setTheme("#203146", "#0b090d", "#CFD5FE", "#dbe0fa")}
				>
					Blue
				</button>
			</section>

			<h3>Text Align</h3>
			<section className="flex">
				<button onClick={() => setAlign("left")}>
					<RiAlignLeft title="left" size={24} />
				</button>
				<button onClick={() => setAlign("justify")}>
					<RiAlignJustify title="justify" size={24} />
				</button>
				<button onClick={() => setAlign("right")}>
					<RiAlignRight title="right" size={24} />
				</button>
			</section>
		</section>
	);
}

export default Settings;
