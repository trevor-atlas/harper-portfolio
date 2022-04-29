import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { Callout } from "../../components/callout/Callout";
import { Section } from "../../components/section/Section";
import { ColorSwatch } from "../../components/color-swatch/ColorSwatch";

const components = {
	Callout,
	Section,
	ColorSwatch,
};

const Portfolio = ({
	postData: { id, title, date, contentHtml, content, featuredImage, excerpt },
}: {
	postData: {
		id: string;
		title: string;
		date: string;
		contentHtml;
		content;
		featuredImage: string;
		excerpt: string;
	};
}) => {
	return (
		<main>
			<article className="case-study">
				<MDXRemote {...content} components={components} />
			</article>
		</main>
	);
};

export default Portfolio;

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
