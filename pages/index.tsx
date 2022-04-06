import { Header } from '../src/components/home/header/Header'
import { Card } from '../src/components/card/Card'

const projects = [
	{
		title: "Centralizing Species Data",
		description: 'Working with Project Canopy',
		thumbnail: "/images/project-canopy-thumb.png",
		image: "/images/project-canopy-card.png",
		link: ''
	},
	{
		title: 'Home is all around you',
		description: 'Redesigning RV Way',
		thumbnail: '/images/rv-way-thumb.png',
		image: '/images/rv-way-card.png',
		link: ''
	}
];

export default function Home() {
	return (
		<main>
			<Header />
			<div className="container mx-auto -mt-24">
				{projects.map((p, i) => (
					<Card title={p.title} description={p.description} image={{ url: p.image, alt: "hi" }} index={i} link={p.link} />
				))}
			</div>
		</main>
	)
}
