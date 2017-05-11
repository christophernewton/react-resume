import React, { Component } from 'react';
import Projects from './projects/projects';

class Content extends Component {
	render() {
		return (
		<main>
			<div className="content__inner">
				<div className="content__container">
					<h2>About me</h2>

					<p>Born and raised in Wodonga Victoria, I worked with WEB MATRIX for 5 years in an office environment with a close knit team and 5 years working remotely from different locations around Australia. In my latest role as head of development for Bwired located in Prahran, my responsibilities have shifted to looking after teams and building projects. I look to broaden my skill base which already contains strong CSS3,SASS,HTML5 with cross-browser compatibility and strong knowledge of building templates for desktop/mobile on open source solutions like Dot Net Nuke, Joomla, Wordpress & Drupal. I have experience with react and angular and would love to expand my knowledge in this area.</p>
					<p>I enjoy the challenges that come with being a front end developer, especially with complex and large cutting jobs. I find it satisfying to work out ways to find the most efficient and best solutions possible.</p>
					<p>I have worked in many teams professionally and personally. I am strongly self-motivated and can work by myself or with a team.</p>
					
					<section className="content content--love">
						<h2>What I love</h2>
						<ul>
							<li>My wife</li>
							<li>Sketch</li>
							<li>Photoshop</li>
							<li>Animation (60fps ftw)</li>
							<li>Amazing UI/UX</li>
						</ul>
					</section>

					<section className="content content--know">
						<h2>What I know</h2>
						<ul>
							<li>Sass/Less</li>
							<li>Gulp</li>
							<li>Git</li>
							<li>React</li>
							<li>PHP</li>
							<li>Wordpress,Drupal,Dotnet Nuke,Coredna</li>
						</ul>
					</section>
					
				</div>

				{/* Since this was a one pager I wanted to keep it simple and wanted to play with inputs and timings which is why I used checkboxes for the active state */}
				<input type="checkbox" name="project-1" id="project-1" className="project-1" />
				<input type="checkbox" name="project-2" id="project-2" className="project-2" />
				<input type="checkbox" name="project-3" id="project-3" className="project-3" />
				<div className="project--container">
					<div className="content__container">
						<h2>Recent Projects</h2>
					</div>
					<div className="project__buttons">
						<label htmlFor="project-1" className="project__title">
							<div className="project__heading">
								Nintendo
							</div>
						</label>
						<label htmlFor="project-2" className="project__title">
							<div className="project__heading">
								Seek
							</div>
						</label>
						<label htmlFor="project-3" className="project__title">
							<div className="project__heading">
								Mornington Peninsula
							</div>
						</label>
					</div>
					<Projects />
				</div>
			</div>
		</main>
		)
	}
}
export default Content;