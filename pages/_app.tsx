import React from "react";
import { Nav } from "../components/nav/Nav";
import { Footer } from "../components/Footer";
import "../styles/main.scss";
import Head from "next/head";
import data from "../data/intro.json";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<meta name="description" content={data.subtitle} />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16x16.png"
				/>
				<link rel="manifest" href="/images/site.webmanifest" />
			</Head>
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
