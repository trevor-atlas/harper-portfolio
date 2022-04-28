import React from "react";
import Image from "next/image";
import footerLinks from "../../data/footer_links.json";

const links = footerLinks.filter((entry) => entry && entry.name && entry.url);

export function Footer() {
	return (
		<footer className="footer text-center sm:text-left">
			<div className="flex hidden sm:block items-start container mx-auto">
				<h4>Say hello!</h4>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className="footer-arrow"
					src="/images/arrow 2.png"
					alt="squiggle arrow"
				/>
			</div>
			<div className="flex flex-wrap container mx-auto sm:justify-between">
				<div className="w-full sm:w-auto">
					<a className="text-playfair" href="">
						&copy;{new Date().getFullYear()} Harper Atlas
					</a>
				</div>
				<div className="w-full sm:w-auto sm:content-end items-center">
					{links.map((link, index) => (
						<a
							key={index}
							target="_blank"
							rel="noopener noreferrer"
							className="text-center m-0 inline-block pr-4"
							href={link.url}
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								className="icon inline-block"
								src={`/images/svg/${link.name}.svg`}
								alt={link.name}
							/>
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
