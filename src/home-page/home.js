const uglyHTML = `
	<div>
				<p>I'm a passionate web developer, system administrator and graphic designer.</p>
				<p>I have 2,5 years of professional experience in work for end client and with external teams that outsource work. My main task at work was creating complete, secure websites and shops in collaboration with graphics designers. I also work on web applications
					built with Laravel, Kohana, Yii or some custom CMS.</p>
				<p>Maintanance job includes adding new functionality, changing exiting, making sure website is compatible with newest browsers and devices as well as removing malware, detecting and removing security holes and hardening configuration.</p>
				Along with front-end and back-end development I can take carry of configuring secure web stack.

				<div class="skills">
					<div class="skill">
						<div class="icon">
							<svg viewBox="0 0 66.41797 43.066497" height="40px" width="40px" style="margin-top: 18px">
								<path d="M 2.3886719 0.0234375 C 1.0655022 0.0234375 0 1.0889397 0 2.4121094 L 0 11.398438 C 0 12.721607 1.0655022 13.787109 2.3886719 13.787109 L 64.029297 13.787109 C 65.352467 13.787109 66.417969 12.721607 66.417969 11.398438 L 66.417969 2.4121094 C 66.417969 1.0889397 65.352467 0.0234375 64.029297 0.0234375 L 2.3886719 0.0234375 z M 52.722656 7.8105469 L 55.287109 7.8105469 C 55.491295 7.8105469 55.65625 8.5484611 55.65625 9.4628906 C 55.65625 10.37732 55.491295 11.113281 55.287109 11.113281 L 52.722656 11.113281 C 52.51847 11.113281 52.353516 10.37732 52.353516 9.4628906 C 52.353516 8.5484611 52.51847 7.8105469 52.722656 7.8105469 z M 56.572266 7.8105469 L 59.134766 7.8105469 C 59.338952 7.8105469 59.503906 8.5484611 59.503906 9.4628906 C 59.503906 10.37732 59.338952 11.113281 59.134766 11.113281 L 56.572266 11.113281 C 56.36808 11.113281 56.203125 10.37732 56.203125 9.4628906 C 56.203125 8.5484611 56.36808 7.8105469 56.572266 7.8105469 z M 60.419922 7.8105469 L 62.984375 7.8105469 C 63.188561 7.8105469 63.353516 8.5484611 63.353516 9.4628906 C 63.353516 10.37732 63.188561 11.113281 62.984375 11.113281 L 60.419922 11.113281 C 60.215736 11.113281 60.050781 10.37732 60.050781 9.4628906 C 60.050781 8.5484611 60.215736 7.8105469 60.419922 7.8105469 z "
								/>
								<path d="M 2.3886719,14.607515 C 1.0655022,14.607515 0,15.673017 0,16.996187 l 0,8.986328 c 0,1.323169 1.0655022,2.388671 2.3886719,2.388671 l 61.6406251,0 c 1.32317,0 2.388672,-1.065502 2.388672,-2.388671 l 0,-8.986328 c 0,-1.32317 -1.065502,-2.388672 -2.388672,-2.388672 l -61.6406251,0 z m 50.3339841,7.787109 2.564453,0 c 0.204186,0 0.369141,0.737914 0.369141,1.652344 0,0.914429 -0.164955,1.65039 -0.369141,1.65039 l -2.564453,0 c -0.204186,0 -0.36914,-0.735961 -0.36914,-1.65039 0,-0.91443 0.164954,-1.652344 0.36914,-1.652344 z m 3.84961,0 2.5625,0 c 0.204186,0 0.36914,0.737914 0.36914,1.652344 0,0.914429 -0.164954,1.65039 -0.36914,1.65039 l -2.5625,0 c -0.204186,0 -0.369141,-0.735961 -0.369141,-1.65039 0,-0.91443 0.164955,-1.652344 0.369141,-1.652344 z m 3.847656,0 2.564453,0 c 0.204186,0 0.369141,0.737914 0.369141,1.652344 0,0.914429 -0.164955,1.65039 -0.369141,1.65039 l -2.564453,0 c -0.204186,0 -0.369141,-0.735961 -0.369141,-1.65039 0,-0.91443 0.164955,-1.652344 0.369141,-1.652344 z"
								/>
								<path d="M 2.3886719,29.326265 C 1.0655022,29.326265 0,30.391767 0,31.714937 l 0,8.986328 c 0,1.323169 1.0655022,2.388671 2.3886719,2.388671 l 61.6406251,0 c 1.32317,0 2.388672,-1.065502 2.388672,-2.388671 l 0,-8.986328 c 0,-1.32317 -1.065502,-2.388672 -2.388672,-2.388672 l -61.6406251,0 z m 50.3339841,7.787109 2.564453,0 c 0.204186,0 0.369141,0.737914 0.369141,1.652344 0,0.914429 -0.164955,1.65039 -0.369141,1.65039 l -2.564453,0 c -0.204186,0 -0.36914,-0.735961 -0.36914,-1.65039 0,-0.91443 0.164954,-1.652344 0.36914,-1.652344 z m 3.84961,0 2.5625,0 c 0.204186,0 0.36914,0.737914 0.36914,1.652344 0,0.914429 -0.164954,1.65039 -0.36914,1.65039 l -2.5625,0 c -0.204186,0 -0.369141,-0.735961 -0.369141,-1.65039 0,-0.91443 0.164955,-1.652344 0.369141,-1.652344 z m 3.847656,0 2.564453,0 c 0.204186,0 0.369141,0.737914 0.369141,1.652344 0,0.914429 -0.164955,1.65039 -0.369141,1.65039 l -2.564453,0 c -0.204186,0 -0.369141,-0.735961 -0.369141,-1.65039 0,-0.91443 0.164955,-1.652344 0.369141,-1.652344 z"
								/>
							</svg>
						</div>

						<ul>
							<li>Linux</li>
							<li>FreeBSD</li>
							<li>Apache</li>
							<li>Nginx</li>
							<li>MySQL</li>
							<li>PostgreSQL</li>
						</ul>
					</div>
					<div class="skill">
						<div class="icon">
							<svg viewBox="0 0 55.600001 30.800001" height="40px" width="40px" style="margin-top: 16px">
								<path d="m 15.379695,8.8039433 -13.1999999,8.1599997 0,0.08 13.1999999,8.16 0,3.2 -15.19999992,-9.8 0,-3.2 15.19999992,-9.7999997 0,3.2 z" />
								<path d="m 37.953731,0.00394325 -13.28,30.79999975 -2.92,0 13.32,-30.79999975 2.88,0 z" />
								<path d="m 40.579695,8.8039433 0,-3.2 15.2,9.7999997 0,3.2 -15.2,9.8 0,-3.2 13.2,-8.16 0,-0.08 -13.2,-8.1599997 z" />
							</svg>
						</div>
						<ul>
							<li>JavaScript</li>
							<li>PHP 5.*, 7</li>							
							<li>Java</li>
							<li>Python 2, 3</li>
							<li>HTML5</li>
							<li>CSS3/SASS</li>
						</ul>
					</div>
					<div class="skill">
						<div class="icon">
							<svg width="40px" height="40px" viewBox="0 0 512 512" style="margin-top: 17px">
								<path d="M411.1,256c0-23.9,14.8-42.8,36.9-55.8c-4-13.3-9.3-26.2-15.8-38.2c-24.9,6.5-45-3.2-62-20.2c-16.9-16.9-22.1-37.1-15.6-62
			C342.6,73.3,329.8,68,316.4,64c-13,22.2-36.4,36.9-60.4,36.9c-23.9,0-47.4-14.7-60.4-36.9c-13.4,4-26.2,9.3-38.2,15.8
			c6.5,24.9,1.3,45-15.6,62c-16.9,16.9-37.1,26.7-61.9,20.2C73.3,174,68,186.8,64,200.2c22.2,13,37,31.9,37,55.8
			c0,23.9-14.8,47.4-37,60.4c4,13.4,9.3,26.2,15.8,38.2c24.9-6.5,45-1.3,61.9,15.6c17,16.9,22.1,37.1,15.6,62
			c12.1,6.5,24.8,11.8,38.2,15.8c13-22.2,36.5-36.9,60.4-36.9c23.9,0,47.4,14.7,60.4,36.9c13.4-4,26.2-9.3,38.2-15.8
			c-6.5-24.9-1.3-45,15.6-62c16.9-16.9,37.1-26.7,62-20.2c6.5-12.1,11.8-24.9,15.8-38.2C425.8,298.8,411.1,279.9,411.1,256z
			M256,354.3c-54.2,0-98.3-44-98.3-98.3c0-54.3,44-98.3,98.3-98.3c54.3,0,98.3,44,98.3,98.3C354.3,310.3,310.3,354.3,256,354.3z" />
							</svg>

						</div>
						<ul>
							<li>AngularJS</li>
							<li>ReactJS</li>
							<li>Laravel</li>
							<li>Wordpress</li>
							<li>Prestashop</li>
							<li>NodeJS</li>
						</ul>
					</div>

				</div>

				<p>I'm currently open for freelancing work.</p>

				<hr/> Contact me
				<ul>
					<li>
						<svg width="22" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
							<path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"
							/>
						</svg>
						<a href="mailto:jakub@lechocki.pl">jakub@lechocki.pl</a>
					</li>
					<li>
						<svg width="22" height="22" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
							<path d="M976 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zm208-160v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zm-192-848q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z"
							/>
						</svg>
						+48 882 511 588
					</li>
				</ul>
				<div>
					My profiles
				</div>
				<ul class="list-links">
					<li><i class="fa fa-linkedin-square" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/jakub-lechocki" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
					<li><i class="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/Loji" target="_blank" rel="noopener noreferrer">GitHub</a></li>
					<li><i class="fa fa-codepen" aria-hidden="true"></i> <a href="https://codepen.io/Loji/" target="_blank" rel="noopener noreferrer">CodePen</a></li>
				</ul>
			</div>
	</div>`;

	export default uglyHTML;