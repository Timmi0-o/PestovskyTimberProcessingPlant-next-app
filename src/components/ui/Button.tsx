interface ButtonProps {
	title: string
}

export const Button = ({ title }: ButtonProps) => {
	return (
		<button className='w-full h-[40px] bg-[#DD3037] rounded-[30px] text-[12px]'>
			{title}
		</button>
	)
}
