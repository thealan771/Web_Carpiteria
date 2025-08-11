import React from "react";

const Galeria = () => {
  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1598300056394-1a35b556b43e?auto=format&fit=crop&w=1470&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -2,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.65)",
    zIndex: -1,
  };

  const containerStyle = {
    position: "relative",
    zIndex: 1,
    padding: "60px 20px",
    color: "white",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    marginBottom: "40px",
    lineHeight: "1.8",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease",
  };

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJ_ahaKuUIhSi9HjjFshqseH-K7GgRjSQDA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgf4LN6qKRRzAkuGwFPIHalinQkOn78yyE-Q&s",
    "https://res.cloudinary.com/closets-orbis/image/upload/h_640,w_480/f_auto,h_640,q_auto,w_480/v4-puertas-de-madera/puerta-de-madera-pma-4115.jpg",
    "https://i.pinimg.com/736x/7d/88/9f/7d889fefe6c3dc009a5a3be7450d662e.jpg",
    "https://derika.com.mx/wp-content/uploads/2023/05/Cocina-Alemania-Nogal-2.40-03-bLANCO.png",
    "data:image/jpeg;base64,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",
  ];

  return (
    <section>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Galería</h2>
        <p style={paragraphStyle}>
          Aquí te mostramos algunos de nuestros trabajos y diseños de muebles
          para inspirarte y ayudarte a elegir lo que mejor se adapta a tu hogar.
        </p>
        <div style={gridStyle}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Mueble ${index + 1}`}
              style={imageStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
