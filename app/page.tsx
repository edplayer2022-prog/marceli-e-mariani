'use client';

import {FormEvent, useEffect, useRef, useState} from 'react';
import {
  ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Download, Instagram,
  Mail, MapPin, Menu, Music2, Pause, Play, Quote, Send, Sparkles, Ticket,
  Volume2, X, Youtube
} from 'lucide-react';

const navItems = [['InÃ­cio','inicio'],['Sobre','sobre'],['MÃºsica','musica'],['Agenda','agenda'],['Galeria','galeria'],['Contato','contato']];
const shows = [
  {day:'15',month:'PRÃ“X.',city:'Vineyard Grill, MA',venue:'13 Beach Street Extension',type:'Show ao vivo'},
];
const gallery = [
  {label:'Ao vivo',pos:'66% center'},
  {label:'Entre irmÃ£s',pos:'78% center'},
  {label:'Nossa histÃ³ria',pos:'55% 25%'},
];

export default function Home(){
  const[menuOpen,setMenuOpen]=useState(false);
  const[playing,setPlaying]=useState(false);
  const[progress,setProgress]=useState(34);
  const[galleryIndex,setGalleryIndex]=useState(0);
  const[formSent,setFormSent]=useState(false);
  const timer=useRef<ReturnType<typeof setInterval>|null>(null);

  useEffect(()=>{
    if(playing) timer.current=setInterval(()=>setProgress(value=>value>=98?0:value+.4),300);
    return()=>{if(timer.current)clearInterval(timer.current)};
  },[playing]);

  const scrollTo=(id:string)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenuOpen(false)};
  function submitForm(event:FormEvent<HTMLFormElement>){event.preventDefault();setFormSent(true);event.currentTarget.reset();setTimeout(()=>setFormSent(false),4500)}

  return <main>
    <header className="site-header">
      <button className="wordmark" onClick={()=>scrollTo('inicio')} aria-label="Ir para o inÃ­cio">MARCELLI <span>& MARIANI</span></button>
      <nav className={menuOpen?'nav open':'nav'} aria-label="NavegaÃ§Ã£o principal">
        {navItems.map(([label,id])=><button key={id} onClick={()=>scrollTo(id)}>{label}</button>)}
        <button className="nav-cta" onClick={()=>scrollTo('contato')}>Contrate</button>
      </nav>
      <button className="menu-button" aria-label="Abrir menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-shade"/>
      <div className="hero-content reveal">
        <p className="eyebrow"><span/> IRMÃƒS Â· CANTORAS Â· ARTISTAS</p>
        <h1>Duas vozes.<br/>Uma sÃ³ <em>histÃ³ria.</em></h1>
        <p className="hero-copy">MÃºsica que atravessa fronteiras e aproxima coraÃ§Ãµes.<br className="desktop-only"/> Do Brasil para os Estados Unidos.</p>
        <div className="hero-actions">
          <button className="primary" onClick={()=>scrollTo('musica')}><Play fill="currentColor"/> Ouvir agora</button>
          <button className="text-button" onClick={()=>scrollTo('video')}><Youtube/> Assistir ao clipe</button>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="socials"><a href="#contato">IG</a><a href="#video">YT</a><a href="#musica">SP</a><a href="#contato">TK</a></div>
        <button className="scroll-cue" onClick={()=>scrollTo('sobre')}>CONHEÃ‡A A DUPLA <ArrowDown/></button><span>BRASIL Â· USA Â· AO VIVO</span>
      </div>
    </section>

    <section className="manifesto section" id="sobre">
      <div className="section-kicker">01 â€” SOBRE</div>
      <div className="manifesto-grid">
        <h2>Unidas pela vida.<br/>Ligadas pela <em>mÃºsica.</em></h2>
        <div className="bio">
          <Quote/><p className="lead">Marcelli & Mariani sÃ£o irmÃ£s brasileiras que encontraram na mÃºsica uma forma de celebrar suas raÃ­zes e construir novas memÃ³rias nos Estados Unidos.</p>
          <p>Com vozes que se completam e uma presenÃ§a leve e verdadeira, a dupla interpreta covers e canÃ§Ãµes que atravessam geraÃ§Ãµes. Cada apresentaÃ§Ã£o Ã© um encontro prÃ³ximo com o pÃºblico â€” feito de harmonia, afeto e alegria.</p>
          <button className="line-link">ConheÃ§a a histÃ³ria completa <ArrowRight/></button>
          <div className="numbers"><div><b>21K+</b><span>seguidores</span></div><div><b>BR â†” US</b><span>duas culturas</span></div><div><b>2</b><span>vozes, um coraÃ§Ã£o</span></div></div>
        </div>
      </div>
    </section>

    <section className="release section" id="musica">
      <div className="release-art" aria-label="Arte musical da dupla Marcelli e Mariani"><div className="sun"/><div className="cover-name">MARCELLI & MARIANI</div><div className="cover-title">DUAS<br/><i>VOZES</i></div><span>BRASIL Â· USA</span></div>
      <div className="release-info">
        <div className="section-kicker">02 â€” NOSSA MÃšSICA</div><h2>Vozes que se <em>encontram</em></h2>
        <p>Harmonias feitas em famÃ­lia, repertÃ³rio brasileiro e internacional e uma energia que transforma cada show em celebraÃ§Ã£o.</p>
        <div className="player">
          <button className="play-main" onClick={()=>setPlaying(!playing)} aria-label={playing?'Pausar':'Tocar'}>{playing?<Pause fill="currentColor"/>:<Play fill="currentColor"/>}</button>
          <div className="track-meta"><b>Covers & canÃ§Ãµes</b><span>Marcelli & Mariani Â· Ao vivo</span><button className="track" onClick={()=>setProgress(0)}><i style={{width:`${progress}%`}}/></button></div>
          <span className="duration">LIVE</span><Volume2/>
        </div>
        <div className="platforms"><span>OUÃ‡A TAMBÃ‰M</span><button>Spotify</button><button>Apple Music</button><button>Deezer</button></div>
      </div>
    </section>

    <section className="video-section" id="video">
      <div className="video-copy"><div className="section-kicker light">03 â€” AO VIVO</div><h2>MÃºsica feita<br/>para viver<br/><em>juntos.</em></h2></div>
      <button className="video-play" onClick={()=>scrollTo('contato')} aria-label="Assistir aos vÃ­deos no Instagram"><Play fill="currentColor"/></button>
      <div className="video-caption"><span>MARCELLI & MARIANI</span><small>Assista aos covers e apresentaÃ§Ãµes</small></div>
    </section>

    <section className="agenda section" id="agenda">
      <div className="heading-row"><div><div className="section-kicker">04 â€” AO VIVO</div><h2>PrÃ³ximos <em>shows</em></h2></div><p>Encontre a gente<br/>no caminho.</p></div>
      <div className="show-list">{shows.map((show,i)=><article className="show" key={show.venue}>
        <div className="date"><b>{show.day}</b><span>{show.month}</span></div><div className="location"><b>{show.city}</b><span><MapPin/> {show.venue}</span></div><span className="show-type">{show.type}</span>
        <button onClick={()=>scrollTo('contato')}><Ticket/> InformaÃ§Ãµes <ArrowRight/></button>
      </article>)}</div><button className="all-dates">VER TODAS AS DATAS <ArrowRight/></button>
    </section>

    <section className="gallery section" id="galeria">
      <div className="heading-row"><div><div className="section-kicker light">05 â€” GALERIA</div><h2>Entre palcos<br/>e <em>memÃ³rias.</em></h2></div><div className="gallery-controls"><button onClick={()=>setGalleryIndex((galleryIndex+2)%3)}><ChevronLeft/></button><span>0{galleryIndex+1} / 03</span><button onClick={()=>setGalleryIndex((galleryIndex+1)%3)}><ChevronRight/></button></div></div>
      <div className="gallery-strip" style={{transform:`translateX(-${galleryIndex*28}%)`}}>{gallery.map((item,i)=><figure className={i===galleryIndex?'active':''} key={item.label}><div style={{backgroundPosition:item.pos}}/><figcaption>{item.label}</figcaption></figure>)}</div>
    </section>

    <section className="press section"><div><Sparkles/><div><span>MATERIAL PARA IMPRENSA E PRODUÃ‡ÃƒO</span><h3>Press kit oficial</h3><p>Bio, fotos em alta, release, mapa de palco e rider tÃ©cnico.</p></div></div><button onClick={()=>alert('Press kit de demonstraÃ§Ã£o â€” conecte seu arquivo final aqui.')}><Download/> Baixar press kit</button></section>

    <section className="contact section" id="contato">
      <div className="contact-copy"><div className="section-kicker light">06 â€” CONTATO</div><h2>Vamos criar<br/>uma noite<br/><em>inesquecÃ­vel?</em></h2><p>Shows, restaurantes, festivais, eventos privados e parcerias nos Estados Unidos. Conte um pouco sobre o seu evento.</p><a href="#contato"><Mail/> Contato via Instagram</a></div>
      <form onSubmit={submitForm}>
        <label>SEU NOME<input required name="name" placeholder="Como podemos chamar vocÃª?"/></label>
        <div className="form-row"><label>E-MAIL<input required type="email" name="email" placeholder="voce@empresa.com"/></label><label>TELEFONE<input name="phone" placeholder="(00) 00000-0000"/></label></div>
        <div className="form-row"><label>CIDADE<input required name="city" placeholder="Onde serÃ¡ o evento?"/></label><label>DATA<input type="date" name="date"/></label></div>
        <label>SOBRE O EVENTO<textarea required name="message" placeholder="Tipo de evento, pÃºblico estimado e outras informaÃ§Ãµes..."/></label>
        <button className="send" type="submit">Solicitar orÃ§amento <Send/></button>{formSent&&<div className="success"><Check/> Mensagem recebida. Nossa equipe retorna em breve.</div>}
      </form>
    </section>

    <section className="newsletter section"><div><Music2/><span>BASTIDORES, DATAS E NOVIDADES</span><h2>Mais perto<br/>da nossa mÃºsica.</h2></div><form onSubmit={e=>{e.preventDefault();alert('VocÃª entrou para a nossa lista!')}}><input required type="email" placeholder="Seu melhor e-mail"/><button aria-label="Cadastrar e-mail"><ArrowRight/></button></form></section>

    <footer><div className="footer-name">MARCELLI <i>& MARIANI</i></div><div className="footer-social"><a href="#inicio"><Instagram/> Instagram</a><a href="#video"><Youtube/> VÃ­deos</a><a href="#musica"><Music2/> MÃºsica</a></div><div className="footer-bottom"><span>Â© 2026 MARCELLI & MARIANI Â· TODOS OS DIREITOS RESERVADOS</span><button onClick={()=>scrollTo('inicio')}>VOLTAR AO TOPO â†‘</button></div></footer>
    <a className="whatsapp" href="#contato" aria-label="Contato pelo WhatsApp"><span>WA</span></a>
  </main>;
}

