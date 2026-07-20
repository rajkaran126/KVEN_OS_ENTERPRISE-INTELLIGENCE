(() => {
  const style = document.createElement('style');
  style.textContent = `
    .workspace-back,.workspace-logout{border:1px solid var(--line);border-radius:999px;background:rgba(255,255,255,.045);color:var(--gold2);font:600 11px Manrope;padding:8px 11px;cursor:pointer;transition:transform .2s,background .2s}.workspace-back:hover,.workspace-logout:hover{transform:translateY(-1px);background:rgba(237,189,81,.14)}.workspace-back{margin-right:auto}.workspace-logout{width:100%;margin-top:14px;text-align:left}.workspace-logout:before{content:'↪';margin-right:7px}.bar{gap:10px}.card{transition:transform .22s ease,border-color .22s ease,box-shadow .22s ease}.card:hover{border-color:rgba(237,189,81,.35);box-shadow:0 28px 78px rgba(0,0,0,.48)}.nav button{transition:background .2s,color .2s,transform .2s}.nav button:hover{transform:translateX(3px)}body.light .field,body.light select.field{background:#607d95!important;color:#fff!important;border-color:#607d95!important}body.light .field::placeholder{color:rgba(255,255,255,.78)}body.light .field:focus{background:#526f89!important;border-color:#365a77!important}body.light .bubble.user,body.light .agent-message.user{background:#607d95!important;color:#fff!important}body.light .bubble.user *,body.light .agent-message.user *{color:#fff!important}body.light .workspace-back,body.light .workspace-logout{background:#607d95;color:#fff;border-color:#607d95}body.light .workspace-back:hover,body.light .workspace-logout:hover{background:#526f89}
  `;
  document.head.append(style);

  const rawShowView = window.showView;
  const workspace = document.getElementById('workspace');
  const home = document.getElementById('home');
  const bar = document.querySelector('.bar');
  const sideFooter = document.querySelector('.side-footer');

  function currentView() { return document.querySelector('.view.active')?.id || null; }
  function updateBack() { back.hidden = !currentView(); }
  function goHome() { home.classList.add('active'); workspace.classList.remove('active'); updateBack(); }

  const back = document.createElement('button');
  back.type = 'button'; back.className = 'workspace-back'; back.textContent = '← Back'; back.hidden = true;
  back.onclick = () => history.state?.kvenView ? history.back() : goHome();
  bar.prepend(back);

  window.showView = function (id) {
    const active = currentView();
    if (active !== id) history.pushState({ kvenView: id }, '', `#${id}`);
    rawShowView(id);
    updateBack();
  };

  window.addEventListener('popstate', event => {
    const id = event.state?.kvenView || location.hash.replace('#', '');
    if (id && document.getElementById(id)) rawShowView(id); else goHome();
    updateBack();
  });

  const logOut = document.createElement('button');
  logOut.type = 'button'; logOut.className = 'workspace-logout'; logOut.textContent = 'Log out';
  logOut.onclick = () => { sessionStorage.removeItem('kven-boot-complete'); location.replace('login.html'); };
  sideFooter.after(logOut);

  const initial = location.hash.replace('#', '');
  if (initial && document.getElementById(initial)) rawShowView(initial);
  updateBack();
})();
