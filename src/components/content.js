import React, { Component } from 'react';
import Project1 from './projects/project-1';
import Project2 from './projects/project-2';
import Project3 from './projects/project-3';

class Content extends Component {
	render() {
		return (
		<div>

			
			<div className="content__intro">
				<h2>About me</h2>

				<p>Born and raised in Wodonga Victoria, I have worked with WEB MATRIX for 5 years in an
				office environment with a close knit team and 5 years working remotely from
				different locations around Australia. In my latest role as head of development for Bwired 
				my responsibilities have shifted to looking after teams and building projects. I look to broaden my skill base which already contains strong
				XHTML/CSS3/LESS/HTML5 with cross-browser compatibility and strong knowledge of building
				templates for desktop/mobile on open source solutions like Dot Net Nuke, Joomla, Wordpress
				& Drupal. I have experience with react and would love to expand my knowledge in this area.</p>
				<p>I enjoy the challenges that come with being a front end developer, especially with complex
				and large cutting jobs. I find it satisfying to work out ways to find the most efficient and
				best solutions possible.</p>
				<p>I have worked in many teams professionally and personally. I am strongly self-motivated and
				can work by myself or with a team.</p>

				<h2>What I love</h2>
				<div className="content__love">
					Sketch, Photoshop, animation, ux/ui
				</div>

				<h2>What I know</h2>
				<div className="content__know">
					Sass, git, gulp, react
				</div>
				
			</div>

			{/* Since this was a one pager I wanted to keep it simple and wanted to play with inputs and timings which is why I used checkboxes for the active state */}
			<input type="checkbox" name="project-1" id="project-1" className="project-1" />
			<input type="checkbox" name="project-2" id="project-2" className="project-2" />
			<input type="checkbox" name="project-3" id="project-3" className="project-3" />
			<main>
				<h2>Recent Projects</h2>
				<div className="project__buttons">
					<label htmlFor="project-1" className="project__title">
						<svg width="256" height="256" viewBox="0 0 256 256">
						    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						        <g strokeWidth="1" stroke="#FFFFFF" fill="">
						            <polygon id="Triangle" points="128 0 256 256 0 256"></polygon>
						        </g>
						    </g>
						</svg>
						<div className="project__heading">
							Nintendo
						</div>
					</label>
					<label htmlFor="project-2" className="project__title">
						<svg width="340" height="325" viewBox="0 0 340 325">
						    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						        <g id="256" stroke="#FFFFFF">
						            <polygon id="Star" points="169.892678 268.869329 64.1425367 324.465468 84.3390165 206.710955 -1.21464467 123.316747 117.017607 106.136595 169.892678 -1 222.767748 106.136595 341 123.316747 255.446339 206.710955 275.642819 324.465468"></polygon>
						        </g>
						    </g>
						</svg>
						<div className="project__heading">
							Seek
						</div>
					</label>
					<label htmlFor="project-3" className="project__title">
						<svg width="256" height="256" viewBox="0 0 256 256">
							<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						        <g transform="translate(-2.000000, -5.000000)" strokeWidth="1" stroke="#FFFFFF" fill="">
						            <polygon id="Polygon" points="127.5 7 251.612875 97.1732822 204.205975 243.076718 50.7940246 243.076718 3.38712462 97.1732822"></polygon>
						        </g>
						    </g>
						</svg>
						<div className="project__heading">
							Mornington Peninsula
						</div>
					</label>
				</div>
				<Project1 />
				<Project2 />
				<Project3 />
			</main>
		</div>
		)
	}
}
export default Content;