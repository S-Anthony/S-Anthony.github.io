var portal = 'it';
var theme = '3-Samsung_S10';
var template = 'surbox';
var brand_country = 'Spain';
var dayNames = Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
var monthNames = new Array("Janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro");
var img_regalo = "img-2.png";
var minutos_y = "minutos e ";
var segundos = "segundos ";
var url_f = "";
var modalOptions = {
	backdrop: 'static',
	keyboard: false
};
var adS = ["bG9jYWwucHJlbG9hZGVycy5jb20=", "bG9jYWwucHJlbG9hZGVycy5jb20="];

!function (f, b, e, v, n, t, s) {
	if (f.fbq) return;
	n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
	if (!f._fbq) f._fbq = n;
	n.push = n;
	n.loaded = !0;
	n.version = '2.0';
	n.queue = [];
	t = b.createElement(e);
	t.async = !0;
	t.src = v;
	s = b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t, s)
  }
	(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{lander.param:fbpixel}');
  fbq('track', "PageView");

  var box_ini = false;

'use strict';
const answers = new Set();
document.querySelectorAll('#q1, #q2, #q3, #q4').forEach(container => {
	container.addEventListener('click', e => {
		let target = e.target;
		while (target.tagName === 'FONT') {
			target = target.parentNode;
		}
		;
		if ( (target.closest('survey_button') || target.classList.contains('survey_button')) && container.getAttribute('data-chosen') !== 'true') {
			container.setAttribute('data-chosen', 'true');
			answers.add(target.textContent);
			console.log(answers);
		}
	});
});

document.querySelector('#p_modal3 #p_modal_button3').addEventListener('click', e => {
	e.preventDefault();
	answers.forEach(answ => {
		console.log(answ);
	});
});

const commentSection = document.querySelector('.main-content .comments_face');
const commentPlace = document.createElement('div');
const commentArea = document.createElement('textarea');
const commentButton = document.createElement('button');

commentPlace.appendChild(commentArea);
commentPlace.appendChild(commentButton);
commentPlace.style.cssText = `
	width: 100%;
	display: flex;
	padding: 10px;
`;
commentArea.style.cssText = `
	width: 85%;
	border: 1px solid #232f3e;
	resize: none;
	padding: 10px;
	border-radius: 10px;
	outline: none;
`;
commentButton.textContent = 'Leave comment';
commentButton.style.cssText = `
	padding: 10px;
	font-size: 12px;
	width: 10%;
	margin: 20px auto;
	outline: none;
	border: none;
	border-radius: 10px;
	background: #232f3e;
	color: #fff;
	display: block;
`;
commentSection.parentNode.insertBefore(commentPlace, commentSection);

function createComment() {
	const comments = document.querySelectorAll('[id^=comment]');
	const id = 0;
	const comment = document.createElement('div');
	comment.classList.add('comments');
	comment.setAttribute('id', `comment${id}`);
	comment.style.display = 'block';
	comment.innerHTML = `
		<div class="profile">
		<img src="assets/img/box-full.png"></div>
		<div class="comment-content">
		<p class="name">
			<font style="vertical-align: inherit;">
			<font style="vertical-align: inherit;">Anonim</font>
			</font>
		</p>
		<p>
			<font style="vertical-align: inherit;">
			<font style="vertical-align: inherit;">${commentArea.value}</font>
			</font>
		</p>
		</div>
		<div class="clr"></div>
		<div class="comment-status">
		<span>
			<font style="vertical-align: inherit;">
			<font style="vertical-align: inherit;">Curte·comente</font>
			</font>
			<img src="assets/img/like.png" width="15px" height="15px">
			<font style="vertical-align: inherit;">
			<font style="vertical-align: inherit;">0</font>
			</font>
		</span>
		<font style="vertical-align: inherit;">
			<small>
			<font style="vertical-align: inherit;">·</font>
			</small>


			<small>
			<u>
				<font style="vertical-align: inherit;">just now</font>
			</u>
			</small>
		</font>
		<small>
			<font style="vertical-align: inherit;"></font>
			<u>
			<font style="vertical-align: inherit;"></font>
			</u>
		</small>
		</div>
	`;
	comments[0].parentNode.insertBefore(comment, comments[0]);
	comments.forEach( (comm, i) => {
		comm.setAttribute('id', `comment${i + 1 + id}`);
	});
	commentArea.value = '';
}

commentButton.addEventListener('click', () => {
	createComment();
});