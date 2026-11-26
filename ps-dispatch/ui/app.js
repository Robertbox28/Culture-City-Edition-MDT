// ps-dispatch – Leitstellen-Popup (deutsch, Design des MDT)
// Erstellt von Robertbox28 (https://robertbox28.ch/)

$(document).ready(() => {
	window.addEventListener('message', function (event) {
		const data = event.data;
		if (data.update == 'newCall') {
			addNewCall(data.callID, data.timer, data.data, data.isPolice, data.department, data.respondKey);
		}
	});
});

const MONTH_NAMES = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
const DEPT_LABEL = { police: 'Polizei', ems: 'Rettungsdienst', fire: 'LSFD', doj: 'Justiz · mithören', taxi: 'Taxi-Auftrag', mechanic: 'East Customs', response: 'Leitstelle' };

function pad(n) { return n < 10 ? `0${n}` : `${n}`; }

function getFormattedDate(date, prefix = false, hideYear = false) {
	const time = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
	if (prefix) return `${prefix} um ${time}`;
	const day = `${date.getDate()}. ${MONTH_NAMES[date.getMonth()]}`;
	return hideYear ? `${day} um ${time}` : `${day} ${date.getFullYear()} um ${time}`;
}

function timeAgo(dateParam) {
	if (!dateParam) return null;
	const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
	const today = new Date();
	const yesterday = new Date(today - 86400000);
	const seconds = Math.round((today - date) / 1000);
	const minutes = Math.round(seconds / 60);
	if (seconds < 5) return 'Gerade eben';
	if (seconds < 60) return `vor ${seconds} Sekunden`;
	if (seconds < 90) return 'vor einer Minute';
	if (minutes < 60) return `vor ${minutes} Minuten`;
	if (today.toDateString() === date.toDateString()) return getFormattedDate(date, 'Heute');
	if (yesterday.toDateString() === date.toDateString()) return getFormattedDate(date, 'Gestern');
	if (today.getFullYear() === date.getFullYear()) return getFormattedDate(date, false, true);
	return getFormattedDate(date);
}

function esc(v) {
	return String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function genderText(g) {
	const v = String(g).toLowerCase();
	if (v === 'weiblich' || v === 'female' || v === '1') return 'Weiblich';
	return 'Männlich';
}

function row(icon, text, wide) {
	return `<div class="call-bottom-info${wide ? ' wide' : ''}"><span class="${icon}"></span><span>${text}</span></div>`;
}

function addNewCall(callID, timer, info, isPolice, department, respondKey) {
	const prio = Number(info['priority']) || 3;
	let dept = department || (isPolice ? 'police' : 'ems');
	if (info['isDead']) dept = 'ems';
	const id = `call-${callID}-${Date.now()}`;

	let html = `<div class="dispatch-item dept-${dept}${prio === 1 ? ' is-urgent' : ''} animate__animated" id="${id}">
		<div class="top-info-holder">
			<span class="dept-tag">${DEPT_LABEL[dept] || 'Leitstelle'}</span>
			<span class="call-id">#${esc(callID)}</span>
		</div>
		<div class="title-row">
			<div class="call-code priority-${prio}">${esc(info.dispatchCode || '—')}</div>
			<div class="call-name">${esc(info.dispatchMessage || 'Neuer Einsatz')}</div>
		</div>
		<div class="bottom-info-holder">`;

	if (info['firstStreet']) html += row('fas fa-map-pin', esc(info['firstStreet']), true);
	if (info['time']) html += row('fas fa-clock', timeAgo(info['time']));
	if (info['heading']) html += row('fas fa-location-arrow', esc(info['heading']));
	if (info['callsign']) html += row('fas fa-id-badge', `Dienstnummer ${esc(info['callsign'])}`);
	if (info['camId']) html += row('fas fa-video', `Kamera ${esc(info['camId'])}`);
	if (info['gender']) html += row('fas fa-user', genderText(info['gender']));
	if (info['weapon']) html += row('fas fa-crosshairs', esc(info['weapon']));
	if (info['speed']) html += row('fas fa-tachometer-alt', esc(info['speed']));
	if (info['model']) html += row('fas fa-car', esc(info['model']));
	if (info['plate']) html += row('fas fa-barcode', esc(info['plate']));
	if (info['doorCount']) html += row('fas fa-door-open', esc(info['doorCount']));
	if (info['firstColor']) html += row('fas fa-palette', esc(info['firstColor']));
	if (info['automaticGunfire'] == true) html += row('fas fa-exclamation-triangle', 'Automatisches Feuer');
	if (info['name']) html += row('far fa-user', esc(info['name']));
	if (info['number']) html += row('fas fa-mobile-alt', esc(info['number']));
	if (info['information']) html += `<div class="call-bottom-info call-bottom-information"><span class="far fa-comment-dots"></span><span>${esc(info['information'])}</span></div>`;

	html += `</div>`;

	let duration = 4500;
	if (prio == 1) duration = 12000;
	else if (prio == 2) duration = 9000;
	if (dept === 'response') duration = timer || 10000;

	if (respondKey && dept !== 'response' && dept !== 'doj') {
		const hint = (dept === 'taxi' || dept === 'mechanic') ? 'Auftrag annehmen und Wegpunkt setzen' : 'Einsatz anfahren und Wegpunkt setzen';
		html += `<div class="respond-hint"><span class="key">${esc(respondKey)}</span> ${hint}</div>`;
	}
	html += `<div class="time-bar" style="animation-duration:${duration}ms"></div></div>`;

	$('.dispatch-holder').prepend(html);
	const el = $(`#${id}`);
	el.addClass('animate__fadeInRight');
	setTimeout(() => {
		el.removeClass('animate__fadeInRight').addClass('animate__fadeOutRight');
		setTimeout(() => el.remove(), 900);
	}, duration);
}
