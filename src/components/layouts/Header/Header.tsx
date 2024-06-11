'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useClickOutside } from 'react-click-outside-hook'
import './Header.scss'

export const Header = () => {
	const [ref, hasClickedOutside] = useClickOutside()
	const [burgerMove, setBurgerMove] = useState('')
	const [modalMove, setModalMove] = useState('ml-[-300px]')

	useEffect(() => {
		if (burgerMove !== '') {
			setModalMove('ml-[0px]')
		} else {
			setModalMove('ml-[-300px]')
		}
		if (hasClickedOutside) {
			setModalMove('ml-[-300px]')
			setBurgerMove('')
		}
	}, [burgerMove, hasClickedOutside])

	return (
		<div
			ref={ref}
			className={`fixed top-0 left-0 z-30 flex items-center justify-between w-full h-[40px] bg-[#111311] px-[10px]`}
		>
			<div
				onClick={() =>
					setBurgerMove(() => (burgerMove === 'open' ? '' : 'open'))
				}
				className={`burger-menu ${burgerMove}`}
			>
				<div className='bar bar1'></div>
				<div className='bar bar2'></div>
				<div className='bar bar3'></div>
			</div>

			<div className='relative w-[60px] h-[30px] ml-[104px] mr-[55px]'>
				<Image src={'/logo.svg'} fill alt='logo' />
			</div>
			<div className='flex flex-col items-end text-white text-[9px] font-bold'>
				<p>8 (812) 603-72-22</p>
				<p>8 (499) 380-77-33</p>
			</div>
			<div
				className={`flex flex-col gap-[15px] fixed top-[40px] left-0 w-[265px] h-[100vh] bg-[#111311] pt-[35px] z-30 ${modalMove} duration-300 ease-in-out px-[20px]`}
			>
				{modalLink.map((link, i) => (
					<div
						key={i}
						className='w-full h-[40px] border-[1px] border-[#28a745] text-white font-bold accentShadowMini'
					>
						<p className='text-[18px] text-center'>{link.title}</p>
					</div>
				))}
			</div>
		</div>
	)
}

const modalLink = [
	{ title: 'Главная', img: '' },
	{ title: 'Дома', img: '' },
	{ title: 'Бани', img: '' },
]
