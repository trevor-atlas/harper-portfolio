import { HoverTilt } from "../hover-tilt/HoverTilt";

export const ColorSwatch = ({ color, colorLabel, label }) => (
	<HoverTilt>
		<div className="colorswatch" style={{ backgroundColor: color }}>
			<div className="content">
				<div className="label">{label}</div>
				<div className="color">{colorLabel}</div>
			</div>
		</div>
	</HoverTilt>
);
