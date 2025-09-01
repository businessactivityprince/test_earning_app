const el = document.getElementById("mob-nav");
const items = [
  { href: "index.html", key: "index", label: "Home" },
  { href: "withdraw.html", key: "withdraw", label: "Withdraw" },
  { href: "leaderboard.html", key: "leaderboard", label: "Ranks" },
  { href: "transition.html", key: "transition", label: "Transition" },
  { href: "settings.html", key: "settings", label: "Settings" }
];
const icons = {
  index: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="h1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7bb6ff"/><stop offset="100%" stop-color="#6ef0ff"/></linearGradient><linearGradient id="h2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9ad0ff"/><stop offset="100%" stop-color="#598bff"/></linearGradient></defs><path d="M3 11.2 12 4l9 7.2v7.6a1.2 1.2 0 0 1-1.2 1.2H15V14h-6v6.0H4.2A1.2 1.2 0 0 1 3 18.8z" fill="url(#h1)"/><path d="M9 21v-6h6v6z" fill="url(#h2)"/></svg>`,
  withdraw: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="c1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#7be3ff"/><stop offset="100%" stop-color="#69a7ff"/></linearGradient><linearGradient id="c2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffd59e"/><stop offset="100%" stop-color="#ff8f6b"/></linearGradient></defs><rect x="3.5" y="7" rx="2" ry="2" width="17" height="12" fill="url(#c1)"/><rect x="6" y="4" rx="1.2" ry="1.2" width="12" height="3" fill="url(#c2)"/><path d="M8 12h8M8 15h5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>`,
  leaderboard: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="l1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#9ef2ff"/><stop offset="100%" stop-color="#6ca6ff"/></linearGradient><linearGradient id="l2" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ffe59e"/><stop offset="100%" stop-color="#ff9eb0"/></linearGradient></defs><rect x="2.8" y="12" width="5.8" height="8" rx="1.2" fill="url(#l1)"/><rect x="9.1" y="6.5" width="5.8" height="13.5" rx="1.2" fill="url(#l2)"/><rect x="15.4" y="10" width="5.8" height="10" rx="1.2" fill="url(#l1)"/></svg>`,
  transition: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="r1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#9fe3ff"/><stop offset="100%" stop-color="#86a6ff"/></linearGradient></defs><path d="M4 6v4h4" fill="none" stroke="#a5b0ff" stroke-width="2" stroke-linecap="round"/><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" fill="none" stroke="url(#r1)" stroke-width="3" stroke-linecap="round"/><path d="M12 8v5l3 2" fill="none" stroke="#5f79ff" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="s1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#b2a7ff"/><stop offset="100%" stop-color="#79e0ff"/></linearGradient></defs><path d="M20 13.3v-2.6l2-1.2-1.4-2.5-2.5.8-1.9-1.5L15.3 3h-2.6L11 6.3 9.1 7.8 6.6 7 5.2 9.5l2 1.2v2.6l-2 1.2L6.6 17l2.5-.8 1.9 1.5L12.7 21h2.6l1.3-2.7 1.9-1.5 2.5.8L22 14.5z" fill="url(#s1)"/><circle cx="12" cy="12" r="3.8" fill="#ffffff"/></svg>`
};
const html = `<div class="nav-wrap"><nav class="nav">` +
  items.map(it => `<a href="${it.href}" data-key="${it.key}"><span class="tile">${it.key === 'transition' || it.key === 'tokens' ? `<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="r1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#9fe3ff"></stop><stop offset="100%" stop-color="#86a6ff"></stop></linearGradient></defs><path d="M4 6v4h4" fill="none" stroke="#a5b0ff" stroke-width="2" stroke-linecap="round"></path><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" fill="none" stroke="url(#r1)" stroke-width="3" stroke-linecap="round"></path><path d="M12 8v5l3 2" fill="none" stroke="#5f79ff" stroke-width="2.2" stroke-linecap="round"></path></svg>` : icons[it.key]}</span></a>`).join("") +
  `</nav></div>`;
el.innerHTML = html;
const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const keyByFile = { "index.html": "index", "withdraw.html": "withdraw", "leaderboard.html": "leaderboard", "transition.html": "transition", "settings.html": "settings", "tokens.html": "transition" };
const activeKey = keyByFile[page] || "index";
Array.from(document.querySelectorAll('#mob-nav a')).forEach(a => { if (a.dataset.key === activeKey) a.classList.add('active'); });
