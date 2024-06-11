'use client'
import Image from 'next/image'
import { useState } from 'react'

interface DropMenuProps {
	dropLink: string[]
}

export const DropMenu = ({ dropLink }: DropMenuProps) => {
	const [isMore, setIsMore] = useState(false)
	const [checkWork, setCheckWork] = useState('Выберите вакансию')
	return (
		<div className=' text-white'>
			<div
				onClick={() => setIsMore(!isMore)}
				className='flex flex-col justify-between border-b-[3px] border-b-[#999999]'
			>
				<div className='flex justify-between items-center w-full min-h-[52px]'>
					<p>{checkWork}</p>
					<div
						className={`relative w-[13px] h-[10px] duration-300 ${
							isMore ? 'rotate-180' : 'rotate-0'
						}`}
					>
						<Image src={'/dropArrow.svg'} fill alt='dropArrow' />
					</div>
				</div>
				<div
					className={`flex flex-col gap-[5px] duration-300 ease-in-out  ${
						isMore ? 'h-[120px] mt-[5px]' : 'h-0 opacity-0 z-[-10]'
					}`}
				>
					{dropLink.map((link, i) => (
						<p
							onClick={() => setCheckWork(link)}
							className='text-[12px] bg-[#444444] py-[2px] rounded-[5px] px-[10px] active:opacity-75'
							key={i}
						>
							{link}
						</p>
					))}
				</div>
			</div>
		</div>
	)
}
