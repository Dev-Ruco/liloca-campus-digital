import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CirclePlay,
  Clock3,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Menu,
  Monitor,
  Play,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { CampusLogo } from "./CampusLogo";
import { Course, courses, stats } from "./data";
import "./campus.css";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Cursos", href: "/#cursos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Certificados", href: "/#certificados" },
  { label: "Parcerias", href: "/#parcerias" },
];

function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lcd-app">
      <header className="lcd-header">
        <div className="lcd-header-inner">
          <Link to="/" className="lcd-brand-link" onClick={() => setOpen(false)}>
            <CampusLogo compact />
          </Link>

          <nav className="lcd-desktop-nav" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="lcd-header-actions">
            <Link className="lcd-link-button lcd-hide-mobile" to="/inscricao">Inscrever-se</Link>
            <Link className="lcd-primary-button lcd-study-cta" to="/estudar/gestao-projectos">Área de estudo</Link>
            <button className="lcd-menu-button" aria-label="Abrir menu" onClick={() => setOpen(!open)}>
              {open ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lcd-mobile-menu">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <Link to="/inscricao" onClick={() => setOpen(false)}>Inscrição pessoal</Link>
            <Link to="/inscricao?tipo=instituicao" onClick={() => setOpen(false)}>Inscrição institucional</Link>
            <Link className="lcd-primary-button" to="/estudar/gestao-projectos" onClick={() => setOpen(false)}>Ver área de estudo</Link>
          </div>
        )}
      </header>
      {children}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="lcd-footer">
      <div className="lcd-footer-inner">
        <div>
          <CampusLogo compact />
          <p>Uma plataforma moçambicana para cursos de curta duração em parceria com instituições de ensino e formação.</p>
        </div>
        <div className="lcd-footer-links">
          <a href="/#cursos">Cursos</a>
          <a href="/#certificados">Certificados</a>
          <a href="/#parcerias">Parcerias</a>
          <Link to="/inscricao?tipo=instituicao">Empresas e organizações</Link>
        </div>
        <div className="lcd-footer-note">
          <span>© 2026 Liloca Campus Digital</span>
          <span>Protótipo de demonstração</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <Shell>
      <main>
        <section className="lcd-hero lcd-hero-brand" id="inicio">
          <div className="lcd-hero-canvas">
            <div className="lcd-hero-copy lcd-hero-copy-brand">
              <div className="lcd-hero-eyebrow-row">
                <span className="lcd-hero-eyebrow">Liloca Campus Digital</span>
                <i aria-hidden="true" />
              </div>

              <h1>
                Aprenda com universidades e instituições <span>reconhecidas</span>
              </h1>

              <p className="lcd-hero-lead lcd-hero-lead-brand">
                Cursos de curta duração para desenvolver competências práticas,
                com acesso online, certificação e parcerias institucionais.
              </p>

              <div className="lcd-hero-actions lcd-hero-actions-brand">
                <a className="lcd-primary-button lcd-large" href="#cursos">
                  Explorar cursos <ArrowRight size={18} />
                </a>
                <Link className="lcd-secondary-button lcd-large" to="/inscricao?tipo=instituicao">
                  Inscrição institucional
                </Link>
              </div>

              <div className="lcd-hero-meta">
                <div>
                  <GraduationCap size={25} />
                  <strong>Formação prática</strong>
                </div>
                <div>
                  <Monitor size={25} />
                  <strong>100% online</strong>
                </div>
                <div>
                  <ShieldCheck size={25} />
                  <strong>Certificação conforme o parceiro</strong>
                </div>
              </div>

              <div className="lcd-hero-limit-note" aria-hidden="true">
                <span>Conhecimento</span>
                <span>sem limites</span>
                <i />
              </div>
            </div>

            <div className="lcd-hero-visual" aria-label="Liloca">
              <div className="lcd-hero-orb lcd-hero-orb-soft" />
              <div className="lcd-hero-orb lcd-hero-orb-blue" />
              <div className="lcd-hero-orb lcd-hero-orb-cyan" />
              <div className="lcd-hero-dot-grid" />

              <img
                className="lcd-hero-person"
                src="/liloca-campus-cutout.webp"
                alt="Liloca"
              />

              <div className="lcd-hero-signature">
                <strong>Liloca</strong>
                <p>“Educação transforma realidades.”</p>
              </div>

              <div className="lcd-hero-opportunity">
                <span>Mais</span>
                <span>pessoas</span>
                <span>mais</span>
                <span>oportunidades</span>
                <i />
              </div>
            </div>
          </div>
        </section>

        <section className="lcd-section" id="cursos">
          <div className="lcd-container">
            <div className="lcd-section-heading">
              <div>
                <span className="lcd-eyebrow">Cursos em destaque</span>
                <h2>Formação curta para competências que pode usar.</h2>
              </div>
              <div className="lcd-search-box">
                <Search size={18} />
                <input aria-label="Pesquisar cursos" placeholder="Pesquisar curso..." />
              </div>
            </div>
            <div className="lcd-course-grid">
              {courses.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
          </div>
        </section>

        <section className="lcd-section lcd-soft-section" id="como-funciona">
          <div className="lcd-container">
            <div className="lcd-section-heading lcd-centered">
              <div>
                <span className="lcd-eyebrow">Como funciona</span>
                <h2>Do telemóvel ao certificado, sem complicação.</h2>
                <p>Uma experiência pensada primeiro para quem estuda pelo telemóvel, mas confortável também no computador.</p>
              </div>
            </div>
            <div className="lcd-steps">
              {[
                ["01", "Escolha o curso", "Veja a duração, instituição, programa e requisitos antes de se inscrever."],
                ["02", "Faça a inscrição", "Inscrição individual ou em grupo, para empresas, ONG, escolas e outras organizações."],
                ["03", "Estude ao seu ritmo", "Vídeo-aulas em sequência, materiais PDF e perguntas curtas ao longo da aprendizagem."],
                ["04", "Conclua a avaliação", "Acompanhe o progresso e complete as actividades definidas para o curso."],
                ["05", "Receba o certificado", "O certificado identifica claramente a instituição responsável pela formação."],
              ].map(([number, title, description]) => (
                <article key={number} className="lcd-step-card">
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lcd-section" id="certificados">
          <div className="lcd-container lcd-certificate-grid">
            <div className="lcd-certificate-copy">
              <span className="lcd-eyebrow">Credibilidade institucional</span>
              <h2>O certificado não precisa de parecer “da plataforma”.</h2>
              <p>
                Em cada curso, o Liloca Campus Digital apresenta de forma visível a instituição responsável,
                o formador e as condições de certificação. A plataforma organiza a experiência de aprendizagem;
                a credibilidade académica ou profissional vem do parceiro responsável pelo curso.
              </p>
              <ul className="lcd-check-list">
                <li><CheckCircle2 size={19} /> Instituição identificada antes da inscrição</li>
                <li><CheckCircle2 size={19} /> Certificado verificável e associado ao curso</li>
                <li><CheckCircle2 size={19} /> Programa e critérios de conclusão visíveis</li>
              </ul>
            </div>
            <div className="lcd-certificate-card">
              <div className="lcd-certificate-seal"><Award size={34} /></div>
              <span>Certificado de conclusão</span>
              <h3>Gestão Prática de Projectos</h3>
              <p>Emitido pela instituição responsável pelo curso</p>
              <div className="lcd-certificate-person">NOME DO FORMANDO</div>
              <div className="lcd-certificate-meta">
                <span>Curso de curta duração</span>
                <span>Verificação digital</span>
              </div>
            </div>
          </div>
        </section>

        <section className="lcd-section lcd-partner-section" id="parcerias">
          <div className="lcd-container">
            <div className="lcd-section-heading">
              <div>
                <span className="lcd-eyebrow">Rede de parceiros</span>
                <h2>Uma plataforma para aproximar instituições e pessoas.</h2>
                <p>O modelo foi preparado para receber parceiros nacionais e internacionais sem confundir a plataforma com a entidade certificadora.</p>
              </div>
              <Link className="lcd-secondary-button" to="/inscricao?tipo=instituicao">Falar sobre parceria</Link>
            </div>
            <div className="lcd-partner-grid">
              <PartnerCard icon={<Building2 />} title="Universidades nacionais" text="Cursos práticos desenhados com docentes e unidades académicas." />
              <PartnerCard icon={<Globe2 />} title="Instituições internacionais" text="Possibilidade de integrar formação especializada de parceiros estrangeiros." />
              <PartnerCard icon={<Users />} title="Empresas e organizações" text="Turmas fechadas e inscrição de colaboradores em grupo." />
            </div>
            <p className="lcd-demo-disclaimer">Nesta versão de demonstração, as instituições apresentadas são exemplos de estrutura e não representam parcerias já anunciadas.</p>
          </div>
        </section>

        <section className="lcd-section">
          <div className="lcd-container lcd-org-banner">
            <div>
              <span className="lcd-eyebrow lcd-on-dark">Para organizações</span>
              <h2>Inscreva uma equipa inteira sem repetir o processo pessoa por pessoa.</h2>
              <p>Uma empresa ou organização pode indicar o curso, número de participantes e enviar a lista dos colaboradores numa única inscrição.</p>
            </div>
            <Link className="lcd-white-button" to="/inscricao?tipo=instituicao">Inscrever colaboradores <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className={"lcd-course-card " + course.accent}>
      <div className="lcd-course-visual">
        <span>{course.area}</span>
        <div className="lcd-course-symbol"><BookOpen size={34} /></div>
      </div>
      <div className="lcd-course-body">
        <div className="lcd-course-partner"><Building2 size={15} /> {course.partner}</div>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="lcd-course-meta">
          <span><Clock3 size={15} /> {course.duration}</span>
          <span><CirclePlay size={15} /> {course.lessons} aulas</span>
        </div>
        <Link className="lcd-card-link" to={"/curso/" + course.id}>Ver curso <ChevronRight size={18} /></Link>
      </div>
    </article>
  );
}

function PartnerCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="lcd-partner-card">
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>Estrutura preparada</span>
    </article>
  );
}

function CourseDetail() {
  const { id } = useParams();
  const course = useMemo(() => courses.find((item) => item.id === id) || courses[0], [id]);

  return (
    <Shell>
      <main className="lcd-inner-page">
        <div className="lcd-container">
          <Link className="lcd-back-link" to="/"><ArrowLeft size={17} /> Voltar aos cursos</Link>
          <div className="lcd-detail-grid">
            <div>
              <span className="lcd-kicker">{course.area}</span>
              <h1>{course.title}</h1>
              <p className="lcd-detail-lead">{course.description}</p>
              <div className="lcd-detail-tags">
                <span><Clock3 size={16} /> {course.duration}</span>
                <span><CirclePlay size={16} /> {course.lessons} aulas</span>
                <span><GraduationCap size={16} /> {course.level}</span>
                <span><Globe2 size={16} /> {course.format}</span>
              </div>

              <section className="lcd-detail-section">
                <h2>O que vai estudar</h2>
                <div className="lcd-syllabus-list">
                  {course.syllabus.map((lesson, index) => (
                    <div key={lesson.id}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{lesson.title}</strong>
                        <small>{lesson.duration}{lesson.pdf ? " · Material PDF" : ""}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="lcd-enrol-card">
              <div className="lcd-enrol-icon"><GraduationCap size={29} /></div>
              <span>Curso de curta duração</span>
              <h3>{course.price}</h3>
              <ul>
                <li><Check size={17} /> Acesso às vídeo-aulas</li>
                <li><Check size={17} /> Materiais de apoio</li>
                <li><Check size={17} /> Perguntas interactivas</li>
                <li><Check size={17} /> Avaliação de conclusão</li>
                <li><Check size={17} /> Certificação conforme o parceiro</li>
              </ul>
              <Link className="lcd-primary-button lcd-full" to={"/inscricao?curso=" + course.id}>Quero inscrever-me</Link>
              <Link className="lcd-secondary-button lcd-full" to={"/estudar/" + course.id}>Ver área de estudo</Link>
              <p><ShieldCheck size={16} /> A instituição responsável será apresentada de forma clara antes do pagamento e da inscrição final.</p>
            </aside>
          </div>
        </div>
      </main>
    </Shell>
  );
}

function Enrollment() {
  const params = new URLSearchParams(window.location.search);
  const initialType = params.get("tipo") === "instituicao" ? "institution" : "person";
  const initialCourse = params.get("curso") || "";
  const [type, setType] = useState<"person" | "institution">(initialType);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Shell>
      <main className="lcd-inner-page lcd-form-page">
        <div className="lcd-container lcd-form-shell">
          <div className="lcd-form-intro">
            <span className="lcd-eyebrow">Inscrição</span>
            <h1>{type === "person" ? "Comece a sua formação." : "Forme a sua equipa numa única inscrição."}</h1>
            <p>{type === "person"
              ? "Escolha o curso e deixe os seus dados. Na versão final, esta etapa poderá ligar-se ao pagamento e à criação automática da conta."
              : "Indique os dados da organização, o curso pretendido e o número de colaboradores. A equipa poderá depois receber os acessos individualmente."}</p>
            <div className="lcd-form-benefits">
              <span><CheckCircle2 size={18} /> Processo simples no telemóvel</span>
              <span><CheckCircle2 size={18} /> Cursos de curta duração</span>
              <span><CheckCircle2 size={18} /> Acompanhamento do progresso</span>
            </div>
          </div>

          <div className="lcd-form-card">
            <div className="lcd-form-tabs">
              <button className={type === "person" ? "active" : ""} onClick={() => { setType("person"); setSubmitted(false); }}>
                <UserRound size={18} /> Pessoal
              </button>
              <button className={type === "institution" ? "active" : ""} onClick={() => { setType("institution"); setSubmitted(false); }}>
                <Building2 size={18} /> Institucional
              </button>
            </div>

            {submitted ? (
              <div className="lcd-success-box">
                <CheckCircle2 size={46} />
                <h2>Pedido registado nesta demonstração.</h2>
                <p>O fluxo está pronto para ser ligado a uma base de dados, notificações e pagamento quando avançarmos para a versão funcional.</p>
                <button className="lcd-primary-button" onClick={() => setSubmitted(false)}>Fazer outra inscrição</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {type === "person" ? (
                  <>
                    <Field label="Nome completo"><input required placeholder="Ex.: Ana Manuel" /></Field>
                    <div className="lcd-form-row">
                      <Field label="Telefone"><input required type="tel" placeholder="+258 84..." /></Field>
                      <Field label="E-mail"><input required type="email" placeholder="nome@email.com" /></Field>
                    </div>
                    <Field label="Curso">
                      <select defaultValue={initialCourse} required>
                        <option value="" disabled>Seleccione um curso</option>
                        {courses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}
                      </select>
                    </Field>
                    <label className="lcd-check-field"><input type="checkbox" required /> <span>Confirmo que os dados estão correctos e quero receber informações sobre esta inscrição.</span></label>
                  </>
                ) : (
                  <>
                    <Field label="Nome da organização"><input required placeholder="Empresa, ONG, escola ou instituição" /></Field>
                    <div className="lcd-form-row">
                      <Field label="Pessoa de contacto"><input required placeholder="Nome completo" /></Field>
                      <Field label="Telefone"><input required type="tel" placeholder="+258 84..." /></Field>
                    </div>
                    <Field label="E-mail institucional"><input required type="email" placeholder="formacao@organizacao.co.mz" /></Field>
                    <div className="lcd-form-row">
                      <Field label="Curso pretendido">
                        <select required defaultValue="">
                          <option value="" disabled>Seleccione</option>
                          {courses.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}
                        </select>
                      </Field>
                      <Field label="N.º de colaboradores"><input required min="1" type="number" placeholder="20" /></Field>
                    </div>
                    <Field label="Lista de colaboradores (opcional)">
                      <input type="file" accept=".csv,.xlsx,.xls,.pdf" />
                    </Field>
                    <Field label="Observações"><textarea rows={4} placeholder="Datas preferidas, necessidades da equipa ou outra informação." /></Field>
                  </>
                )}
                <button className="lcd-primary-button lcd-full lcd-submit" type="submit">
                  {type === "person" ? "Continuar inscrição" : "Submeter pedido institucional"} <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </Shell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="lcd-field"><span>{label}</span>{children}</label>;
}

function StudyArea() {
  const { id } = useParams();
  const course = useMemo(() => courses.find((item) => item.id === id) || courses[0], [id]);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [questionAsked, setQuestionAsked] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [materialOpen, setMaterialOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lesson = course.syllabus[lessonIndex];

  useEffect(() => {
    setQuestionOpen(false);
    setQuestionAsked(false);
    setAnswer(null);
    setMaterialOpen(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [lessonIndex]);

  function maybeAskQuestion() {
    const video = videoRef.current;
    if (!video || questionAsked || !lesson.question) return;
    if (video.currentTime >= 4) {
      video.pause();
      setQuestionAsked(true);
      setQuestionOpen(true);
    }
  }

  function continueVideo() {
    setQuestionOpen(false);
    videoRef.current?.play().catch(() => undefined);
  }

  const completion = Math.round(((lessonIndex + 1) / course.syllabus.length) * 100);

  return (
    <div className="lcd-study">
      <header className="lcd-study-header">
        <Link to="/" className="lcd-study-logo"><CampusLogo compact /></Link>
        <div className="lcd-study-course">
          <span>{course.title}</span>
          <small>{completion}% concluído</small>
        </div>
        <div className="lcd-study-progress"><span style={{ width: completion + "%" }} /></div>
        <Link className="lcd-study-exit" to={"/curso/" + course.id}>Sair da aula</Link>
      </header>

      <main className="lcd-study-layout">
        <section className="lcd-player-column">
          <div className="lcd-player-wrap">
            <video
              ref={videoRef}
              className="lcd-video"
              controls
              onTimeUpdate={maybeAskQuestion}
              playsInline
              preload="metadata"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='720'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='1' x2='1' y2='0'%3E%3Cstop stop-color='%23072d67'/%3E%3Cstop offset='.55' stop-color='%230a65aa'/%3E%3Cstop offset='1' stop-color='%230fb8c1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1280' height='720' fill='url(%23g)'/%3E%3Ccircle cx='640' cy='340' r='72' fill='white' opacity='.94'/%3E%3Cpath d='M620 298l70 42-70 42z' fill='%23084d91'/%3E%3Ctext x='640' y='485' text-anchor='middle' fill='white' font-family='Arial' font-size='34'%3ELiloca Campus Digital%3C/text%3E%3C/svg%3E"
            >
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            </video>

            {questionOpen && lesson.question && (
              <div className="lcd-question-overlay">
                <div className="lcd-question-box">
                  <span className="lcd-question-label">Pergunta durante a aula</span>
                  <h2>{lesson.question.prompt}</h2>
                  <div className="lcd-question-options">
                    {lesson.question.options.map((option, index) => {
                      const chosen = answer === index;
                      const correct = index === lesson.question!.correct;
                      return (
                        <button
                          key={option}
                          className={(chosen ? "chosen " : "") + (answer !== null && correct ? "correct" : "")}
                          onClick={() => setAnswer(index)}
                        >
                          <span>{String.fromCharCode(65 + index)}</span>{option}
                        </button>
                      );
                    })}
                  </div>
                  {answer !== null && (
                    <div className={"lcd-answer-note " + (answer === lesson.question.correct ? "right" : "wrong")}>
                      <strong>{answer === lesson.question.correct ? "Resposta correcta." : "Ainda não."}</strong>
                      <p>{lesson.question.explanation}</p>
                    </div>
                  )}
                  <button className="lcd-primary-button lcd-full" disabled={answer === null} onClick={continueVideo}>
                    Continuar a aula <Play size={17} />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lcd-lesson-info">
            <div>
              <span>Aula {lessonIndex + 1} de {course.syllabus.length}</span>
              <h1>{lesson.title}</h1>
              <p>Vídeo de demonstração. Na versão funcional, cada aula terá o vídeo do formador, progresso guardado e perguntas configuradas pela instituição.</p>
            </div>
            {lesson.pdf && (
              <button className="lcd-material-button" onClick={() => setMaterialOpen(!materialOpen)}>
                <FileText size={19} />
                <span><strong>Material da aula</strong><small>{lesson.pdf} · PDF</small></span>
                <Download size={17} />
              </button>
            )}
          </div>

          {materialOpen && (
            <div className="lcd-material-preview">
              <div><FileText size={26} /></div>
              <div><strong>{lesson.pdf}</strong><p>Pré-visualização do espaço reservado para o material PDF associado a esta vídeo-aula.</p></div>
              <button onClick={() => setMaterialOpen(false)}><X size={18} /></button>
            </div>
          )}

          <div className="lcd-lesson-navigation">
            <button disabled={lessonIndex === 0} onClick={() => setLessonIndex((i) => Math.max(0, i - 1))}><ArrowLeft size={17} /> Aula anterior</button>
            <button className="next" disabled={lessonIndex === course.syllabus.length - 1} onClick={() => setLessonIndex((i) => Math.min(course.syllabus.length - 1, i + 1))}>Próxima aula <ArrowRight size={17} /></button>
          </div>
        </section>

        <aside className="lcd-lesson-sidebar">
          <div className="lcd-sidebar-title">
            <div><BookOpen size={19} /><strong>Conteúdo do curso</strong></div>
            <span>{course.syllabus.length} aulas</span>
          </div>
          <div className="lcd-lesson-list">
            {course.syllabus.map((item, index) => (
              <button key={item.id} className={index === lessonIndex ? "active" : ""} onClick={() => setLessonIndex(index)}>
                <span className="lcd-lesson-status">{index < lessonIndex ? <Check size={15} /> : index + 1}</span>
                <span className="lcd-lesson-text"><strong>{item.title}</strong><small>{item.duration}{item.pdf ? " · PDF" : ""}</small></span>
                {index === lessonIndex && <CirclePlay size={18} />}
              </button>
            ))}
          </div>
          <div className="lcd-sidebar-certificate">
            <Award size={22} />
            <div><strong>Certificado</strong><p>Disponível após cumprir os critérios definidos pela instituição.</p></div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default function CampusDigitalApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curso/:id" element={<CourseDetail />} />
        <Route path="/inscricao" element={<Enrollment />} />
        <Route path="/estudar/:id" element={<StudyArea />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
