import { Tooltip } from "react-tooltip";

function Definition({ children, text }) {
	return (
		<>
			<a data-tooltip-id={children} data-tooltip-content={text}>
				{children}
			</a>{" "}
			<Tooltip
				id={children}
				offset={3}
				style={{
					maxWidth: "250px",
					opacity: 0.95,
					backgroundColor: "#11111b",
					textAlign: "left"
				}}
				overridePosition={({ left, top }, _e, _t, node) => {
					return {
						top,
						left: typeof node === "string" ? left : Math.max(left, 0)
					};
				}}
			/>
		</>
	);
}

export default Definition;
