import React, { Component } from 'react';

class Mornington extends Component {
	render() {
		return (
			<section className="project project-3">
				<label htmlFor="project-3" className="project__close">
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
						<div className="project__task">Integration into<br /><a href="http://www.dnnsoftware.com/">DNN</a></div>
					</div>
					<div className="project__dot--3">
						<i className="fa fa-bar-chart" aria-hidden="true"></i>
						<div className="project__task">Project<br />management</div>
					</div>
				</div>
				<article className="project__description">
					<h1>Mornington Peninsula Tourism</h1>
					<p>Rebuilding their new tourism site with a fresh and bright design I had a lot of creative freedom to add some cool animations to the design that was handed to us.</p>
					<h2>Challenges</h2>
					<p>This is a very content heavy website with a lot of large imagery so finding the balance between load times and the client wanting to show off their assets was priority.</p>
					<a href="http://www.visitmorningtonpeninsula.org" target="_blank">Go to visitmorningtonpeninsula.org</a>
				</article>
			</section>
		)
	}
}

export default Mornington;