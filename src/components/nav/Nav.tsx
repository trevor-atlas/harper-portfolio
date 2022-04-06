import React from "react"
import Link from 'next/link'
import styles from './nav.module.scss'

export const Nav = () => (
		<nav className={styles['primary-nav']}>
			<div className="container mx-auto">
				<ul>
					{typeof window === 'object' && window.location.pathname !== "/" && <li className="float-left">
						<Link href="/">
							<a>Harper Atlas</a>
						</Link>
					</li>}
					<li className="text-right">
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li className="text-right"><a href="/harper-atlas-resume.pdf" target="_blank" rel="noopener">Resume</a></li>
				</ul>
			</div>
		</nav>
	)
