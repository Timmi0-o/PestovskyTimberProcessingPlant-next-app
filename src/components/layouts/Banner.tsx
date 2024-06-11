'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { DropMenu } from '../ui/DropMenu'
import { Input } from '../ui/Input'

export const Banner = () => {
	const [phone, setPhone] = useState('')
	const [fio, setFio] = useState('')
	const [modalMove, setModalMove] = useState('ml-[-100%]')
	const [buttonMove, setButtonMove] = useState(false)

	const [agreements1, setAgreements1] = useState(false)
	const [agreements2, setAgreements2] = useState(false)

	const [isFinish, setIsFinish] = useState(false)
	const [questionnaire, setQuestionnaire] = useState(true)

	useEffect(() => {
		if (buttonMove) {
			setModalMove('ml-[0px]')
			document.body.style.overflow = 'hidden'
		} else {
			setModalMove('ml-[-100%]')
			document.body.style.overflow = ''
		}
	}, [buttonMove])

	const allCheck = () => {
		if (agreements1 && agreements2 && phone.length == 11 && fio.length > 10) {
			setPhone('')
			setFio('')
			setAgreements1(!agreements1)
			setAgreements2(!agreements2)
			setIsFinish(!isFinish)
			setQuestionnaire(!questionnaire)
		}
	}

	const goMainPage = () => {
		setButtonMove(!buttonMove)
		setIsFinish(!isFinish)
		setQuestionnaire(!questionnaire)
	}

	return (
		<div className='relative w-full h-[500px] overflow-hidden'>
			<Image
				className='object-cover object-[80%] sm:object-[-40px] md:object-[-60px] scale-[1.2]'
				src={'/banner.webp'}
				fill
				alt='banner'
			/>
			<div className='absolute bottom-[45px] left-0 flex flex-col justify-end items-center font-bold size-full text-white text-center'>
				<div>
					<p className='text-[30px] mb-[15px]'>«Пестовский Лесокомбинат»</p>
					<p className='text-[18px] mb-[35px]'>Cтань частью нашей команды!</p>
				</div>
				<div onClick={() => setButtonMove(!buttonMove)} className='w-[200px]'>
					<Button title='ОТПРАВИТЬ АНКЕТУ' />
				</div>
			</div>

			<div
				style={{ overflowY: 'auto' }}
				className={`fixed top-0 w-full h-[100vh] bg-[#262626] duration-300 ${modalMove} z-[100]`}
			>
				<div className='w-full h-[44px] bg-[#1B1B1B] text-white'>
					<div className='flex justify-end px-[20px]'>
						<div
							className='relative size-[44px]'
							onClick={() => setButtonMove(!buttonMove)}
						>
							<Image src={'/buttonClose.svg'} fill alt='buttonClose' />
						</div>
					</div>
				</div>
				{questionnaire && (
					<div>
						<div className='px-[20px]'>
							<p className='text-[18px] text-[#999999] font-bold leading-[22px] pt-[45px] pb-[37px] text-center'>
								Заполните анкету
							</p>
							<Input state={fio} setState={setFio} placeholder='Ф.И.О' />
							<Input state={phone} setState={setPhone} placeholder='Телефон' />
							<p className='text-[18px] text-[#ffffff] font-bold leading-[22px] pt-[45px]'>
								Отклик на вакансию
							</p>
							<DropMenu dropLink={dropLink} />
							<div className='flex flex-col gap-[15px]'>
								<p className='text-[18px] text-[#ffffff] font-bold leading-[22px] pt-[20px]'>
									Ваше резюме
								</p>
								<p className='text-left text-[10px] text-white font-normal'>
									Есть резюме в формате .pdf или .doc? <br /> Приложите и
									отправьте его нам.
								</p>
								<div className='w-[184px] text-[20px] font-bold text-white mb-[35px]'>
									<Button bg='bg-[#21A038]' title='Загрузить файл' />
								</div>
								<div className='text-white text-[10px] font-normal leading-[15px]'>
									<div
										onClick={() => setAgreements1(!agreements1)}
										className='flex gap-[5px] items-start'
									>
										<div
											className={`size-[12px] border-[0.5px] border-[#D9D9D9] bg-[#ffffff75] rounded-[3px] duration-300 ${
												agreements1 ? 'bg-[#e93737]' : ''
											}`}
										></div>
										<p className='w-[303px]'>
											Я прочитал(а), ознакомился(лась) и согласен(на)
											с Политикой конфиденциальности, Согласием на обработку
											персональных данных физическим лицом. Я осознаю,
											что даю Согласие на обработку персональных данных
											для использования предоставляемых возможностей
											Веб-сервиса.
										</p>
									</div>
									<br /> <br />
									<div
										onClick={() => setAgreements2(!agreements2)}
										className='flex gap-[5px] items-start'
									>
										<div
											className={`size-[12px] border-[0.5px] border-[#D9D9D9] bg-[#ffffff75] rounded-[3px] duration-300 ${
												agreements2 ? 'bg-[#e93737]' : ''
											}`}
										></div>
										<p className='w-[303px]'>
											Я достиг(ла) 18-летнего возраста
										</p>
									</div>
									<div
										onClick={() => allCheck()}
										className='w-[200px] mx-auto my-[45px]'
									>
										<Button title='ОТПРАВИТЬ АНКЕТУ' />
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
				{isFinish && (
					<div className='px-[20px]'>
						<p className='text-[18px] text-[#999999] font-bold leading-[22px] pt-[45px] pb-[37px] text-center'>
							Заполните анкету
						</p>
						<div className='relative size-[90px] mx-auto mt-[80px]'>
							<Image src={'/succses.svg'} fill alt='succses' />
						</div>
						<p className='text-white text-center font-bold text-[18px] mt-[50px]'>
							Благодарим <br /> за ваш отклик и интерес. <br /> <br /> Мы изучим
							вашу анкету и свяжемся с вами <br /> в течении 2х дней.
						</p>
						<div
							onClick={() => goMainPage()}
							className='w-[156px] mx-auto my-[45px] text-white'
						>
							<Button title='НА ГЛАВНУЮ' />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

const dropLink = ['Грузчик', 'Водитель', 'Слесарь', 'Маляр']
