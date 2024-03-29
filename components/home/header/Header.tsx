import { animated, useSpring } from "react-spring";
import { useScrollPosition } from "../../../hooks/useScroll";
import homePageHeaderData from "../../../data/intro.json";

const trans = (x, y) => `perspective(300px) translate3D(0, ${y * 1.1}px, 0)`;

interface IHeader {
	title?: string;
	subtitle?: string;
	meta?: string;
}

Header.defaultProps = homePageHeaderData;
export function Header({ title, subtitle, meta }: IHeader) {
	const [data, set] = useSpring(() => ({
		xys: [0, 0, 1],
	}));

	useScrollPosition(
		({ prevPos, currPos }) => {
			const y = currPos.y * 0.5;
			set({ xys: [0, y, 0] });
		},
		[],
		null,
		true,
		100
	);

	return (
		<header className="primary-header primary-background ">
			<animated.div className="bg" style={{ transform: data.xys.to(trans) }} />
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
	);
}
