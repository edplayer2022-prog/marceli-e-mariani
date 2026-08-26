'use client';

import {FormEvent, useState} from 'react';
import {
  ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Instagram,
  Mail, Menu, Music2, Play, Quote, Send, Sparkles, X
} from 'lucide-react';

const instagram = 'https://www.instagram.com/marcelliemariani/';
const whatsapp = '15085075431';

const navItems = [
  ['Início','inicio'],['Sobre','sobre'],['Repertório','musica'],
  ['Agenda','agenda'],['Galeria','galeria'],['Contato','contato']
];

const gallery = [
  {label:'Show especial',src:'/marceli-e-mariani/images/show-america.jpg'},
  {label:'Marcelli & Mariani ao vivo',src:'/marceli-e-mariani/images/show-logo.jpg'},
  {label:'Entre irmãs',src:'/marceli-e-mariani/images/portrait-sisters.jpg'},
  {label:'Por trás das câmeras',src:'/marceli-e-mariani/images/behind-camera.jpg'},
  {label:'Encontros',src:'/marceli-e-mariani/images/backstage-guests.jpg'},
  {label:'Juntas no palco',src:'/marceli-e-mariani/images/show-together.jpg'},
  {label:'Alegria no palco',src:'/marceli-e-mariani/images/performance-green.jpg'},
];

export default function Home(){
  const[menuOpen,setMenuOpen]=useState(false);
  const[galleryIndex,setGalleryIndex]=useState(0);
  const[sent,setSent]=useState(false);

  const scrollTo=(id:string)=>{
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
    setMenuOpen(false);
  };

  function requestBooking(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const message=[
      'Olá! Gostaria de consultar a disponibilidade de Marcelli & Mariani.',
      '',
      `Nome: ${data.get('name')}`,
      `E-mail: ${data.get('email')}`,
      `Telefone: ${data.get('phone') || 'Não informado'}`,
      `Cidade: ${data.get('city')}`,
      `Data: ${data.get('date') || 'A definir'}`,
      `Evento: ${data.get('message')}`,
    ].join('\n');
    setSent(true);
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  }

  return <main>
    <header className="site-header">
      <button className="wordmark" onClick={()=>scrollTo('inicio')} aria-label="Ir para o início">MARCELLI <span>& MARIANI</span></button>
      <nav className={menuOpen?'nav open':'nav'} aria-label="Navegação principal">
        {navItems.map(([label,id])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}
        <button className="nav-cta" onClick={()=>scrollTo('contato')}>Contrate</button>
      </nav>
      <button className="menu-button" aria-label="Abrir menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-shade"/>
      <div className="hero-photos" aria-hidden="true"><i/><i/><i/></div>
      <div className="hero-content reveal">
        <p className="eyebrow"><span/> IRMÃS · CANTORAS · ARTISTAS</p>
        <h1>Duas vozes.<br/>Uma <em>história.</em></h1>
        <p className="hero-copy">Harmonia, presença e a conexão de duas irmãs<br className="desktop-only"/> que nasceram para dividir o palco.</p>
        <div className="hero-actions">
          <button className="primary" onClick={()=>scrollTo('video')}><Play fill="currentColor"/> Ver apresentações</button>
          <button className="text-button" onClick={()=>scrollTo('contato')}><Send/> Contratar para eventos</button>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="socials"><a href={instagram} target="_blank" rel="noreferrer">IG</a><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WA</a></div>
        <button className="scroll-cue" onClick={()=>scrollTo('sobre')}>CONHEÇA A DUPLA <ArrowDown/></button><span>BRASIL · ESTADOS UNIDOS · AO VIVO</span>
      </div>
    </section>

    <section className="manifesto section" id="sobre">
      <div className="section-kicker">01 — SOBRE</div>
      <div className="manifesto-grid">
        <h2>Uma conexão<br/>que se <em>ouve.</em></h2>
        <div className="bio">
          <Quote/>
          <p className="lead">Marcelli & Mariani transformam a cumplicidade de duas irmãs em música, presença e alegria.</p>
          <p>Brasileiras nos Estados Unidos, elas levam ao palco um repertório de covers brasileiros e internacionais com harmonias próprias e uma interpretação cheia de personalidade. O resultado é um show próximo, versátil e feito para cantar junto.</p>
          <button className="line-link" onClick={()=>scrollTo('galeria')}>Veja momentos da dupla <ArrowRight/></button>
          <div className="numbers"><div><b>21K+</b><span>seguidores</span></div><div><b>BR + US</b><span>duas culturas</span></div><div><b>100%</b><span>música ao vivo</span></div></div>
        </div>
      </div>
    </section>

    <section className="release section" id="musica">
      <div className="release-art" aria-label="Identidade visual de Marcelli e Mariani"><div className="sun"/><div className="cover-name">MARCELLI & MARIANI</div><div className="cover-title">NOSSO<br/><i>SOM</i></div><span>BRASIL · USA</span></div>
      <div className="release-info">
        <div className="section-kicker">02 — REPERTÓRIO</div>
        <h2>Música para<br/><em>celebrar junto</em></h2>
        <p>Um repertório pensado para criar conexão com públicos diferentes e acompanhar cada momento do evento.</p>
        <div className="repertoire-list">
          <article><span>01</span><div><b>Sucessos brasileiros</b><small>Canções conhecidas, afeto e identidade.</small></div></article>
          <article><span>02</span><div><b>Hits internacionais</b><small>Música que atravessa idiomas e gerações.</small></div></article>
          <article><span>03</span><div><b>Pedidos especiais</b><small>Repertório alinhado ao perfil do seu evento.</small></div></article>
        </div>
        <a className="repertoire-cta" href={instagram} target="_blank" rel="noreferrer"><Instagram/> Assista no Instagram <ArrowRight/></a>
      </div>
    </section>

    <section className="video-section has-embed" id="video">
      <div className="video-copy"><div className="section-kicker light">03 — MÚSICA & VÍDEO</div><h2>Dê o play.<br/>Sinta essa<br/><em>conexão.</em></h2><p>Assista e ouça Marcelli & Mariani sem sair do site.</p><a className="youtube-link" href="https://youtu.be/qDVRFyg_iKc" target="_blank" rel="noreferrer">Abrir no YouTube <ArrowRight/></a></div>
      <div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/qDVRFyg_iKc?rel=0" title="Marcelli & Mariani — apresentação musical" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"/></div>
    </section>

    <section className="agenda section" id="agenda">
      <div className="heading-row"><div><div className="section-kicker">04 — AGENDA</div><h2>Próximos <em>encontros</em></h2></div><p>Novas datas<br/>em preparação.</p></div>
      <div className="agenda-empty"><Music2/><div><h3>Novas datas serão anunciadas em breve.</h3><p>Acompanhe o Instagram para receber as próximas informações de shows.</p></div><a href={instagram} target="_blank" rel="noreferrer">Acompanhar agenda <ArrowRight/></a></div>
    </section>

    <section className="gallery section" id="galeria">
      <div className="heading-row"><div><div className="section-kicker light">05 — GALERIA</div><h2>Palco, encontros<br/>e <em>memórias.</em></h2></div><div className="gallery-controls"><button aria-label="Foto anterior" onClick={()=>setGalleryIndex((galleryIndex+gallery.length-1)%gallery.length)}><ChevronLeft/></button><span>0{galleryIndex+1} / 0{gallery.length}</span><button aria-label="Próxima foto" onClick={()=>setGalleryIndex((galleryIndex+1)%gallery.length)}><ChevronRight/></button></div></div>
      <div className="gallery-strip" style={{transform:`translateX(-${galleryIndex*16.5}%)`}}>{gallery.map((item,i)=><figure className={i===galleryIndex?'active':''} key={item.label}><div style={{backgroundImage:`linear-gradient(0deg,#26191d55,#26191d22),url('${item.src}')`,backgroundPosition:'center'}}/><figcaption>{item.label}</figcaption></figure>)}</div>
    </section>

    <section className="press section"><div><Sparkles/><div><span>PRODUÇÃO, IMPRENSA E PARCERIAS</span><h3>Material profissional</h3><p>Biografia, fotos oficiais e informações para produção estão disponíveis mediante solicitação.</p></div></div><button onClick={()=>scrollTo('contato')}><Mail/> Solicitar material</button></section>

    <section className="contact section" id="contato">
      <div className="contact-copy"><div className="section-kicker light">06 — CONTRATAÇÃO</div><h2>Leve essa<br/>energia para<br/><em>o seu evento.</em></h2><p>Shows em restaurantes, festivais, festas privadas, eventos corporativos e celebrações nos Estados Unidos.</p><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><Mail/> +1 (508) 507-5431</a></div>
      <form onSubmit={requestBooking}>
        <label>SEU NOME<input required name="name" placeholder="Como podemos chamar você?"/></label>
        <div className="form-row"><label>E-MAIL<input required type="email" name="email" placeholder="voce@empresa.com"/></label><label>TELEFONE<input name="phone" placeholder="(000) 000-0000"/></label></div>
        <div className="form-row"><label>CIDADE<input required name="city" placeholder="Onde será o evento?"/></label><label>DATA<input type="date" name="date"/></label></div>
        <label>CONTE SOBRE O EVENTO<textarea required name="message" placeholder="Tipo de evento, público estimado, duração e outras informações..."/></label>
        <button className="send" type="submit">Solicitar pelo WhatsApp <Send/></button>
        {sent&&<div className="success"><Check/> O WhatsApp foi aberto com sua solicitação preenchida.</div>}
      </form>
    </section>

    <section className="newsletter section"><div><Instagram/><span>SHOWS, COVERS E BASTIDORES</span><h2>Acompanhe<br/>de perto.</h2></div><a className="instagram-follow" href={instagram} target="_blank" rel="noreferrer">@marcelliemariani <ArrowRight/></a></section>

    <footer><div className="footer-name">MARCELLI <i>& MARIANI</i></div><div className="footer-social"><a href={instagram} target="_blank" rel="noreferrer"><Instagram/> Instagram</a><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><Send/> WhatsApp</a></div><div className="footer-bottom"><span>© 2026 MARCELLI & MARIANI · TODOS OS DIREITOS RESERVADOS</span><button onClick={()=>scrollTo('inicio')}>VOLTAR AO TOPO ↑</button></div></footer>
    <a className="whatsapp" href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Olá! Gostaria de informações sobre a contratação de Marcelli & Mariani.')}`} target="_blank" rel="noreferrer" aria-label="Contato pelo WhatsApp"><span>WA</span></a>
  </main>;
}

