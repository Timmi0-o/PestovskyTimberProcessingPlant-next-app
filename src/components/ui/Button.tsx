interface ButtonProps {
	title: string
	bg?: string
}

export const Button = ({ title, bg }: ButtonProps) => {
	return (
		<button
			className={`w-full h-[40px] ${
				bg ? bg : 'bg-[#DD3037] '
			} rounded-[30px] text-[12px] font-bold active:opacity-70 duration-300`}
		>
			{title}
		</button>
	)
}
