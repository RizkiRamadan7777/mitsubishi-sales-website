:root {
  --bg: #121212;
  --surface: #1e1e1e;
  --surface-light: #2a2a2a;
  --text: #e0e0e0;
  --accent: #e60012;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Poppins', sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
.container { max-width: 1200px; margin: auto; padding: 0 1rem; }
a { text-decoration: none; }
.header { background: var(--surface); position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.nav-container { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; }
.logo { color: var(--accent); font-size: 1.75rem; font-weight: bold; }
.nav-links { list-style: none; display: flex; gap: 1.5rem; }
.nav-links a { color: var(--text); transition: color 0.3s; }
.nav-links a:hover, .nav-links a.active { color: var(--accent); }

/* Buttons */
.btn-primary { display: inline-block; padding: 0.75rem 1.5rem; background: var(--accent); color: #fff; border-radius: 0.5rem; transition: background 0.3s; }
.btn-primary:hover { background: #b3000f; }

/* Cards */
.card { background: var(--surface-light); border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.7); transition: transform 0.3s; }
.card:hover { transform: translateY(-5px); }
.card img { width: 100%; display: block; }
.card h2, .card h3, .card h4 { color: var(--accent); margin: 1rem; }
.card p, .card span { margin: 0 1rem 1rem; }

/* Hero */
.hero { background: url('../assets/images/hero-bg.jpg') center/cover no-repeat; padding: 4rem 0; }
.hero-card { background: rgba(0,0,0,0.5); padding: 2rem; border-radius: 1rem; text-align: center; }
.hero-card h1 { color: #fff; margin-bottom: 1rem; }
.hero-card p { color: #ddd; margin-bottom: 1.5rem; }

/* Grid Layouts */
.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
.promo-grid { display: grid; grid-auto-flow: column; grid-auto-columns: 300px; gap: 1rem; overflow-x: auto; padding-bottom: 1rem; }

/* Footer */
.footer { background: var(--surface); padding: 3rem 0 1rem; }
.footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; }
.footer-card { padding: 1.5rem; }
.footer-map-card iframe { width: 100%; height: 150px; border: 0; border-radius: 0.5rem; }
.footer-copy { text-align: center; margin-top: 1.5rem; color: #888; font-size: 0.9rem; }

/* WhatsApp Button */
.whatsapp-float { position: fixed; bottom: 1rem; right: 1rem; width: 3.5rem; height: 3.5rem; }
