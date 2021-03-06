import React, { Component } from 'react';
class Header extends Component {
	render() {
		return(
			<header>
			<div className="header__inner">
				<a href="/" className="logo__link">
					{/* You are probably wondering how I did the logo right? Its done with css, you can see how I did it in the header.scss file located here > https://github.com/christophernewton/christophernewton.github.io/blob/master/stylesheets/src/components/header.scss#L3 (long story short it animates outlines, fades out and then fades in the solid part) */}
					<svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" className="logo">
						<g className="logo__lines">
							<path fill="transparent" stroke="#fff" strokeWidth="2" d="M26.708,38.014c-1.395,0.719-4.32,1.439-8.01,1.439c-8.549,0-14.939-5.4-14.939-15.39c0-9.54,6.435-15.929,15.839-15.929
						c3.735,0,6.165,0.81,7.2,1.35l-0.99,3.195c-1.44-0.72-3.555-1.26-6.075-1.26c-7.11,0-11.834,4.545-11.834,12.51
						c0,7.47,4.275,12.194,11.609,12.194c2.43,0,4.86-0.495,6.435-1.26L26.708,38.014z" />
							<path fill="transparent" stroke="#fff" strokeWidth="2" d="M35.574,8.629v12.689h14.669V8.629h3.96v30.329h-3.96V24.739H35.574v14.219h-3.959V8.629H35.574z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" d="M60.999,9.079c1.98-0.405,4.86-0.675,7.515-0.675c4.185,0,6.93,0.81,8.82,2.52c1.485,1.305,2.385,3.375,2.385,5.76
								c0,3.959-2.565,6.615-5.715,7.694v0.135c2.295,0.81,3.69,2.97,4.455,6.119c0.99,4.23,1.71,7.155,2.295,8.325h-4.05
								c-0.495-0.854-1.17-3.465-1.979-7.245c-0.9-4.185-2.565-5.759-6.12-5.895h-3.69v13.14h-3.915V9.079z M64.913,22.849h4.005
								c4.185,0,6.84-2.295,6.84-5.76c0-3.915-2.835-5.625-6.975-5.625c-1.89,0-3.195,0.18-3.87,0.36V22.849z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" d="M89.123,8.629v30.329h-3.959V8.629H89.123z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" d="M95.468,34.188c1.755,1.125,4.275,1.98,6.975,1.98c4.005,0,6.345-2.07,6.345-5.175c0-2.79-1.62-4.454-5.714-5.984
								c-4.95-1.8-8.01-4.41-8.01-8.64c0-4.725,3.915-8.235,9.81-8.235c3.06,0,5.354,0.72,6.66,1.485l-1.08,3.195
								c-0.945-0.585-2.97-1.44-5.715-1.44c-4.14,0-5.715,2.475-5.715,4.545c0,2.835,1.845,4.23,6.03,5.85
								c5.13,2.025,7.695,4.455,7.695,8.909c0,4.681-3.42,8.775-10.575,8.775c-2.925,0-6.12-0.9-7.739-1.98L95.468,34.188z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" d="M117.698,38.958V8.629h8.01l6.3,11.114c1.8,3.195,3.555,6.975,4.95,10.395h0.09c-0.405-4.006-0.54-8.1-0.54-12.69V8.629
								h6.3v30.329h-7.2l-6.479-11.7c-1.8-3.284-3.825-7.154-5.265-10.709h-0.18c0.225,4.05,0.314,8.325,0.314,13.274v9.135H117.698z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" 	 d="M166.791,26.133h-11.158v7.2h12.465v5.625h-19.305V8.629h18.674v5.625h-11.834v6.3h11.158V26.133z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" 	 d="M177.996,38.958l-7.199-30.329h7.334l2.295,12.464c0.676,3.645,1.305,7.56,1.801,10.664h0.09
								c0.494-3.33,1.215-6.974,1.98-10.754l2.564-12.375h7.289l2.43,12.779c0.676,3.555,1.17,6.794,1.621,10.169h0.09
								c0.449-3.375,1.125-6.93,1.754-10.574l2.475-12.375h6.975l-7.828,30.329h-7.426l-2.564-13.049c-0.586-3.06-1.08-5.895-1.439-9.36
								h-0.09c-0.541,3.42-1.035,6.3-1.756,9.36l-2.879,13.049H177.996z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" 	 d="M219.936,14.389h-8.189v-5.76h23.309v5.76h-8.279v24.569h-6.84V14.389z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" 	 d="M250.264,39.453c-8.953,0-14.264-6.795-14.264-15.435c0-9.089,5.85-15.884,14.76-15.884
								c9.314,0,14.398,6.975,14.398,15.344c0,9.99-5.984,15.975-14.848,15.975H250.264z M250.58,34.008c4.635,0,7.289-4.364,7.289-10.304
								c0-5.445-2.564-10.125-7.289-10.125s-7.381,4.59-7.381,10.26c0,5.714,2.746,10.169,7.336,10.169H250.58z"/>
							<path fill="transparent" stroke="#fff" strokeWidth="2" 	 d="M269.66,38.958V8.629h8.01l6.299,11.114c1.801,3.195,3.555,6.975,4.951,10.395h0.09c-0.406-4.006-0.541-8.1-0.541-12.69
								V8.629h6.301v30.329h-7.201l-6.479-11.7c-1.801-3.284-3.826-7.154-5.266-10.709h-0.18c0.225,4.05,0.314,8.325,0.314,13.274v9.135 H269.66z"/>
						</g>
						<g className="logo__fill">
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M26.708,38.014c-1.395,0.719-4.32,1.439-8.01,1.439c-8.549,0-14.939-5.4-14.939-15.39c0-9.54,6.435-15.929,15.839-15.929
						c3.735,0,6.165,0.81,7.2,1.35l-0.99,3.195c-1.44-0.72-3.555-1.26-6.075-1.26c-7.11,0-11.834,4.545-11.834,12.51
						c0,7.47,4.275,12.194,11.609,12.194c2.43,0,4.86-0.495,6.435-1.26L26.708,38.014z" />
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M35.574,8.629v12.689h14.669V8.629h3.96v30.329h-3.96V24.739H35.574v14.219h-3.959V8.629H35.574z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M60.999,9.079c1.98-0.405,4.86-0.675,7.515-0.675c4.185,0,6.93,0.81,8.82,2.52c1.485,1.305,2.385,3.375,2.385,5.76
								c0,3.959-2.565,6.615-5.715,7.694v0.135c2.295,0.81,3.69,2.97,4.455,6.119c0.99,4.23,1.71,7.155,2.295,8.325h-4.05
								c-0.495-0.854-1.17-3.465-1.979-7.245c-0.9-4.185-2.565-5.759-6.12-5.895h-3.69v13.14h-3.915V9.079z M64.913,22.849h4.005
								c4.185,0,6.84-2.295,6.84-5.76c0-3.915-2.835-5.625-6.975-5.625c-1.89,0-3.195,0.18-3.87,0.36V22.849z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M89.123,8.629v30.329h-3.959V8.629H89.123z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M95.468,34.188c1.755,1.125,4.275,1.98,6.975,1.98c4.005,0,6.345-2.07,6.345-5.175c0-2.79-1.62-4.454-5.714-5.984
								c-4.95-1.8-8.01-4.41-8.01-8.64c0-4.725,3.915-8.235,9.81-8.235c3.06,0,5.354,0.72,6.66,1.485l-1.08,3.195
								c-0.945-0.585-2.97-1.44-5.715-1.44c-4.14,0-5.715,2.475-5.715,4.545c0,2.835,1.845,4.23,6.03,5.85
								c5.13,2.025,7.695,4.455,7.695,8.909c0,4.681-3.42,8.775-10.575,8.775c-2.925,0-6.12-0.9-7.739-1.98L95.468,34.188z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M117.698,38.958V8.629h8.01l6.3,11.114c1.8,3.195,3.555,6.975,4.95,10.395h0.09c-0.405-4.006-0.54-8.1-0.54-12.69V8.629
								h6.3v30.329h-7.2l-6.479-11.7c-1.8-3.284-3.825-7.154-5.265-10.709h-0.18c0.225,4.05,0.314,8.325,0.314,13.274v9.135H117.698z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M166.791,26.133h-11.158v7.2h12.465v5.625h-19.305V8.629h18.674v5.625h-11.834v6.3h11.158V26.133z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M177.996,38.958l-7.199-30.329h7.334l2.295,12.464c0.676,3.645,1.305,7.56,1.801,10.664h0.09
								c0.494-3.33,1.215-6.974,1.98-10.754l2.564-12.375h7.289l2.43,12.779c0.676,3.555,1.17,6.794,1.621,10.169h0.09
								c0.449-3.375,1.125-6.93,1.754-10.574l2.475-12.375h6.975l-7.828,30.329h-7.426l-2.564-13.049c-0.586-3.06-1.08-5.895-1.439-9.36
								h-0.09c-0.541,3.42-1.035,6.3-1.756,9.36l-2.879,13.049H177.996z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M219.936,14.389h-8.189v-5.76h23.309v5.76h-8.279v24.569h-6.84V14.389z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M250.264,39.453c-8.953,0-14.264-6.795-14.264-15.435c0-9.089,5.85-15.884,14.76-15.884
								c9.314,0,14.398,6.975,14.398,15.344c0,9.99-5.984,15.975-14.848,15.975H250.264z M250.58,34.008c4.635,0,7.289-4.364,7.289-10.304
								c0-5.445-2.564-10.125-7.289-10.125s-7.381,4.59-7.381,10.26c0,5.714,2.746,10.169,7.336,10.169H250.58z"/>
							<path fill="#fff" stroke="#fff" strokeWidth="0" d="M269.66,38.958V8.629h8.01l6.299,11.114c1.801,3.195,3.555,6.975,4.951,10.395h0.09c-0.406-4.006-0.541-8.1-0.541-12.69
								V8.629h6.301v30.329h-7.201l-6.479-11.7c-1.801-3.284-3.826-7.154-5.266-10.709h-0.18c0.225,4.05,0.314,8.325,0.314,13.274v9.135 H269.66z"/>
						</g>
					</svg>
				</a>
				<div className="header__tagline">
					32 Year old guy who likes to make <strong>cool</strong> looking, <strong>functionally</strong> amazing, <strong>super fast</strong> websites<br />
					<i className="fa fa-envelope" aria-hidden="true"></i> christopherjnewton [at] gmail [dot] com
				</div>
			</div>
		</header>
		)
	}
}

export default Header;
