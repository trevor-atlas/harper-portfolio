import React from "react";
import { HoverTilt } from "../components/hover-tilt/HoverTilt";
import styles from "./about.module.scss";
import Image from "next/image";

export default function About() {
	return (
		<>
			<div className="container mx-auto ">
				<div className="flex flex-wrap items-center content-center my-16">
					<div className="w-full sm:w-2/6 sm:pr-6">
						<HoverTilt>
							<Image
								className={styles.image}
								src="/images/harper.jpeg"
								alt="Harper Atlas"
								width={500}
								height={500}
							/>
						</HoverTilt>
					</div>
					<div className="w-full sm:w-4/6">
						<h1 className={styles["about-header"]}>
							Hi! I&apos;m Harper{" "}
							<span className={styles["about-burst"]}>Atlas.</span>
						</h1>
						<div className={`${styles["about-description"]} text-lato `}>
							My goal is to improve the lives of <del>users</del>{" "}
							<span className={styles.squiggle}>people</span>, one experience at
							a time.{" "}
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles["about-main"]} container mx-auto`}>
				<h3 className="text-center">Curiosity hasn’t killed this cat</h3>
				<p>I have always been interested in the how and why of things.</p>
				<p>
					I’m no longer so impulsive, but my curiosity is still just as
					tenacious.
				</p>
				<p>
					I’ve channeled my lifelong need to “find out” into learning about why
					people do the things they do, how they think about things, and ways to
					improve their experiences. I took a circuitous route to get here, but
					my curiosity led me to the world of UX.
				</p>

				<h3 className="text-center">Everyday Life</h3>
				<p>
					In my spare time, you will find me hiking with friends, taking
					pictures of and drawing plants, doing yoga, and trying not to squeal
					over every dog I pass on the street.
				</p>

				<h4>
					<strong>Three random facts about me:</strong>
				</h4>
				<ul>
					<li>I hate heights but love climbing</li>
					<li>I am a former circus artist</li>
					<li>Elephants are my favorite animal</li>
				</ul>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-10">
					<HoverTilt>
						<figure>
							<Image
								className="rounded"
								src="/images/indy.jpeg"
								alt="Harper with a cute dog"
								width={300}
								height={300}
							/>
							<figcaption>When you run into your BFF on the street</figcaption>
						</figure>
					</HoverTilt>
					<HoverTilt>
						<figure>
							<Image
								className="rounded"
								src="/images/stilt-salad.jpeg"
								alt="Young Harper on stilts"
								width={300}
								height={300}
							/>
							<figcaption>Age 10, dressed as a salad on stilts</figcaption>
						</figure>
					</HoverTilt>
					<HoverTilt>
						<figure>
							<Image
								className="rounded"
								src="/images/aerial.jpeg"
								alt="Harper on an aerial hoop"
								width={300}
								height={300}
							/>
							<figcaption>Throwback to my circus days</figcaption>
						</figure>
					</HoverTilt>
				</div>
			</div>
			<div className={styles.cosmos}></div>
			<div className={styles.poppy}></div>
		</>
	);
}
