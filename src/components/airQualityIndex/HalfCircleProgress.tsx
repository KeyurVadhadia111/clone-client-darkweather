import React, { useEffect, useState } from "react";

interface HalfCircleProgressProps {
	value: number;
	max?: number;
	color?: string;
}

const HalfCircleProgress: React.FC<HalfCircleProgressProps> = ({ value, max = 300, color = "#A347B9" }) => {
	const radius = 45;
	const strokeWidth = 5;
	const circumference = Math.PI * radius;
	const percentage = Math.min(value / max, 1);
	const offset = circumference * (1 - percentage);

	const [dashOffset, setDashOffset] = useState(circumference); // Start empty

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDashOffset(offset); // Animate to target
		}, 50);
		return () => clearTimeout(timeout);
	}, [offset]);

	return (
		<div className="w-[60px] h-[30px] sm:w-[100px] sm:h-[50px] flex items-end justify-center relative -my-4 sm:-my-5">
			<svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 100 50">
				<path d="M5,50 A40,40 0 0,1 95,50" fill="transparent" stroke="#E5E5E5" strokeWidth={strokeWidth} />
				<path
					d="M5,50 A40,40 0 0,1 95,50"
					fill="transparent"
					stroke={color}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}
					strokeDashoffset={dashOffset}
					strokeLinecap="square"
					style={{
						transition: "stroke-dashoffset 1s ease-out",
					}}
				/>
			</svg>
			<div className="text-[10px] sm:text-lg font-normal leading-3 text-text dark:text-textDark z-10">
				{value}
			</div>
		</div>
	);
};

export default HalfCircleProgress;
