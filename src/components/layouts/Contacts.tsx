'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Section } from '../ui/Section'

export const Contacts = () => {
	const [isContacts, setIsContacts] = useState<number>(0)
	return (
		<>
			<Section paddingCustom='pb-[35px]' title='Контакты'>
				<div className='flex flex-col gap-[40px]'>
					<div className='flex gap-[15px]'>
						{city.map((city, i) => (
							<div key={i}>
								<div
									onClick={() => setIsContacts(i)}
									className={`flex items-center w-[150px] text-[12px] font-bold  text-center ${
										isContacts === i
											? 'bg-[#999999] text-[#212121]'
											: 'text-[#fff]'
									} rounded-[5px]  border-[3px]  border-[#999999] h-[30px] `}
								>
									<p className='text-center w-full'>{city}</p>
								</div>
							</div>
						))}
					</div>
					{contacts.map(
						(contact, i) =>
							isContacts === i && (
								<div
									key={i}
									className='flex flex-col gap-[16px] font-bold text-white'
								>
									<div className='flex gap-[10px]'>
										<div className='relative size-[32px]'>
											<Image src={'/phone.svg'} fill alt='phone' />
										</div>
										<p className='text-[12px] px-[12px] font-bold w-full'>
											{contact.phone}
										</p>
									</div>
									<div className='flex gap-[10px]'>
										<div className='relative size-[32px]'>
											<Image src={'/mail.svg'} fill alt='phone' />
										</div>
										<p className='text-[12px] px-[12px] font-bold'>
											{contact.mail}
										</p>
									</div>
									<div className='flex gap-[10px]'>
										<div className='relative size-[32px]'>
											<Image src={'/location.svg'} fill alt='phone' />
										</div>
										{contact.street}
									</div>
								</div>
							)
					)}
					<div className='flex gap-[30px] items-center mx-auto'>
						<div className='relative w-[50px] h-[35px] '>
							<Image src={'youTube.svg'} fill alt='youTube' />
						</div>
						<div className='relative size-[42px] '>
							<Image src={'vk.svg'} fill alt='vk' />
						</div>
						<div className='relative size-[42px] '>
							<Image src={'telegram.svg'} fill alt='telegram' />
						</div>
					</div>
				</div>
			</Section>
			<div className='relative w-full h-[223px]'>
				<Image src={'/mapFutage.webp'} fill alt='mapFutage' />
			</div>
			<Section>
				<div className='flex flex-col items-center gap-[30px] text-white text-[14px] font-bold text-center'>
					<p>
						© 2023 Пестовский Лесокомбинат. <br />
						Все права защищены.
					</p>
					<div className='flex flex-col'>
						<Link href={'/'}>
							<p className='text-[14px] underline underline-offset-[4px]'>
								Реквизиты
							</p>
						</Link>
						<Link href={'/'}>
							<p className='text-[12px] underline underline-offset-[4px]'>
								Политика конфиденциальности
							</p>
						</Link>
					</div>
					<div className='relative w-[169px] h-[25px]'>
						<Image src={'/LOGO Alpha.svg'} fill alt='logo' />
					</div>
				</div>
			</Section>
		</>
	)
}

const city = ['САНКТ-ПЕТЕРБУРГ', 'МОСКВА']

const contacts = [
	{
		phone: '8 (812) 602-77-60',
		mail: 'info@pplk.ru',
		street: (
			<p className='text-[12px] px-[12px] underline underline-offset-[4px]'>
				ул. Заозёрная, д. 8 к. 2, офис 202 <br /> (7 мин. пешком от метро
				Фрунзенская)
			</p>
		),
	},
	{
		phone: '8 (999) 999-99-99',
		mail: 'infopiter@mail.ru',
		street: (
			<p className='text-[12px] px-[12px] underline underline-offset-[4px]'>
				ул. Московская, д. 1 к. 1, офис 111 <br /> (1 мин. пешком от метро
				******)
			</p>
		),
	},
]
