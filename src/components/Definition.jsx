import { Tooltip } from "primereact";

function Definition({ children, text }) {
	return (
		<>
			<Tooltip target=".tooltip" />
			<span data-pr-tooltip={text} className="tooltip">
				{children}
			</span>{" "}
		</>
	);
}

export default Definition;
