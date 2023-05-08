"use client";
import { Tooltip } from "primereact/tooltip";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";

function Definition({ children, text }) {
	return (
		<>
			<Tooltip target=".tooltip" position="top" />
			<span data-pr-tooltip={text} className="tooltip">
				{children}
			</span>{" "}
		</>
	);
}

export default Definition;
