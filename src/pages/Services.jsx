import React from 'react';
import { FaHammer, FaCouch, FaTools, FaWhatsapp } from 'react-icons/fa';

const Servicios = () => {
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1470&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    opacity: 0.9,
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: -1,
  };

  const sectionStyle = {
    position: 'relative',
    padding: '80px 20px',
    color: '#fff',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    textAlign: 'center',
  };

  const cardContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '60px',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255,255,255,0.08)',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(5px)',
  };

  const processContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    marginBottom: '60px',
  };

  const processStep = {
    flex: '1 1 200px',
    backgroundColor: 'rgba(255,255,255,0.08)',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.2)',
  };

  const galleryContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    marginBottom: '60px',
  };

  const galleryImage = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
  };

  const ctaStyle = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '12px',
  };

  const buttonStyle = {
    backgroundColor: '#25D366',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '10px',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Nuestros Servicios</h2>

        {/* Tarjetas de servicios */}
        <div style={cardContainer}>
          <div style={cardStyle}>
            <FaCouch size={40} />
            <h3>Muebles a Medida</h3>
            <p>Diseñamos y fabricamos muebles personalizados basados en imágenes o ideas que nos compartas.</p>
          </div>
          <div style={cardStyle}>
            <FaHammer size={40} />
            <h3>Reparaciones</h3>
            <p>Reparación y mantenimiento de muebles para que recuperen su funcionalidad y estética.</p>
          </div>
          <div style={cardStyle}>
            <FaTools size={40} />
            <h3>Instalaciones</h3>
            <p>Instalamos muebles y accesorios de madera con precisión y cuidado en cada detalle.</p>
          </div>
        </div>

        {/* Cómo trabajamos */}
        <h2 style={{ ...headingStyle, fontSize: '2rem' }}>Cómo trabajamos</h2>
        <div style={processContainer}>
          <div style={processStep}>
            <span>1️⃣</span>
            <p>Nos compartes tu idea o imagen.</p>
          </div>
          <div style={processStep}>
            <span>2️⃣</span>
            <p>Tomamos medidas y definimos detalles.</p>
          </div>
          <div style={processStep}>
            <span>3️⃣</span>
            <p>Fabricamos la pieza con materiales de calidad.</p>
          </div>
          <div style={processStep}>
            <span>4️</span>
            <p>Entregamos e instalamos en tu hogar.</p>
          </div>
        </div>

        {/* Galería */}
        <h2 style={{ ...headingStyle, fontSize: '2rem' }}>Trabajos Realizados</h2>
        <div style={galleryContainer}>
          <img style={galleryImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEva7ei3-i32EY36ae-sV9_Nu2NEgyg8AZqyMXCJWigiqC0dLw2vSd2qdBqXTn2iCEFo&usqp=CAU" alt="Mueble 1" />
          <img style={galleryImage} src="data:image/jpeg;base64,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" alt="Mueble 2" />
          <img style={galleryImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvMEm4BCwjJMsxyokitDFq93gsnD14dYaUA&s" alt="Mueble 3" />
        </div>

        {/* CTA */}
        <div style={ctaStyle}>
          <h3>¿Tienes una idea? ¡La hacemos realidad!</h3>
          <a
            href="https://wa.me/5216181234567"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            <FaWhatsapp style={{ marginRight: '8px' }} />
            Contáctanos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Servicios;
