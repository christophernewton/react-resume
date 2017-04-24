import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
		<div>
			{/* Since this was a one pager I wanted to keep it simple and wanted to play with inputs and timings which is why I used checkboxes for the active state */}
			<input type="checkbox" name="project-1" id="project-1" className="project-1" />
			<input type="checkbox" name="project-2" id="project-2" className="project-2" />
			<input type="checkbox" name="project-3" id="project-3" className="project-3" />
			<main>
				<div className="project__buttons">
					<label htmlFor="project-1" className="project__title">
						<div className="project__heading">
							nintendo.com.au
						</div>
					</label>
					<label htmlFor="project-2" className="project__title">
						<div className="project__heading">
							visitmorningtonpeninusla.org
						</div>
					</label>
					<label htmlFor="project-3" className="project__title">
						<div className="project__heading">
							rivaleastockfeeds.com.au
						</div>
					</label>
				</div>
				<section className="project project-1">
					<label htmlFor="project-1" className="project__close">
						Close
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
						<p>Working with a team of 7 people, together we built a new site from the ground up using Core dna. My responsibilities for this project include </p>
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
				<section className="project project-2">
					<label htmlFor="project-2" className="project__close">
						Close
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
				<section className="project project-3">
					<label htmlFor="project-3" className="project__close">
						Close
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
							<i className="fa fa-pie-chart" aria-hidden="true"></i>
							<div className="project__task">Project<br />management</div>
						</div>
					</div>
					<article className="project__description">
						<h1>Rivalea</h1>
						<p>This started out as an experiment by the marketing team at Rivalea and moved into a bit more of a micro site.</p>
						<p>There was a lot of creative freedoms given in this project with the only real direction given was that they wanted a horizontal scrolling website.</p>
						<h2>Challenges</h2>
						<p>Setting positions based on active states using hashbangs, knowing what I know now I would have approached it differently.</p>
						<p>Originally this was meant to be a static site but it was ported half way through into Dot Net Nuke so some of the code needed to be re-factored to allow this.</p>
					</article>
				</section>
			</main>
		</div>
		)
	}
}
export default Content;