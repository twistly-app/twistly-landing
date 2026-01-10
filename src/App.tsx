import BesoIcon from './assets/icons/beso.png'
import DadoIcon from './assets/icons/dado.png'
import RegaloIcon from './assets/icons/regalo.png'

export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #A6CFCB 0%, #EDEAF6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: 24,
      }}
    >
      <section
        style={{
          background: '#fff',
          padding: '56px 48px 48px',
          borderRadius: 28,
          maxWidth: 440,
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
        }}
      >
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Twistly logo"
          style={{
            width: 140,
            height: 'auto',
            margin: '0 auto 28px',
            display: 'block',
          }}
        />

        {/* HERO */}
        <h1
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            fontSize: 38,
            marginBottom: 18,
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            fontWeight: 700,
            color: '#3e3e3f',
          }}
        >
          Cumplir tareas juntos
          <br />
          puede ser un juego
        </h1>

        <p
          style={{
            fontSize: 16,
            color: '#5A5A6A',
            marginBottom: 36,
            lineHeight: 1.6,
          }}
        >
          Twistly convierte las tareas del hogar en un juego compartido.
          <br />
          Menos reproches, más conexión y pequeños logros juntos.
        </p>

        {/* FORM — ÚNICO BLOQUE MODIFICADO */}
        <form
          action="https://formspree.io/f/xqeezbpb"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            style={{
              width: '100%',
              padding: 16,
              borderRadius: 14,
              border: '1px solid #ddd',
              marginBottom: 14,
              fontSize: 14,
              outline: 'none',
            }}
          />

          <input
            type="hidden"
            name="source"
            value="twistly_landing"
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: 16,
              borderRadius: 14,
              border: 'none',
              background:
                'linear-gradient(135deg, #F3A6A0, #E68DA8)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 15,
              cursor: 'pointer',
            }}
          >
            Quiero probar Twistly
          </button>

          <p
            style={{
              marginTop: 10,
              fontSize: 12,
              color: '#888',
            }}
          >
            Te avisaremos cuando Twistly esté listo. Sin spam.

          </p>
        </form>

        {/* MINI CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
            marginTop: 32,
          }}
        >
          <div style={{ background: '#F7F9FB', borderRadius: 16, padding: 16, fontSize: 13, color: '#444' }}>
            <div style={{ width: 40, height: 40, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={BesoIcon} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            Reparto justo sin discusiones
          </div>

          <div style={{ background: '#F7F9FB', borderRadius: 16, padding: 16, fontSize: 13, color: '#444' }}>
            <div style={{ width: 40, height: 40, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={DadoIcon} alt="" style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }} />
            </div>
            Retos simples y compartidos
          </div>

          <div style={{ background: '#F7F9FB', borderRadius: 16, padding: 16, fontSize: 13, color: '#444' }}>
            <div style={{ width: 40, height: 40, margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={RegaloIcon} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            Recompensas emocionales
          </div>
        </div>

        <p style={{ marginTop: 20, fontSize: 12, color: '#888' }}>
          Pensado para parejas reales. Sin dinero, sin presión.
        </p>
      </section>
    </main>
  )
}
