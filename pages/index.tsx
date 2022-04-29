import { Header } from "../components/home/header/Header";
import { Card } from "../components/card/Card";
import projectsData from "../data/home_page_projects.json";

const projects = projectsData.filter(
	(project) =>
		project &&
		project.link &&
		project.image &&
		project.title &&
		project.description &&
		project.thumbnail
);

export default function Home() {
	return (
		<main>
			<Header />
			<div className="container mx-auto -mt-24">
				{projects.map(({ title, description, image, link }) => (
					<Card
						key={link}
						title={title}
						description={description}
						image={{ url: image, alt: title }}
						link={link}
					/>
				))}
			</div>
		</main>
	);
}
