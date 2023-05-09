import { create } from "zustand";
import { rubik, literata, montserrat, mono, lora } from "@/app/layout";

const useLayoutStore = create((set) => ({
	fontSize: "1rem",
	fonts: [
		rubik.className,
		lora.className,
		montserrat.className,
		literata.className,
		mono.className
	],
	textColor: "#333",
	textAccentColor: "#4caf50",
	backgroundColorAlt: "#f4f4f4",
	backgroundColor: "#fff",

	setFont: (fontIndex) =>
		set((state) => {
			document.body.classList.remove(...state.fonts.map((f) => f));
			document.body.classList.add(fontIndex);
			return { fonts: state.fonts, fontSize: state.fontSize };
		}),

	setSize: (value) =>
		set((state) => {
			const storyElement = document.querySelector(".story");
			if (storyElement) {
				storyElement.style.setProperty("--font-size", value);
				return { fontSize: value, fonts: state.fonts };
			} else {
				return { fonts: state.fonts, fontSize: state.fontSize };
			}
		}),

	setTheme: (textColor, textAccentColor, backgroundColorAlt, backgroundColor) =>
		set((state) => {
			document.documentElement.style.setProperty("--text", textColor);
			document.documentElement.style.setProperty("--text-accent", textAccentColor);
			document.documentElement.style.setProperty(
				"--background-alt",
				backgroundColorAlt
			);
			document.documentElement.style.setProperty("--background", backgroundColor);
			return {
				textColor: textColor,
				textAccentColor: textAccentColor,
				backgroundColorAlt: backgroundColorAlt,
				backgroundColor: backgroundColor,
				fonts: state.fonts,
				fontSize: state.fontSize
			};
		})
}));

export default useLayoutStore;
