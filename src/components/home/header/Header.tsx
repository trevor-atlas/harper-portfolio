import { animated, useSpring } from "react-spring";
import { useScrollPosition } from "../../../hooks/useScroll";

const trans = (x, y, s) => `perspective(300px) translate3D(0, ${y * 1.1}px, 0)`;

interface IHeader {
	title?: string;
	subtitle?: string;
	meta?: string;
}

export const Header = ({
	title = "Harper Atlas",
	subtitle = "UX Designer • Illustrator • Plant Nerd",
	meta = "Currently based in Northern Virginia"
}: IHeader) => {

	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 10, tension: 350, friction: 80 }
	}));

	useScrollPosition(({ prevPos, currPos }) => {
		set({ xys: [0, currPos.y, 0] })
	}, [], null, true, 100);

	return (
		<header className="primary-header primary-background ">
			<animated.div
				className="bg"
				style={{ transform: props.xys.to(trans) }}
			/>
			<section className="intro">
				<div className="container mx-auto">
					<div className="intro-text text-center fade-in-down">
						<h1>{title}</h1>
						<h3>{subtitle}</h3>
						<h4>{meta}</h4>
					</div>
				</div>
			</section>
		</header>
	)
}
