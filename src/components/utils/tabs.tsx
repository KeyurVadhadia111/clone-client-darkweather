import React, { useState, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface TabsProps {
	defaultValue?: string;
	children: ReactNode;
}

interface TabsListProps {
	children: ReactNode;
	className?: string;
}

interface TabsTriggerProps {
	value: string;
	children: ReactNode;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface TabsContentProps {
	value: string;
	children: ReactNode;
	className?: string;
}

const TabsContext = React.createContext<{
	activeTab: string;
	setActiveTab: (val: string) => void;
}>({ activeTab: "", setActiveTab: () => { } });

export const Tabs = ({ defaultValue = "", children, className }: TabsProps & { className?: string }) => {
	const [activeTab, setActiveTab] = useState(defaultValue);

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
			<div className={cn(className)}>{children}</div>
		</TabsContext.Provider>
	);
};

export const TabsList = ({ children, className }: TabsListProps) => {
	return (
		<div
			className={cn(
				"inline-flex  items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
				className,
			)}>
			{children}
		</div>
	);
};

export const TabsTrigger = ({ value, children, className, onClick }: TabsTriggerProps) => {
	const { activeTab, setActiveTab } = React.useContext(TabsContext);
	const isActive = activeTab === value;

	return (
		<button
			onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				setActiveTab(value);
				onClick && onClick(event);
			}}
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-lg px-2 py-1.4 sm:px-6 sm:py-2.5 text-xs sm:text-sm transition-all",
				"ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				"disabled:pointer-events-none disabled:opacity-50 ",
				isActive && "bg-primary text-text dark:!text-text font-semibold",
				className,
			)}>
			{children}
		</button>
	);
};

export const TabsContent = ({ value, children, className }: TabsContentProps) => {
	const { activeTab } = React.useContext(TabsContext);

	if (activeTab !== value) return null;

	return (
		<div
			className={cn(
				"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				className,
			)}>
			{children}
		</div>
	);
};
