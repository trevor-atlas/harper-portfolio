import React from "react";
import Image from "next/image";
import styles from "./card.module.scss";
import { HoverTilt } from "../hover-tilt/HoverTilt";

export const Card = ({ title, description, link, image }) => {
	return (
		<HoverTilt>
			<div className={styles.card}>
				<div className="flex flex-wrap">
					<div className={`${styles.info} w-full md:w-2/4`}>
						<h2>{title}</h2>
						<div className={`${styles["info-text"]} mb-6`}>{description}</div>
						<a href={link} className="button inline-block">
							Learn more
						</a>
					</div>
					<div className="w-full md:w-1/2 flex items-end content-center">
						<div className={styles.image}>
							<Image width={475} height={340} src={image.url} alt={image.alt} />
						</div>
					</div>
				</div>
			</div>
		</HoverTilt>
	);
};
