import React from 'react';

export default function ProductPage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a1f1a 0%, #000000 100%)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Responsive style for mobile */}
      <style>{`
        @media (max-width: 700px) {
          .navbar {
            padding-top: 5.5rem !important;
          }
          html, body {
            overflow: hidden !important;
            height: 100vh !important;
          }
          .product-title {
            font-size: 2rem !important;
            margin-bottom: -1.2rem !important;
          }
          .product-toolbar-img {
            max-width: 95vw !important;
            margin: 0 auto -1.2rem auto !important;
          }
          .product-btn-row {
            flex-direction: column !important;
            gap: 1.5rem !important;
            align-items: center !important;
            margin-top: 0 !important;
            margin-bottom: 8rem !important; /* Add space above bottom navbar */
          }
        }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div
          className="product-title"
          style={{
            fontSize: '3.2rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            lineHeight: 1.1,
            marginTop: 0,
            marginBottom: '-12rem',
            color: '#14f195',
          }}
        >
          Multify v0.1<br />Public Beta Live!
        </div>
        <img
          className="product-toolbar-img"
          src="/assets/images/multify-product.png"
          alt="Multify Product Toolbar"
          style={{
            width: '100%',
            maxWidth: '1000px',
            minWidth: 0,
            height: 'auto',
            margin: '0 auto -16rem auto',
            display: 'block',
            background: 'none',
            border: 'none',
            borderRadius: 0,
            boxShadow: 'none',
            pointerEvents: 'auto',
            userSelect: 'none',
          }}
          draggable={false}
        />
        <div className="product-btn-row" style={{ display: 'flex', gap: '0.7rem', marginTop: 0, justifyContent: 'center' }}>
          <a
            href="https://github.com/RameezMilk/multify-site/releases/download/v0.1/Multify-v0.1-macOS.zip"
            download
            className="product-btn product-btn-filled"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Download
          </a>
          <a
            href="/assets/Multify_User_Guide.pdf"
            download
            className="product-btn product-btn-tonal"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            User Guide
          </a>
        </div>
      </div>
    </section>
  );
}