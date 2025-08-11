import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaHandshake, FaTools, FaClock, FaStar, FaPhone } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';

const reasons = [
  {
    icon: <FaHandshake size={40} className="mb-3 text-primary" />,
    title: 'Atención personalizada',
    desc: 'Cada proyecto es único, te acompañamos en todo el proceso.',
  },
  {
    icon: <FaTools size={40} className="mb-3 text-primary" />,
    title: 'Materiales de calidad',
    desc: 'Solo usamos madera y herrajes premium para la mejor durabilidad.',
  },
  {
    icon: <FaClock size={40} className="mb-3 text-primary" />,
    title: 'Entrega puntual',
    desc: 'Cumplimos con los tiempos acordados para tu tranquilidad.',
  },
  {
    icon: <FaStar size={40} className="mb-3 text-primary" />,
    title: 'Experiencia comprobada',
    desc: 'Más de 20 años transformando ideas en realidad.',
  },
];

const testimonials = [
  { name: 'Cliente', text: 'Excelente trabajo, mi cocina quedó hermosa y a tiempo.' },
  { name: 'Cliente', text: 'Muy profesionales, atentos y con precios justos.' },
  { name: 'Cliente', text: 'Recomiendo totalmente Carpintería Elegante, calidad insuperable.' },
];

const processSteps = [
  { step: '1', title: 'Consulta', desc: 'Te escuchamos y entendemos tus necesidades.' },
  { step: '2', title: 'Diseño', desc: 'Creamos un plan personalizado para ti.' },
  { step: '3', title: 'Fabricación', desc: 'Materializamos tu proyecto con materiales de calidad.' },
  { step: '4', title: 'Entrega', desc: 'Instalamos y entregamos con la mayor calidad y puntualidad.' },
];

const backgroundStyle = {
  backgroundImage: `url('https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1470&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'fixed',   // <-- clave para que quede fijo
  top: 0,
  left: 0,
  width: '100vw',      // ancho completo del viewport
  height: '100vh',     // alto completo del viewport
  zIndex: -1,          // para que quede detrás de todo
  opacity: 0.9,        // opcional, para oscurecer un poco
};

const overlayStyle = {
  position: 'fixed',   // <-- clave para que quede fijo
  top: 0,
  left: 0,
  width: '100vw',      // ancho completo del viewport
  height: '100vh',     // alto completo del viewport
  backgroundColor: 'rgba(0,0,0,0.65)',
  zIndex: -1,
};

const Home = () => (
  <div style={{ position: 'relative', minHeight: '100vh' }}>
    <div style={backgroundStyle} />
    <div style={overlayStyle} />

    <Container style={{ position: 'relative', zIndex: 1, color: 'white', padding: '60px 0' }}>
      <Fade triggerOnce>
        <div className="text-center my-5">
          <h1 className="fw-bold">Bienvenido a Carpintería Del Centro</h1>
          <p className="lead">Transformamos la madera en arte y funcionalidad para tu hogar.</p>
          <Button variant="light" href="https://wa.me/5211234567890" className="mt-3">
            Contáctanos
          </Button>
        </div>
      </Fade>

      <Fade cascade triggerOnce>
        <h2 className="mb-4 text-center">¿Por qué elegirnos?</h2>
        <Row>
          {reasons.map(({ icon, title, desc }, idx) => (
            <Col key={idx} md={3} className="mb-4">
              <Card className="h-100 text-center p-3 shadow-sm bg-light text-dark">
                <div>{icon}</div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Fade>

      <Slide direction="up" triggerOnce>
        <h2 className="mb-4 text-center mt-5">Testimonios</h2>
        <Carousel variant="dark" indicators={false} controls={true} className="mb-5 bg-light rounded p-3">
          {testimonials.map(({ name, text }, idx) => (
            <Carousel.Item key={idx}>
              <div className="text-center p-4">
                <p className="fst-italic text-dark">"{text}"</p>
                <h5 className="mt-3 text-dark">- {name}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Slide>

      <Fade cascade triggerOnce>
        <h2 className="mb-4 text-center">Nuestro Proceso</h2>
        <Row className="mb-5">
          {processSteps.map(({ step, title, desc }, idx) => (
            <Col key={idx} md={3} className="mb-3">
              <Card className="h-100 text-center p-3 shadow-sm bg-light text-dark border-primary">
                <div
                  className="rounded-circle bg-primary text-white mx-auto mb-3"
                  style={{
                    width: '50px',
                    height: '50px',
                    lineHeight: '50px',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}
                >
                  {step}
                </div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Fade>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5211234567890"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          zIndex: 1000,
          cursor: 'pointer',
          textDecoration: 'none',
        }}
        aria-label="WhatsApp"
        title="Contáctanos por WhatsApp"
      >
        <FaPhone size={30} />
      </a>
    </Container>
  </div>
);

export default Home;
