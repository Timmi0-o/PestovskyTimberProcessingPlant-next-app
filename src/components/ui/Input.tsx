interface InputProps {
	placeholder: string
	state: string
	setState: (value: string) => void
}

export const Input = ({ placeholder, state, setState }: InputProps) => {
	return (
		<div className='flex items-center w-full h-[52px] border-b-[4px] border-b-[#999999] text-[18px] font-normal leading-[22px] text-white'>
			<input
				className='w-full bg-transparent outline-none pl-[10px]'
				type='text'
				placeholder={placeholder}
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		</div>
	)
}
