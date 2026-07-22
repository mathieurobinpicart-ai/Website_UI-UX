import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathieu Picart — Designer UX/UI",
  description:
    "Portfolio de Mathieu Picart, designer UX/UI et produit : mobilité, interfaces embarquées, web et applications.",
};

const projects = [
  {
    id: "embleme",
    number: "01",
    title: "Renault Emblème",
    type: "Interface embarquée",
    label: "Mobilité · UX/UI",
    description:
      "Une expérience de conduite électrique pensée pour rendre l’autonomie, l’énergie et la navigation immédiatement compréhensibles.",
    visual: "embleme",
  },
  {
    id: "duo",
    number: "02",
    title: "Mobilize DUO",
    type: "Écran véhicule",
    label: "Mobilité · UX/UI",
    description:
      "Une interface compacte et expressive, adaptée à une nouvelle mobilité urbaine et à ses usages essentiels.",
    visual: "duo",
  },
  {
    id: "laura",
    number: "03",
    title: "Laura",
    type: "Site web",
    label: "Web · Direction artistique",
    description:
      "Un site sensible et éditorial qui met en valeur une personnalité, un univers et un récit avec justesse.",
    visual: "laura",
  },
  {
    id: "entomologie",
    number: "04",
    title: "Entomologie",
    type: "Site web",
    label: "Web · Expérience pédagogique",
    description:
      "Une exploration digitale du vivant qui organise des contenus scientifiques sans perdre la curiosité ni l’émerveillement.",
    visual: "ento",
  },
  {
    id: "triskaile",
    number: "05",
    title: "Trisk’aile",
    type: "Application mobile",
    label: "App · UX/UI",
    description:
      "Une application accessible et engageante, conçue pour guider, informer et simplifier l’expérience au quotidien.",
    visual: "trisk",
  },
  {
    id: "cibox",
    number: "06",
    title: "CIBOX",
    type: "Application mobile",
    label: "App · Mobilité partagée",
    description:
      "Un parcours de location de trottinette simple, de la recherche d’un véhicule jusqu’à la fin de course.",
    visual: "cibox",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "embleme") {
    return (
      <div className="screen screen-embleme" aria-hidden="true">
        <div className="screen-top"><span>RENAULT</span><span>18° · 10:45</span></div>
        <div className="embleme-copy"><small>AUTONOMIE ESTIMÉE</small><b>721 <i>km</i></b><span>Conduite efficiente</span></div>
        <div className="road"><span className="road-line left"/><span className="road-line right"/><span className="car-shape"><i/></span></div>
        <div className="energy-bar"><span>Énergie</span><i/><b>86%</b></div>
      </div>
    );
  }
  if (type === "duo") {
    return (
      <div className="screen screen-duo" aria-hidden="true">
        <div className="duo-side"><span>◌</span><span>⌁</span><span>♪</span><span>⚙</span></div>
        <div className="duo-main"><small>BONJOUR MATHIEU</small><b>42</b><span>km/h</span><div className="duo-road"><i/></div></div>
        <div className="duo-card"><small>AUTONOMIE</small><strong>73 km</strong><i/><span>Prochaine destination</span></div>
      </div>
    );
  }
  if (type === "laura") {
    return (
      <div className="web-shot web-laura" aria-hidden="true">
        <div className="web-nav"><b>laura.</b><span>À propos &nbsp; Journal &nbsp; Contact</span></div>
        <div className="laura-copy"><small>PORTRAIT · CRÉATION</small><b>Faire place<br/>aux histoires<br/><em>singulières.</em></b><span>Découvrir son univers →</span></div>
        <div className="laura-art"><i/><span>LAURA</span></div>
      </div>
    );
  }
  if (type === "ento") {
    return (
      <div className="web-shot web-ento" aria-hidden="true">
        <div className="ento-nav"><b>ENTOMO</b><span>COLLECTION &nbsp; TERRAIN &nbsp; CARNET</span></div>
        <div className="ento-copy"><small>ESPÈCE N° 042</small><b>Observer<br/>l’infiniment<br/>petit.</b><span>Explorer la collection ↗</span></div>
        <div className="specimen"><span className="wing wing-a"/><span className="wing wing-b"/><i/><small>CARABUS AURATUS</small></div>
      </div>
    );
  }
  if (type === "trisk") {
    return (
      <div className="app-shot app-trisk" aria-hidden="true">
        <div className="phone phone-a"><div className="notch"/><small>Bonjour Mathieu</small><b>Prêt à prendre<br/>votre envol ?</b><div className="trisk-orbit">✦</div><span>Mon parcours</span><i/></div>
        <div className="app-caption"><span>TRISK’AILE</span><b>Un guide dans la poche,<br/>une expérience qui rassure.</b></div>
      </div>
    );
  }
  return (
    <div className="app-shot app-cibox" aria-hidden="true">
      <div className="map-grid"><i/><i/><i/><i/><i/><i/></div>
      <div className="phone phone-b"><div className="notch"/><small>CIBOX RIDE</small><b>12 véhicules<br/>à proximité</b><div className="mini-map"><span>●</span><span>●</span><span>●</span></div><button>Scanner pour démarrer</button></div>
      <div className="scooter"><span/><i/><b/></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut"><span/>Mathieu Picart</a>
        <nav aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a className="nav-contact" href="#contact">Me contacter ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>Designer UX/UI & Produit</span><span>Lyon · France</span></div>
        <div className="hero-main">
          <h1>Concevoir des expériences <em>utiles,</em><br/> humaines et durables.</h1>
          <div className="hero-note">
            <span className="accent-line"/>
            <p>J’accompagne les équipes et les marques dans la conception de produits et services clairs, sensibles et centrés sur l’humain.</p>
            <a href="#projets">Découvrir mes projets <span>↓</span></a>
          </div>
        </div>
        <div className="hero-index"><span>UX/UI</span><span>DESIGN PRODUIT</span><span>MOBILITÉ</span><span>2026</span></div>
      </section>

      <section className="projects" id="projets">
        <div className="section-heading">
          <p>01 — Sélection</p>
          <h2>Projets choisis</h2>
          <span>Interfaces embarquées, expériences web<br/>et applications mobiles.</span>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index < 2 ? "wide" : ""}`} id={project.id} key={project.id}>
              <div className="project-visual"><ProjectVisual type={project.visual}/><span className="project-number">{project.number}</span></div>
              <div className="project-info">
                <div><p>{project.label}</p><h3>{project.title} <span>— {project.type}</span></h3></div>
                <p className="project-description">{project.description}</p>
                <a href={`#${project.id}`} aria-label={`Voir le projet ${project.title}`}>Voir le projet <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="parcours">
        <div className="section-heading about-heading">
          <p>02 — À propos</p>
          <h2>Du produit physique<br/>à l’expérience numérique.</h2>
        </div>
        <div className="about-intro">
          <p className="large-copy">Designer curieux et polyvalent, je relie <em>usage, forme et technologie</em> pour transformer des situations complexes en expériences simples.</p>
          <div>
            <p>Formé au design industriel à RUBIKA, mon parcours m’a mené du produit à l’interface : Japon, Autriche, Allemagne, puis missions de design UX/UI, motion et 3D en France.</p>
            <p>Cette culture du concret nourrit une approche attentive aux détails, aux contraintes réelles et à la cohérence d’ensemble.</p>
          </div>
        </div>

        <div className="timeline" aria-label="Parcours professionnel">
          <div className="timeline-line"/>
          <article><span>2016</span><i/><small>FORMATION</small><h3>Master 2<br/>Design Engineering Manager</h3><p>ISD / RUBIKA · Valenciennes</p></article>
          <article><span>2016—2019</span><i/><small>DESIGN INDUSTRIEL</small><h3>CIBOX Interactive</h3><p>Produit, packaging, CMF, rendu 3D et exposition.</p></article>
          <article><span>2019</span><i/><small>INTERNATIONAL</small><h3>Mitsubishi Electric<br/>& Studio F. A. Porsche</h3><p>Recherche, prototypage et design produit au Japon, en Autriche et en Allemagne.</p></article>
          <article><span>2019—2024</span><i/><small>INDÉPENDANT</small><h3>Designer créatif</h3><p>UX/UI, mobilité, motion design, animation 3D et transmission.</p></article>
          <article><span>Aujourd’hui</span><i/><small>UX/UI & PRODUIT</small><h3>Concevoir le lien<br/>entre l’humain et l’outil</h3><p>Interfaces embarquées, sites et applications.</p></article>
        </div>

        <div className="skills-row">
          <p>Savoir-faire</p>
          <div><span>UX Research</span><span>Design Thinking</span><span>UI Design</span><span>Prototypage</span><span>Motion</span><span>3D & CGI</span><span>CMF</span><span>Direction artistique</span></div>
        </div>
      </section>

      <footer id="contact">
        <p>03 — Contact</p>
        <div className="footer-main">
          <h2>Une idée à rendre<br/><em>évidente ?</em></h2>
          <div><p>Parlons de votre prochain produit, service ou expérience.</p><a href="mailto:mathieu.robin.picart@gmail.com">mathieu.robin.picart@gmail.com <span>↗</span></a></div>
        </div>
        <div className="footer-bottom"><span>Mathieu Picart — Designer UX/UI</span><a href="#top">Retour en haut ↑</a><span>© 2026</span></div>
      </footer>
    </main>
  );
}
