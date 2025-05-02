const Select = (props: any) => {
	return (
		<div className="">
			{props.label && (
				<label
					htmlFor="username"
					className="text-sm font-medium text-textSecondary dark:text-textDark mb-3 block">
					{props.label} {props.required && <span className="text-red-500">*</span>}
				</label>
			)}
			<div className="">
				<select
					name={props.name}
					className={`block px-3 py-3 sm:px-4 sm:py-[18px] w-full rounded-xl border border-textSecondary/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:border-border-dark dark:border-border-dark-dark placeholder: sm:text-base  dark:bg-transparent dark:text-white ${props.error ? "!border !border-red-500 focus-visible:!ring-red-500" : "focus-visible:ring-neutral-300"}`}
					{...(props.register &&
						props.register(props.name, {
							onChange: (e: any) => {
								props.trigger && props.trigger(props.name);
							},
						}))}>
					<option value={""}>Select {props.label}</option>
					{props.items &&
						props.items.map((item: any) => (
							<option value={item.value} key={item.value}>
								{item.text}
							</option>
						))}
				</select>

				{props.error && <div className="text-red-500 px-5 inline-block">{props.error}</div>}
			</div>
		</div>
	);
};

export default Select;
