import React from 'react';

const Nosotros = () => {
  // Fondo
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1470&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -2,
    opacity: 0.9,
  };

  // Capa oscura
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: -1,
  };

  // Contenedor general
  const contentWrapperStyle = {
    position: 'relative',
    zIndex: 0,
    padding: '100px 20px',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  // Tarjeta principal
  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '40px 30px',
    borderRadius: '12px',
    maxWidth: '1000px',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
  };

  const listStyle = {
    ...paragraphStyle,
    textAlign: 'left',
    paddingLeft: '20px',
  };

  return (
    <>
      {/* Fondo */}
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>

      {/* Contenido */}
      <section style={contentWrapperStyle}>
        <div style={contentStyle}>
          <h2 style={headingStyle}>¿Quiénes somos?</h2>
          <p style={paragraphStyle}>
            Somos una empresa local con sede en Durango, dedicada a la fabricación y venta de muebles a partir de diseños e imágenes reales de modelos ya existentes. 
            Nos apasiona ayudar a que cada espacio del hogar luzca cómodo, funcional y con estilo, siempre respetando las necesidades y gustos de cada cliente.
          </p>
          <p style={paragraphStyle}>
            Trabajamos de manera cercana y personalizada, enfocándonos en el trato directo con nuestros clientes de la región, para garantizar un servicio rápido, eficiente y de calidad. 
            No realizamos diseños 3D, pero contamos con un catálogo amplio de referencias visuales que facilitan la elección del mueble ideal.
          </p>

          <h3 style={{ ...headingStyle, fontSize: '2rem', marginTop: '40px' }}>Nuestra Misión</h3>
          <p style={paragraphStyle}>
            Crear y ofrecer muebles que combinen durabilidad, estética y practicidad, cuidando cada detalle en el proceso para que nuestros clientes obtengan exactamente lo que buscan.
          </p>

          <h3 style={{ ...headingStyle, fontSize: '2rem' }}>Nuestra Visión</h3>
          <p style={paragraphStyle}>
            Ser la referencia local en muebles de calidad, reconocidos por la atención personalizada y la entrega puntual.
          </p>

          <h3 style={{ ...headingStyle, fontSize: '2rem' }}>Nuestros Valores</h3>
          <ul style={listStyle}>
            <li>✅ Compromiso con el cliente</li>
            <li>✅ Calidad en cada detalle</li>
            <li>✅ Respeto por el tiempo y presupuesto</li>
            <li>✅ Transparencia en el trato</li>
            <li>✅ Pasión por lo que hacemos</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
