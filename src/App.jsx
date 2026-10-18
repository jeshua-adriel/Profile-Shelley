import { useState, useCallback, useEffect } from "react";
import Intro from "./components/intro";
import Corners from "./components/corners";
import StarField from "./components/starField";
import Section from "./components/section";
import Portrait from "./components/portrait";
import { profile, press, music, accomplishments, bands, contact, heroImages } from "./data/siteData";
import "./App.css";

const nav = [
  ["about", "About"],
  ["press", "In the press"],
  ["music", "Music"],
  ["achievements", "Accomplishments"],
  ["bands", "Bands"],
  ["contact", "Contact"],
];

export default function App() {
  const [ready, setReady] = useState(false); // site content starts popping in
  const [introOn, setIntroOn] = useState(true); // intro overlay still mounted
  const reveal = useCallback(() => setReady(true), []);
  const finish = useCallback(() => setIntroOn(false), []);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`app${ready ? " ready" : ""}`}>
      {introOn && <Intro onReveal={reveal} onDone={finish} />}
      {ready && <Corners />}
      <StarField />

      <header className={`topbar${menuOpen ? " menu-open" : ""}`}>
        <a href="#top" className="brand">{profile.name}</a>
        <button
          className="menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav id="main-nav" aria-label="Main">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* HERO: the sun and moon flank her name */}
        <section className="hero">
          <div className="orb sun" tabIndex={0} role="img" aria-label="The sun. Hover to reveal an image.">
            <span className="rays" />
            <span className="corona" />
            <span className="orb-face">
              <span
                className={`orb-image${heroImages.sun ? "" : " vivid-sun"}`}
                style={heroImages.sun ? { backgroundImage: `url(${heroImages.sun})` } : undefined}
              />
            </span>
          </div>
          <div className="orb moon" tabIndex={0} role="img" aria-label="The moon. Hover to reveal an image.">
            <span className="orb-face">
              <span
                className={`orb-image${heroImages.moon ? "" : " vivid-moon"}`}
                style={heroImages.moon ? { backgroundImage: `url(${heroImages.moon})` } : undefined}
              />
            </span>
          </div>
          <div className="hero-text">
            <p className="hero-title">{profile.title}</p>
            <h1>{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#music">Listen now</a>
              <a className="btn" href="#contact">Book a show</a>
            </div>
            <p className="hint">Hover over (or tap) the sun and moon.</p>
          </div>
        </section>

        <Section id="about" title="About">
          <div className="about">
            <Portrait src={profile.photo} alt={`Portrait of ${profile.name}`} />
            <div>
              {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </Section>

        <Section id="press" title="In the zone">
          <p className="lead">Special highlights of events, gigs, and competitions.</p>
          <ul className="link-list">
            {press.map((item, i) => (
              <li key={i}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <strong>{item.title}</strong>
                  <span>{item.outlet}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="music" title="Music">
          <div className="chips">
            {music.genres.map((g) => <span key={g} className="chip">{g}</span>)}
          </div>

          <div className="music-grid">
            <div>
              <h3>Favourite Songs</h3>
              <ol className="tracks">
                {music.tracks.map((t, i) => (
                  <li key={i}>
                    <a href={t.url} target="_blank" rel="noreferrer">
                      <span className="track-title">{t.title}</span>
                      <span className="track-meta">{t.artist}</span>
                      <span className="track-meta">{t.genre}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3>Play it here</h3>
              {music.spotifyPlaylistId ? (
                <iframe
                  title="Shelley's Spotify playlist"
                  className="player"
                  src={`https://open.spotify.com/embed/playlist/${music.spotifyPlaylistId}`}
                  allow="encrypted-media"
                  loading="lazy"
                />
              ) : (
                <p className="empty">Add her Spotify playlist ID in siteData.js to show a player here.</p>
              )}
              <div className="platforms">
                {music.platforms.map((p) => (
                  <a key={p.label} className="btn" href={p.url} target="_blank" rel="noreferrer">{p.label}</a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="achievements" title="Accomplishments">
          <ol className="timeline">
            {accomplishments.map((a, i) => (
              <li key={i}>
                <span className="year">{a.year}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="bands" title="Bands">
          <div className="band-grid">
            {bands.map((b, i) => (
              <div key={i} className="band-card-wrapper">
                <a className="band" href={b.url} target="_blank" rel="noreferrer">
                  <h3>{b.name}</h3>
                  <p className="band-meta">{b.role}, {b.years}</p>
                  <p>{b.about}</p>
                </a>
                
                {/* Render specific photos based on the band name */}
                <div className="band-gridphoto">
                  {b.name === "Moon Serenade" && (
                    <>
                      <img src="/moonserenade1.jpg" alt="Moon Serenade photo 1" />
                      <img src="/moonserenade2.jpg" alt="Moon Serenade photo 2" />
                    </>
                  )}
                  {b.name === "Echo Vibes" && (
                    <>
                      <img src="/echovibe1.jpg" alt="Echo Vibes photo 1" />
                      <img src="/echovibe2.jpg" alt="Echo Vibes photo 2" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contact">
            <div>
              <p className="lead">For bookings, collaborations, and events.</p>
              <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
              <p><a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a></p>
            </div>
            <div className="platforms">
              {contact.socials.map((s) => (
                <a key={s.label} className="btn" href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
}