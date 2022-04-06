import React from 'react';
import Image from 'next/image'
import { useSpring, animated } from 'react-spring';
import styles from './card.module.scss'
import { HoverTilt } from '../hover-tilt/HoverTilt';

const calc = (set) => ({clientX, clientY}) => set({ xys: [((clientY - window.innerHeight) * .005), -(clientX - window.innerWidth / 2) *.0025, 1.02]});
const trans = (x, y, s) => `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const Card = ({ index, title, description, link, image }) => {

	return (
		<HoverTilt>
	<div
		key={index}
		className={styles.card}
	>
		<div className="flex flex-wrap">
			<div className={`${styles.info} w-full md:w-2/4`}>
				<h2>{title}</h2>
				<div className={`${styles['info-text']} mb-6`}>{description}</div>
				<a href={link} className="button inline-block">Learn more</a>
			</div>
			<div className="w-full md:w-1/2 flex items-end content-center">
				<div className={styles.image}>
					<Image width={475} height={340} src={image.url} alt={image.alt} />
				</div>
			</div>
		</div>
	</div>
</HoverTilt>
	)
}
