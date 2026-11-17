import { useState } from 'react';
import { Star, Send, CheckCircle2, MessageCircleHeart } from 'lucide-react';

export default function FeedbackForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [nota, setNota] = useState(0);
  const [erro, setErro] = useState('');
  const [ultimoFeedback, setUltimoFeedback] = useState(null);

  function enviarFeedback(event) {
    event.preventDefault();
    const dados = { nome: nome.trim(), email: email.trim(), comentario: comentario.trim(), nota };
    if (!dados.nome || !dados.email || !dados.comentario) {
      setErro('Preencha nome, e-mail e comentário.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) {
      setErro('Digite um e-mail válido.');
      return;
    }
    if (!dados.nota) {
      setErro('Selecione uma nota de 1 a 5 estrelas.');
      return;
    }
    setErro('');
    window.alert('Feedback enviado!\n\nNome: ' + dados.nome + '\nE-mail: ' + dados.email +
      '\nAvaliação: ' + dados.nota + '/5\nComentário: ' + dados.comentario);
    setUltimoFeedback(dados);
    setNome('');
    setEmail('');
    setComentario('');
    setNota(0);
  }

  return <div className="layout">
    <section className="panel form-panel">
      <div className="form-icon"><MessageCircleHeart size={25}/></div>
      <div className="eyebrow">FORMULÁRIO DE FEEDBACK</div>
      <h2>Queremos ouvir você.</h2>
      <p className="muted">Conte como foi sua experiência e nos ajude a melhorar.</p>
      <form onSubmit={enviarFeedback} noValidate>
        <div className="fields-row">
          <label>Nome completo *
            <input value={nome} onChange={e=>{setNome(e.target.value);setErro('')}} placeholder="Como podemos chamar você?" maxLength={80} autoComplete="name"/>
          </label>
          <label>Endereço de e-mail *
            <input type="email" value={email} onChange={e=>{setEmail(e.target.value);setErro('')}} placeholder="voce@exemplo.com" maxLength={120} autoComplete="email"/>
          </label>
        </div>
        <label>Avalie sua experiência *</label>
        <div className="rating" role="group" aria-label="Avaliação">
          {[1,2,3,4,5].map(valor=><button type="button" key={valor}
            className={valor <= nota ? 'star active' : 'star'} onClick={()=>setNota(valor)}
            aria-label={valor + (valor === 1 ? ' estrela' : ' estrelas')} aria-pressed={valor === nota}>
            <Star fill={valor <= nota ? 'currentColor' : 'none'} size={30}/>
          </button>)}
          <span className="muted">{nota ? nota + ' de 5 estrelas' : 'Selecione sua nota'}</span>
        </div>
        <label>Seu comentário *
          <textarea value={comentario} maxLength={500}
            onChange={e=>{setComentario(e.target.value);setErro('')}}
            placeholder="Compartilhe suas ideias e sugestões..."/>
        </label>
        <div className="counter">{comentario.length} / 500 caracteres</div>
        {erro && <p className="error" role="alert">{erro}</p>}
        {ultimoFeedback && <p className="success" role="status"><CheckCircle2 size={16}/> Obrigado, {ultimoFeedback.nome}! Sua última resposta foi registrada nesta sessão.</p>}
        <button className="primary" type="submit">Enviar feedback <Send size={17}/></button>
        <p className="disclaimer">Demonstração educacional: os dados não são enviados para um servidor.</p>
      </form>
    </section>
    <aside className="preview">
      <div className="eyebrow">PRÉ-VISUALIZAÇÃO EM TEMPO REAL</div>
      <h2>Sua opinião importa.</h2>
      <p>Veja as informações mudarem enquanto preenche o formulário.</p>
      <article className="preview-card">
        <div className="quote">“</div>
        <p>{comentario.trim() || 'Seu comentário aparecerá aqui enquanto você digita!'}</p>
        <hr/>
        <div className="preview-person">
          <span className="avatar">{nome.trim() ? nome.trim().slice(0,2).toUpperCase() : 'VC'}</span>
          <div><strong>{nome.trim() || 'Seu nome'}</strong><small>{email.trim() || 'seu@email.com'}</small></div>
          <div className="tiny-stars">{'★'.repeat(nota)}{'☆'.repeat(5-nota)}</div>
        </div>
      </article>
      <p className="privacy"><CheckCircle2 size={16}/> Seu feedback é exibido somente neste navegador.</p>
    </aside>
  </div>;
}
