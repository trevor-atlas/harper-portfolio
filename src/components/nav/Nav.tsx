import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

export const Nav = () => {
	const [isHomepage, setIsHomepage] = useState(
		typeof window === "object" && window.location.pathname !== "/"
	);
	useEffect(() => {
		setIsHomepage(
			typeof window === "object" && window.location.pathname !== "/"
		);
	}, []);
	return (
		<nav className={styles["primary-nav"]}>
			<div className="container mx-auto">
				<ul>
					{isHomepage && (
						<li className="float-left">
							<Link href="/">
								<a>Harper Atlas</a>
							</Link>
						</li>
					)}
					<li className="text-right">
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li className="text-right">
						<a href="/harper-atlas-resume.pdf" target="_blank" rel="noopener">
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
