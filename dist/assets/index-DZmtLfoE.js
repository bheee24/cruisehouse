(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{time:`11TH · FRIDAY`,title:`Pool Party`,detail:`House party by the pool to start the weekend.`,tag:`100K men · 70K ladies`,icon:`◌`},{time:`12TH · SATURDAY`,title:`Beach / Yacht Party`,detail:`Cruise the coast, catch the sun, and make a night of it.`,tag:`Yacht / beach cruise`,icon:`⌁`},{time:`13TH · SUNDAY`,title:`Checking Out`,detail:`One last morning together before the weekend closes.`,tag:`Good vibes guaranteed`,icon:`↗`}],t=document.querySelector(`#app`);t.innerHTML=`
  <main class="page-shell">
    <nav class="topbar" aria-label="Main navigation">
      <a class="brand" href="#top" aria-label="Cruise House home">
        <img class="brand-logo" src="/cruise-house-logo.svg" alt="Cruise House" />
        <span>Cruise House</span>
      </a>
      <div class="nav-links">
        <a href="#activities">What's on</a>
        <a href="#members">Members</a>
        <a class="nav-pill" href="#join">Join the house <span>↗</span></a>
      </div>
    </nav>

    <section class="hero" id="top">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Upcoming event · Dec 11–13</p>
        <h1>All White<br /><em>Party weekend.</em></h1>
        <p class="intro">Good vibes. Great people. Unforgettable memories. Three days of house, pool, beach, and yacht energy with the Cruise Houx crew.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#join">Join the house <span>↓</span></a>
          <a class="text-link" href="#activities">See the itinerary <span>↘</span></a>
        </div>
        <div class="member-proof">
          <div class="avatar-stack" aria-hidden="true"><span class="avatar a-one">MJ</span><span class="avatar a-two">AO</span><span class="avatar a-three">KN</span><span class="avatar a-four">+</span></div>
          <p><strong>Limited spots</strong><br />men 100K · ladies 70K</p>
        </div>
      </div>
      <div class="hero-art event-poster-wrap" aria-label="All White Party event flyer">
        <img class="event-flyer event-flyer-image" src="/event-flyer.jpg" alt="Cruise Houx All White Party flyer for December 11th to December 13th" />
      </div>
    </section>

    <section class="lower-grid" id="join">
      <div class="join-panel">
        <p class="section-kicker">New around here?</p>
        <h2>Join the house.</h2>
        <p class="section-copy">Tell us a little about yourself and we’ll welcome you into the Cruise House community. This is for joining the group, not event registration.</p>
        <form id="join-form" class="join-form">
          <div class="form-grid">
            <div class="field field-wide"><label for="name">Your name <span>*</span></label><input id="name" name="name" placeholder="e.g. Jamie Okoro" autocomplete="name" required /></div>
            <div class="field"><label for="what-you-do">What you do</label><input id="what-you-do" name="whatYouDo" placeholder="e.g. Designer" /></div>
            <div class="field"><label for="social">Social media</label><input id="social" name="social" placeholder="@yourhandle" autocomplete="off" /></div>
            <div class="field field-wide"><label for="discovery">How did you hear about the group?</label><select id="discovery" name="discovery"><option value="" selected disabled>Choose one</option><option>Friend or member</option><option>Instagram</option><option>WhatsApp</option><option>Event or party</option><option>Other</option></select></div>
            <div class="field"><label for="likes">Your likes</label><textarea id="likes" name="likes" placeholder="Music, food, travel..." rows="2"></textarea></div>
            <div class="field"><label for="dislikes">Your dislikes</label><textarea id="dislikes" name="dislikes" placeholder="Bad vibes? Say less." rows="2"></textarea></div>
            <div class="field field-wide"><label for="vibe">What vibe are you bringing?</label><textarea id="vibe" name="vibe" placeholder="The energy you want people to feel around you..." rows="2"></textarea></div>
          </div>
          <div class="form-submit"><p class="form-note" id="form-note">No pressure, no awkward mixers. Just good people and good energy.</p><button class="button button-primary" type="submit">Join Cruise House <span>↗</span></button></div>
        </form>
      </div>
      <div class="activity-panel" id="activities">
        <div class="panel-heading"><div><p class="section-kicker">The weekend itinerary</p><h2>All White Party</h2></div><span class="live-badge"><span></span> live</span></div>
        <div class="activity-list">${e.map((e,t)=>`<article class="activity ${t===0?`featured`:``}"><div class="activity-icon">${e.icon}</div><div class="activity-info"><p class="activity-time">${e.time}</p><h3>${e.title}</h3><p>${e.detail}</p><span class="activity-tag">${e.tag}</span></div><button class="activity-arrow" aria-label="Join ${e.title}" data-activity="${e.title}">↗</button></article>`).join(``)}</div>
      </div>
    </section>

    <section class="gallery-section" id="moments" aria-labelledby="moments-title">
      <div class="gallery-heading">
        <div><p class="section-kicker">A new picture place</p><h2 id="moments-title">Bring your kind of fun.</h2></div>
        <p>Little snapshots of the energy we bring together.</p>
      </div>
      <div class="gallery" data-gallery tabindex="0">
        <div class="gallery-track">
          <article class="gallery-slide is-active"><img src="/poolparty.jpg" onerror="this.onerror=null;this.src='/gallery-fun.svg'" alt="Black friends dancing and enjoying a lively pool party" /><div class="gallery-caption"><span>01</span><strong>Pool party</strong><p>Sun, water, and your people.</p></div></article>
          <article class="gallery-slide"><img src="/houseparty.jpg" onerror="this.onerror=null;this.src='/gallery-party.svg'" alt="A large crowd enjoying a lively house party at night" /><div class="gallery-caption"><span>02</span><strong>House party</strong><p>Bring your energy to the room.</p></div></article>
          <article class="gallery-slide"><img src="/boat-cruise.jpg" onerror="this.onerror=null;this.src='/boat-party-people.svg'" alt="A group of friends partying together on a yacht at sunset" /><div class="gallery-caption"><span>03</span><strong>Boat cruise</strong><p>Open water, shared stories.</p></div></article>
        </div>
        <div class="gallery-controls" aria-label="Gallery controls"><button class="gallery-arrow" type="button" data-gallery-prev aria-label="Previous picture">←</button><div class="gallery-dots"><button class="gallery-dot is-active" type="button" data-gallery-dot="0" aria-label="Show Fun picture"></button><button class="gallery-dot" type="button" data-gallery-dot="1" aria-label="Show Party picture"></button><button class="gallery-dot" type="button" data-gallery-dot="2" aria-label="Show Cruise picture"></button></div><button class="gallery-arrow" type="button" data-gallery-next aria-label="Next picture">→</button></div>
      </div>
    </section>

    <section class="members-strip" id="members">
      <p class="section-kicker">A few faces from the house</p>
      <div class="member-quotes"><div><span class="quote-mark">“</span><p>It feels like the group chat finally became a real place.</p><strong>— Morgan, 2 years in</strong></div><div><span class="quote-mark">“</span><p>I came for the swims. I stayed for every person.</p><strong>— Alex, 6 months in</strong></div><div class="member-cta"><p>New face?<br /><strong>You belong here.</strong></p><a href="#join">Say hello ↗</a></div></div>
    </section>
    <footer><span>© Cruise House</span><span>Made for good company <span class="footer-spark">✦</span></span></footer>
  </main>
`;var n=document.querySelector(`#join-form`),r=document.querySelector(`#name`),i=document.querySelector(`#form-note`);n.addEventListener(`submit`,e=>{e.preventDefault();let t=r.value.trim();t&&(i.innerHTML=`<strong>Welcome to the house, ${t}.</strong> Your member profile is in.`,i.classList.add(`success`),n.querySelector(`button`).innerHTML=`You’re in <span>✓</span>`,n.querySelectorAll(`input, textarea`).forEach(e=>{e.disabled=!0}))}),document.querySelectorAll(`[data-activity]`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.add(`joined`),e.textContent=`✓`,e.setAttribute(`aria-label`,`Joined ${e.dataset.activity}`)})});var a=document.querySelector(`[data-gallery]`),o=[...document.querySelectorAll(`.gallery-slide`)],s=[...document.querySelectorAll(`.gallery-dot`)],c=0,l,u=e=>{c=(e+o.length)%o.length,o.forEach((e,t)=>e.classList.toggle(`is-active`,t===c)),s.forEach((e,t)=>{e.classList.toggle(`is-active`,t===c),e.setAttribute(`aria-current`,t===c?`true`:`false`)})},d=()=>{l=window.setInterval(()=>u(c+1),3e3)},f=()=>window.clearInterval(l),p=()=>{f(),d()};document.querySelector(`[data-gallery-prev]`).addEventListener(`click`,()=>{u(c-1),p()}),document.querySelector(`[data-gallery-next]`).addEventListener(`click`,()=>{u(c+1),p()}),s.forEach(e=>e.addEventListener(`click`,()=>{u(Number(e.dataset.galleryDot)),p()})),a.addEventListener(`mouseenter`,f),a.addEventListener(`mouseleave`,d),a.addEventListener(`focusin`,f),a.addEventListener(`focusout`,e=>{a.contains(e.relatedTarget)||d()}),d();