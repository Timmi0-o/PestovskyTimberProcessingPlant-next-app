import Image from 'next/image'

export const Header = () => {
	return (
		<div className='flex items-center justify-between w-full h-[40px] bg-[#111311] px-[10px]'>
			<div className='flex justify-center items-center size-[36px]'>
				<div className='flex flex-col justify-between items-center w-[20px] h-[13px]'>
					<div className='w-[20px] h-[2px] bg-white rounded-[4px]'></div>
					<div className='w-[20px] h-[2px] bg-white rounded-[4px]'></div>
					<div className='w-[20px] h-[2px] bg-white rounded-[4px]'></div>
				</div>
			</div>
			<div className='relative w-[50px] h-[30px] ml-[104px] mr-[55px]'>
				<Image src={'/logo.svg'} fill alt='logo' />
			</div>
			<div className='flex flex-col items-end text-white text-[9px] font-bold'>
				<p>8 (812) 603-72-22</p>
				<p>8 (499) 380-77-33</p>
			</div>
		</div>
	)
}
