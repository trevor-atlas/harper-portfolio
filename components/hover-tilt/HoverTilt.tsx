import { useRef } from "react";
import { animated, useSpring } from "react-spring";

function clamp(value: number, min: number, max: number) {
	return Math.max(min, Math.min(value, max));
}

const calc = (set, ref) => (e) => {
	const { clientX, clientY } = e;
	const rect = ref.current.getBoundingClientRect();
	const x = clientX - rect.left; // x position within the element.
	const y = clientY - rect.top; //y position within the element.
	const width = ref.current.offsetWidth;
	const height = ref.current.offsetHeight;
	const centerX = width / 2;
	const centerY = height / 2;
	const yy = centerY - y;
	const xx = centerX - x;
	set({ xys: [-clamp(yy * 0.05, -5, 5), clamp(xx * 0.05, -5, 5), 1.1] });
};
const trans = (x: number, y: number, s: number): string =>
	`perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export function HoverTilt({ children }) {
	const ref = useRef();
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 80 },
	}));

	return (
		<animated.div
			ref={ref}
			onMouseMove={calc(set, ref)}
			onMouseLeave={() => set({ xys: [0, 0, 1] })}
			style={{ transform: props.xys.to(trans) }}
		>
			{children}
		</animated.div>
	);
}
