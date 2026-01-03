


import './App.css';
import LiquidEther from './components/LiquidEther';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProductPage from './Product';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

function NavLinks({ style }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isProduct = location.pathname === '/product';
  return (
    <div
      className="nav-center"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 50,
        padding: '0.5rem',
        display: 'flex',
        gap: '0.5rem',
        maxWidth: '700px',
        zIndex: 1100,
        ...style,
      }}
    >
      <button
        className={`nav-link${isHome ? ' active' : ''}`}
        style={{
          padding: '0.7rem 1.5rem',
          color: isHome ? '#fff' : 'rgba(255,255,255,0.6)',
          textDecoration: 'none',
          fontSize: '0.95rem',
          borderRadius: 50,
          transition: 'all 0.3s ease',
          position: 'relative',
          background: isHome ? 'rgba(255,255,255,0.12)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Home
      </button>
      <button
        className={`nav-link${isProduct ? ' active' : ''}`}
        style={{
          padding: '0.7rem 1.5rem',
          color: isProduct ? '#fff' : 'rgba(255,255,255,0.6)',
          textDecoration: 'none',
          fontSize: '0.95rem',
          borderRadius: 50,
          transition: 'all 0.3s ease',
          position: 'relative',
          background: isProduct ? 'rgba(255,255,255,0.12)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/product')}
      >
        Product
      </button>
    </div>
  );
}




// Layout with persistent navbar
function Layout({ children }) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        background: 'linear-gradient(135deg, #0a1f1a 0%, #000000 100%)',
        color: '#fff',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Inter', sans-serif",
        overflowX: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Header: logo and Get Started always at top */}
      <div
        className="navbar"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          zIndex: 1000,
          width: '100%',
          background: 'transparent',
          padding: isMobile ? '1.2rem 1.5rem' : '1.5rem 3rem',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            className="logo-section"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              flex: '0 0 auto',
            }}
          >
            <div
              className="logo-icon"
              style={{
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/icons/multify-logo.png"
                alt="Multify Logo"
                style={{
                  width: 50,
                  height: 50,
                  objectFit: 'contain',
                  filter:
                    'drop-shadow(0 0 4px rgba(20, 241, 149, 0.4)) drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))',
                }}
              />
            </div>
            <div
              className="logo-text"
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-0.02em',
              }}
            >
              Multify
            </div>
          </div>
          {/* Nav links: only on desktop in header */}
          {!isMobile && (
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <NavLinks />
            </div>
          )}
          <button
            className="get-started-btn"
            style={{
              padding: '0.8rem 2rem',
              background: 'rgba(16,185,129,0.15)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(16,185,129,0.4)',
              color: '#10b981',
              textDecoration: 'none',
              borderRadius: 50,
              fontSize: '0.95rem',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 0 20px rgba(16,185,129,0.2)',
              flex: '0 0 auto',
              marginLeft: isMobile ? '1rem' : '2rem',
              whiteSpace: 'nowrap',
              maxWidth: '180px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      {/* NavLinks: only on mobile, fixed at bottom */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1100,
            width: '100%',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            padding: '0 0 1.2rem 0',
            pointerEvents: 'none',
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <NavLinks />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

function HomePage() {
  const isMobile = useIsMobile();
  return (
    <section
      className="hero"
      style={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7rem 2rem 4rem 2rem',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Responsive style for mobile: prevent scroll and fit viewport */}
      <style>{`
        @media (max-width: 700px) {
          .navbar {
            padding-top: 5.5rem !important;
          }
          .hero {
            padding-top: 0.2rem !important;
            padding-bottom: 0.5rem !important;
          }
          .hero-content h1 {
            font-size: 2.1rem !important;
            margin-bottom: 0.5rem !important;
          }
          .hero-content .hero-caption {
            font-size: 1.05rem !important;
          }
          .hero-content .platform-tag {
            font-size: 0.75rem !important;
            margin-top: 1.1rem !important;
            padding: 0.4rem 0.9rem !important;
          }
          .hero-content {
            margin-top: 0.5rem !important;
          }
          html, body {
            overflow: hidden !important;
            height: 100vh !important;
          }
        }
      `}</style>
      <LiquidEther
        colors={['#14f195', '#10b981', '#0fffc1']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          maxWidth: '100%',
        }}
      />
      <div
        className="hero-content"
        style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}
      >
        <h1
          style={{
            fontSize: '4.5rem',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            background:
              'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Experience the Next Era
          <br />
          of AI Productivity.
        </h1>
        <p
          className="hero-caption"
          style={{
            fontSize: '1.3rem',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 400,
          }}
        >
          Build optimal, agentic-ready prompts
        </p>
        <span
          className="platform-tag"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.2rem',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 50,
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '2rem',
            fontWeight: 500,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          macOS native support only
        </span>
        {/* Nav links: mobile = below chip only */}
        {/* Removed duplicate NavLinks for mobile. Only the fixed bottom NavLinks remains. */}
      </div>
    </section>
  );
}

// ProductPage moved to its own file

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
