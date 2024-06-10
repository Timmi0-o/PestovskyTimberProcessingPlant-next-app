import Image from 'next/image'
import { Button } from '../ui/Button'

export const Banner = () => {
	return (
		<div className='relative w-full h-[500px] overflow-hidden'>
			<Image
				className='object-cover object-[-300px] scale-[1.2]'
				src={'/banner.png'}
				fill
				alt='banner'
			/>
			<div className='absolute bottom-[45px] left-0 flex flex-col justify-end items-center font-bold size-full text-white text-center'>
				<div>
					<p className='text-[30px] mb-[15px]'>«Пестовский Лесокомбинат»</p>
					<p className='text-[18px] mb-[35px]'>Cтань частью нашей команды!</p>
				</div>
				<div className='w-[200px]'>
					<Button title='ОТПРАВИТЬ АНКЕТУ' />
				</div>
			</div>
		</div>
	)
}
