
export const ColorSwatch = ({ color, colorLabel, label }) => (
	<div className="colorswatch" style={{backgroundColor: color }}>
		<div className="content">
			<div className="label">{ label }</div>
			<div className="color">{colorLabel}</div>
		</div>
	</div>
);
