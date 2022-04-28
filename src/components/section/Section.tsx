interface ISection {
	title: string;
	icon: string;
	children: JSX.Element;
}

export const Section = ({ title, icon, children }: ISection) => (
	<div className="container mx-auto mb-32">
		<div>
			{icon && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					className="pulsing inline-block"
					style={{ margin: "0 .5rem 1rem" }}
					src={icon}
					alt={title}
				/>
			)}
			<h3 className="inline-block">{title}</h3>
		</div>
		{children}
	</div>
);
