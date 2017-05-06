import React, { Component } from 'react';

class Project1 extends Component {
	render() {
		return(
			<section className="project project-1">
				<label htmlFor="project-1" className="project__close">
					Close (Esc)
					<i className="fa fa-times-circle" aria-hidden="true"></i>
				</label>
				<div className="project__screen">
					<div className="project__dot--1">
						<i className="fa fa-scissors" aria-hidden="true"></i>
						<div className="project__task">Design cut</div>
					</div>
					<div className="project__dot--2">
						<i className="fa fa-male" aria-hidden="true"></i>
						<div className="project__task">Liaise<br />with client</div>
					</div>
					<div className="project__dot--3">
						<i className="fa fa-pie-chart" aria-hidden="true"></i>
						<div className="project__task">Project<br />management</div>
					</div>
				</div>
				<article className="project__description">
					<h1>Nintendo</h1>
					<p>Working with a team of 7 people, together we built a new site from the ground up using Coredna. My responsibilities for this project include </p>
					<ul>
						<li>communicating with marketing and design teams. </li>
						<li>code standards and quality assurance</li>
						<li>delegating tasks to remote employees</li>
						<li>making sure time lines are kept</li>
					</ul>
					<h2>Challenges</h2>
					<p>This project launched in multiple phases with the homepage, Wii U and 3ds pages launching first and then continuing work on support, help and games catalogue.</p>
					<p>The approval process was lengthy with each phase so management of branches and sandboxes were key to making sure each phase launched successfully.</p>
					{/* Personally, I'm all for letting the user choose if they middle click to open in a new tab over forcing them with target=_blank but I have never met a marketer that doesn't want it so I'm putting it here in case whoever reads this is one ;) */}
					<a href="http://www.nintendo.com.au/" target="_blank">Visit nintendo.com.au</a>
				</article>
			</section>
		)
	}
}

export default Project1;