import React, { Component } from 'react';

class Project2 extends Component {
	render() {
		return (
			<section className="project project-2">
				<label htmlFor="project-2" className="project__close">
					Close (Esc)
					<i className="fa fa-times-circle" aria-hidden="true"></i>
				</label>
				<div className="project__screen">
					<div className="project__dot--1">
						<i className="fa fa-scissors" aria-hidden="true"></i>
						<div className="project__task">Design cut</div>
					</div>
					<div className="project__dot--2">
						<i className="fa fa-sitemap" aria-hidden="true"></i>
						<div className="project__task">Integration into<br /><a href="http://www.coredna.com/">Core dna</a></div>
					</div>
					<div className="project__dot--3">
						<i className="fa fa-bar-chart" aria-hidden="true"></i>
						<div className="project__task">Project<br />management</div>
					</div>
				</div>
				<article className="project__description">
					<h1>Why Settle Seek Campaign</h1>
					<p>With a tight deadline due to television and radio commencement dates I took the development lead to build out the campaign website</p>
					<h2>Challenges</h2>
					<p>Working with tight deadlines and meeting the expectations of all stakeholders was an enormous task and am proud of the outcome the team achieved. This was brought together by Seek, Bwired, Isobar and Clemmenger BBDO</p>
					<a href="https://www.seek.com.au/career-advice/why-settle" target="_blank">Visit www.seek.com.au/career-advice/why-settle</a>
				</article>
			</section>
		)
	}
}

export default Project2;