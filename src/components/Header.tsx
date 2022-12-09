import React from "react";
import "../styles/config/container.scss";

export const Header = () => {
	return (
		<>
			<div className="container">
				<header className="header container-max">
					<img className="header-logo" src="" alt="logo gamertec" />
					<ul className="header-menu">
						<li className="header-menu-item">Inicio</li>
						<li className="header-menu-item">Productos</li>
						<li className="header-menu-item">Comunidad</li>
						<li className="header-menu-item">Acerca de</li>
						<li className="header-menu-item">Contacto</li>
					</ul>
					<a className="header-usuario" href="">
						Acceder
					</a>
				</header>
			</div>
		</>
	);
};
