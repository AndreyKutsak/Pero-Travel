import React from "react";
import ReactDOM from "react-dom/client";
function Header() {
	return (
		<header>
			<div className='container d-flex'>
				<a href='index.html' className='logo'>
					<img src='img/logo-white.svg' alt='pero logo' />
				</a>
				<button className='toggle-btn'>
					<div className='btn-row'></div>
					<div className='btn-row'></div>
					<div className='btn-row'></div>
				</button>
				<nav className='header-menu ml-auto'>
					<ul className='menu-list d-flex justify-content-between'>
						<li>
							<a href={"/#"}>Главная</a>
						</li>
						<li>
							<a href={"/#"}>Экскурсии</a>
						</li>
						<li>
							<a href={"/#"}>Личный кабинет</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
export default Header;
