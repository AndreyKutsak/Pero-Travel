import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./elements/header";
let videoList = [
		{
			baner: "img/video-baner-1.jpg",
			src: "video/video1.mp4",
		},
		{
			baner: "img/video-baner-1.jpg",
			src: "video/video1.mp4",
		},
		{
			baner: "img/video-baner-1.jpg",
			src: "video/video1.mp4",
		},
		{
			baner: "img/video-baner-1.jpg",
			src: "video/video1.mp4",
		},
		{
			baner: "img/video-baner-1.jpg",
			src: "video/video1.mp4",
		},
	],
	sliderList = [
		{
			sldieBg: "img/popular-1-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
		{
			sldieBg: "img/popular-1-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
		{
			sldieBg: "img/popular-2-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
		{
			sldieBg: "img/popular-3-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
		{
			sldieBg: "img/popular-1-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
		{
			sldieBg: "img/popular-1-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
		{
			sldieBg: "img/popular-2-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
		{
			sldieBg: "img/popular-3-bg.jpg",
			tourType: "Автобусный тур",
			tourTitle: "Обзорная по Сочи (из Адлера)",
			tourDuration: "6 часов",
			tourPrice: "3 515 ₽",
			tourDesc:
				"Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых..",
			tourLink: "/",
		},
	];
let offsetRight;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<main>
		<div className='main-wraper'>
			<div className='container'>
				<Header></Header>
				<div className='row d-flex justify-content-between align-items-center'>
					<div className='text-wraper'>
						<h1 className='main-title'>
							<span className='wt-bg'>ПУТЕШЕСТВУЙ</span>
							<br></br>
							<span className='stroked-title'>PERO TRAVEL</span>
						</h1>
						<a href='/#' className='main-lg-btn mr-auto'>
							К экскурсиям
							<img src='img/arrow-btn-right.svg' alt='arrow right icon' />
						</a>
					</div>
					<ul className='social-wraper'>
						<li>
							<a href='/#'>
								<img src='img/vk-logo-white.svg' alt='vkontacte logotype' />
							</a>
						</li>
						<li>
							<a href='/#'>
								<img src='img/inst-logo-white.svg' alt='instagram logotype' />
							</a>
						</li>
						<li>
							<a href='/#'>
								<img src='img/fb-logo-white.svg' alt='facebook logotype' />
							</a>
						</li>
					</ul>
				</div>
			</div>
			{(offsetRight = (videoList.length * 360) / 1.4)}
			<div
				className='video-slider slider d-flex'
				style={{ right: -offsetRight + "px" }}
			>
				{videoList.map(function (data) {
					return (
						<div className='video-wraper'>
							<video src={data.src} poster={data.baner}></video>
						</div>
					);
				})}
			</div>
		</div>
		<div className='popular'>
			<div className='popular-head d-flex justify-content-between container'>
				<h2 className='main-section-title'>Популярные экскурсии</h2>
				<a href='' className='more-link'>
					Смотреть все
				</a>
			</div>
			<div className=' rel-container container'>
				<div className='popular-slider slider d-flex'>
					{sliderList.map(function (data) {
						console.log(String(data.sldieBg));
						return (
							<div
								className='slide'
								style={{ backgroundImage: `url(${data.sldieBg})` }}
							>
								<p className='tour-type'>{data.tourType}</p>
								<p className='tour-title'>{data.tourTitle}</p>
								<div className='data-wraper d-flex'>
									<div className='duration-wraper'>
										<img src='img/clock-ico.svg' alt='time icon' />
										<span className='duration'>{data.tourDuration}</span>
									</div>
									<div className='coast-wraper'>
										<img src='img/coast-ico.svg' alt='coast icon' />
										<span className='coast'>{data.tourCoast}</span>
									</div>
								</div>
								<p className='tour-desc'>{data.tourDesc}</p>
								<a href={data.tourLink} className='main-lg-btn'>
									Подробнее
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
		<section className='about'>
			<div className='container'>
				<div className='d-flex'>
					<div className='text-wraper'>
						<h2 className='main-section-title'>О нас</h2>
						<p className='man-section-desc'>
							PeroTravel - Первый онлайн-сервис по бронированию экскурсий без
							очередей и операторов. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
						</p>
						<p className='main-section-desc'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section className='types'>
			<div className='container'>
				<h2 className='main-section-title'>Виды экскурсий</h2>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<div className='type-text-wraper d-flex justify-content-between'>
							<img src='img/bus-ico.svg' alt='Автобусный тур' />
							<div className='text-wraper'>
								<h2 className='main-block-desc'>Автобусный тур</h2>
								<p className='block-desc'>
									Один из самых насыщенных впечатлениями, доступных по цене и
									популярных видов отдыха. Во время одной поездки можно
									посмотреть достопримечательности сразу нескольких городов,
									причем обойдется это едва ли не в разы дешевле классического
									экскурсионного тура с ночевками в отелях.
								</p>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className='type-text-wraper d-flex justify-content-between'>
							<img src='img/jeep-ico.svg' alt='Джиппинг' />
							<div className='text-wraper'>
								<h2 className='main-block-desc'>Джиппинг</h2>
								<p className='block-desc'>
									Это путешествие на автомобилях высокой проходимости с
									преодолением естественных препятствий, это экстремальный вид
									спорта и отдыха, представляющий собой прохождение
									туристического маршрута по бездорожью на автомобилях.
								</p>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className='type-text-wraper d-flex justify-content-between'>
							<img src='img/sheep-ico.svg' alt='Яхтинг' />
							<div className='text-wraper'>
								<h2 className='main-block-desc'>Яхтинг</h2>
								<p className='block-desc'>
									Это то же, что круиз на лайнере или прогулка на пароме, только
									на яхте больше свободы, размеры судна в разы меньше, нет
									назойливой команды, можно самостоятельно почувствовать себя
									капитаном, постоять за штурвалом. Именно здесь вы почувствуете
									величайшие просторы Черногор моря.
								</p>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className='type-text-wraper d-flex justify-content-between'>
							<img src='img/kanyon-ico.svg' alt='Каньонинг' />
							<div className='text-wraper'>
								<h2 className='main-block-desc'>Каньонинг</h2>
								<p className='block-desc'>
									Это экстремально-спортивный вид отдыха, который заключается в
									преодолении каньонов (обводненных или нет) при помощи
									альпинистского и иного снаряжения, а иногда и вброд, но без
									лодок или иных плавсредств.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='type-footer'>
					<div className='type-desc text-center mx-auto'>
						Выбирайте на нашем сайте экскурсию, которая подходит именно вам и
						записывайтесь онлайн без очередей, просто и быстро!
					</div>
					<a href='' className='main-lg-btn mx-auto'>
						К экскурсиям
						<img src='img/arrow-btn-right.svg' alt='more btn arrow icon' />
					</a>
				</div>
			</div>
		</section>
		<section className='gallery'>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<h2 className='main-section-title'>Галерея</h2>
					<a href='' className='more-link'>
						Смотреть все
					</a>
				</div>
			</div>
		</section>
		<section className='rewords'>
			<div className='container'>
				<div className='d-flex justify-content-between'>
					<h2 className='main-section-title'>Отзывы</h2>
					<a href='' className='more-link'>
						Смотреть все
					</a>
				</div>
				<div className="rewords-slider d-flex">
					{if(rwwords){
						rewords.map(function(data){

						})
					}
					else{
						return(<p className="section-err-desc">Поканет Отзывов</p>)ж
					}}
				</div>
			</div>
		</section>
	</main>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
