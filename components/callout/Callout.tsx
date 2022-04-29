export const Callout = ({ caption, children }) => {
	return (
		<div className="callout mb-20">
			<div className={`pt-16 ${caption ? "pb-10" : "pb-16"}`}>
				<div className="container mx-auto">{children}</div>
			</div>
			{caption && (
				<div className="p-4 mt-6 text-center caption">*{caption}</div>
			)}
		</div>
	);
};
