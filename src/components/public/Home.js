import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div id="topbar" class="fixed-top d-flex align-items-center ">
        <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope-fill"></i>
            <a href="/#">
              <span class="__cf_email__">CORREOTEST@gmail.com</span>
            </a>
            <i class="bi bi-phone-fill phone-icon"></i> +57 123 456 789
          </div>
          <div class="cta d-none d-md-block">
            <Link to="signin" class="scrollto">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>

      <header id="header" class="fixed-top d-flex align-items-center ">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a href="/#">ParkingUtp</a>
          </h1>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  Nosotros
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a class="nav-link scrollto " href="#portfolio">
                  Portafolio
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#pricing">
                  Tarifas
                </a>
              </li>
             
              <li>
                <a href="/#">Blog</a>
              </li>
              <li class="dropdown">
                <a href="/#">
                  <span>Busqueda Rapida</span>{" "}
                  <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="/#">Nosotros</a>
                  </li>
                  <li class="dropdown">
                    <a href="/#">
                      <span>Servicios</span> <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/#">Servicio por Mensualidad</a>
                      </li>
                      <li>
                        <a href="/#">Servicio por Semanas</a>
                      </li>
                      <li>
                        <a href="/#">Servicio por Dias</a>
                      </li>
                      <li>
                        <a href="/#">Servicio por Horas</a>
                      </li>
                      <li>
                        <a href="/#">Servicios por Minutos</a>
                      </li>
                      <li>
                        <a href="/#">Servicios Empresariales</a>
                      </li>
                      <li>
                        <a href="/#">Servicios Personales</a>
                      </li>
                      <li>
                        <a href="/#">Servicios Especiales</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#">Portafolio</a>
                  </li>
                  <li>
                    <a href="/#">Tarifas</a>
                  </li>
                
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contactanos
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      <section
        id="hero"
        class="d-flex justify-cntent-center align-items-center"
      >
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          class="container carousel carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-item active">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">
                Bienvenido a <span>ParkingUtp</span>
              </h2>
              <p class="animate__animated animate__fadeInUp">
                * Somos mas que un parqueadero *
              </p>
              <p class="animate__animated animate__fadeInUp">
                * Somos ParkingUTP *
              </p>
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Conoce mas!!
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">
                * ParkingUtp Personal *
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Ofrecemos a toda nuestra clientela el mejor servicio posible con
                nuestras ofertas en tarifas dinamicas, preguntanos...
              </p>
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Conoce mas!!
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">
                * ParkingUtp Empresarial*
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Conoce los planes y servicios que tenemos para tu empresa!!
              </p>
              <p class="animate__animated animate__fadeInUp">
                Mensualidades, semanas, dias, horas, minutos, para tus
                clientes!!
              </p>
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Conoce mas!!
              </a>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bx bx-chevron-left"
              aria-hidden="true"
            ></span>
          </a>
          <a
            class="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bx bx-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
      <main id="main">
        <section id="icon-boxes" class="icon-boxes">
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bxl-dribbble"></i>
                  </div>

                  <h4 class="title">
                    <a href="/">Servicios Especiales</a>
                  </h4>
                  <p class="description">
                    ParkingUtp cuenta con servicios especiales para la atencion
                    de sus eventos coorporativos, contamos con valetparking,
                    conductor elegidos y toda una gama de productos a su
                    disposicion
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-file"></i>
                  </div>
                  <h4 class="title">
                    <a href="/">Servicios Personales</a>
                  </h4>
                  <p class="description">
                    ParkingUTP ofrece servicios personalizados para todos
                    nuestros clientes, tales como recogida de vehiculos en
                    cualquier parte del pais, chofer, grua y mecanico de
                    emergencia
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-tachometer"></i>
                  </div>
                  <h4 class="title">
                    <a href="/">Servicios Empresariales</a>
                  </h4>
                  <p class="description">
                    ParkingUTP ofrece diferentes servicios exclusivos para
                    empresas con tarifas especiales y descuentos para los
                    empleados de las mismas
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-layer"></i>
                  </div>
                  <h4 class="title">
                    <a href="/">Te escuchamos</a>
                  </h4>
                  <p class="description">
                    ParkingUtp escucha a sus clientes y diseña planes a medida,
                    si tu o tu empresa no encuentran en nuestra oferta los que
                    buscan, cuentanos y te ayudaremos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Nosotros</h2>
              <p>
                Somos la compañía colombiana líder en la industria de
                estacionamientos desde 1978, Por más de 40 años hemos
                consolidado nuestro crecimiento en segmentos de la economía
                dentro de los cuales se encuentran Hospitales, Universidades,
                Clínicas, Grandes Superficies, Centros Comerciales y Centros
                Empresariales, ubicados en Bogotá, Medellín, Cartagena, Cúcuta,
                Santa Marta, Barranquilla, Villavicencio, Pereira y Cali.
              </p>
            </div>
            <div class="row content">
              <div class="col-lg-6">
                <p>
                  ParkingUtp cerca de tí, cuidando lo que valoras. Tenemos una
                  cobertura de calidad con una experiencia memorablemente
                  positiva.
                </p>
                <ul>
                  <li>
                    <i class="ri-check-double-line"></i> En ParkingUtp cremos en
                    el Respeto: En Parking todos son bienvenidos
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> En ParkingUtp cremos en
                    la Lealtad: Estamos comprometidos con nuestros clientes
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> En ParkingUtp cremos en
                    la Integridad: Hacemos lo que prometemos y hacemos lo
                    correcto
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> En ParkingUtp cremos en
                    el Compromiso: Damos lo mejor de nosotros, ya contamos con
                    más de 180 parqueaderos
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <p>
                  En ParkingUtp, contribuimos brindando espacios que faciliten
                  la movilidad a traves de una red con alcance nacional. Estamos
                  comprometidos en cuidar lo que valoras. Ofrecemos una
                  experiencia en el servicio aplicando avances tecnológicos e
                  innovadores al alcance de todos nuestros clientes, cumpliendo
                  con todos los requisitos legales aplicables, orientados a la
                  mejora continua del SGC y las expectativas de los grupos de
                  interés.
                </p>
                <a href="/#" class="btn-learn-more">
                  Leer Mas
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" class="clients">
          <div class="container" data-aos="zoom-in">
            <div class="clients-slider swiper-container">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-1.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-2.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-3.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-4.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-5.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-6.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-7.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="swiper-slide">
                  <img
                    src="assets/img/clients/client-8.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section id="why-us" class="why-us">
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-lg-5 align-items-stretch position-relative video-box"
                style={{ backgroundImage: "url(assets/img/monitoreo.jpg)" }}
                data-aos="fade-right"
              >
                <a
                  href="https://www.youtube.com/watch?v=VJwj5Z6AYw0"
                  class="venobox play-btn mb-4"
                  data-vbtype="video"
                  data-autoplay="true"
                >
                  {" "}
                </a>
              </div>
              <div
                class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch"
                data-aos="fade-left"
              >
                <div class="content">
                  <h3>
                    <strong>Monitoreo constante,</strong> todos nuestros
                    parqueaderos se encuentran con monitoreo centralizado
                  </h3>
                  <p>
                    En ParkingUtp contamos con un Sistema de monitoreo
                    centralizado para brindar la maxima seguridad a la propiedad
                    de nuestros clientes.
                  </p>
                </div>
                <div class="accordion-list">
                  <ul>
                    <li data-aos="fade-up" data-aos-delay="100">
                      {/* <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"> */}
                      <a
                        data-bs-toggle="collapse"
                        class="collapse"
                        href="#accordion-list-1"
                      >
                        <span>01</span>Aplicacion movil para nuestros clientes
                        <i class="bx bx-chevron-down icon-show"></i>
                        <i class="bx bx-chevron-up icon-close"></i>
                      </a>

                      <div
                        id="accordion-list-1"
                        class="collapse show"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Hemos diseñado una aplicación para dispositivos
                          móviles que facilita a nuestros usuarios la búsqueda
                          de espacio disponible, contribuyendo así en la
                          disminución de congestión, contaminación y
                          accidentalidad..
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="200">
                      {/*<a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed">*/}
                      <a
                        data-bs-toggle="collapse"
                        href="#accordion-list-2"
                        class="collapsed"
                      >
                        <span>02</span> Adecuacion de camaras de seguridad con
                        lectura de placas automaticas{" "}
                        <i class="bx bx-chevron-down icon-show"></i>
                        <i class="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-2"
                        class="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Hemos instalado las mejorfes camaras de lectura de
                          placas automaticas para mayor comodidad de nuestros
                          clientes
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="300">
                      {/*<a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed">*/}
                      <a
                        data-bs-toggle="collapse"
                        href="#accordion-list-3"
                        class="collapsed"
                      >
                        <span>03</span> Registro automatico de entradas y
                        salidas de todos los vehiculos{" "}
                        <i class="bx bx-chevron-down icon-show"></i>
                        <i class="bx bx-chevron-up icon-close"></i>
                      </a>
                      <div
                        id="accordion-list-3"
                        class="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <p>
                          Nuestro software hace un registro automatico de
                          entradas y salidas de todos los vehiculos que se
                          encuentran en nuestros parqueaderos
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" class="services">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Servicios</h2>
              <p>
                Estos servicios brindan mayor experiencia dentro del
                parqueadero. Al ingreso hay un aviso donde se puede ubicar qué
                servicio se encuentra disponible en cada parqueadero.
              </p>
            </div>
            <div class="row">
              <div
                class="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <i class="bi bi-card-checklist"></i>
                  <h4>
                    <a href="/#">Servicio de Mensualidad</a>
                  </h4>
                  <p>
                    Nuestros clientes pueden contratar el servicio de pago de
                    mensualidad que le permitira usar cualquiera de los
                    parqueaderos de toda nuestra red de manera ilimitada durante
                    el periodo contratado
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <i class="bi bi-bar-chart"></i>
                  <h4>
                    <a href="/#">Servicios por semana</a>
                  </h4>
                  <p>
                    Nuestros clientes pueden contratar el servicio de pago por
                    semanas que le permitira usar cualquiera de los parqueaderos
                    de toda nuestra red de manera ilimitada durante el periodo
                    contratado
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <i class="bi bi-binoculars"></i>
                  <h4>
                    <a href="/#">Servicios por Dias</a>
                  </h4>
                  <p>
                    Nuestros clientes pueden contratar el servicio de pago por
                    dias que le permitira usar cualquiera de los parqueaderos de
                    toda nuestra red de manera ilimitada durante el periodo
                    contratado
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="icon-box">
                  <i class="bi bi-brightness-high"></i>
                  <h4>
                    <a href="/#">Servicios por Horas y Minutos</a>
                  </h4>
                  <p>
                    Nuestros clientes pueden contratar el servicio de pago por
                    horas o minutos que le permitira usar cualquiera de los
                    parqueaderos de toda nuestra red de manera ilimitada durante
                    el periodo contratado
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="icon-box">
                  <i class="bi bi-calendar4-week"></i>
                  <h4>
                    <a href="/#">Servicios Empresariales</a>
                  </h4>
                  <p>
                    ParkingUtp cuenta con servicios especiales para la atencion
                    de sus eventos coorporativos, contamos con valetparking,
                    conductor elegido y toda una gama de productos a su
                    disposicion
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div class="icon-box">
                  <i class="bi bi-briefcase"></i>
                  <h4>
                    <a href="/#">Servicios Personales</a>
                  </h4>
                  <p>
                    ParkingUTP ofrece servicios personalizados para todos
                    nuestros clientes, tales como recogida de vehiculos en
                    cualquier parte del pais, chofer, grua y mecanico de
                    emergencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" class="portfoio">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Portafolio</h2>
              <p>
                ParkingUtp te brinda todo un portafolio de servicios que se
                acomodan a tus necesidades para el buen resguardon tuyo, de tu
                familia y de tu vehiculo.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div class="row portfolio-container">
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="assets/img/portfolio/especiales.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/especiales.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="App 1"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img
                  src="assets/img/portfolio/mensual.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/mensual.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Web 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="assets/img/portfolio/semanal.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/semanal.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="App 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img
                  src="assets/img/portfolio/horas.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <a
                    href="assets/img/portfolio/horas.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Card 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img
                  src="assets/img/portfolio/empresarial.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/empresarial.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Web 2"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="assets/img/portfolio/minutos.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/minutos.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="App 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img
                  src="assets/img/portfolio/personales.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <a
                    href="assets/img/portfolio/personales.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Card 1"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <img
                  src="assets/img/portfolio/portfolio-8.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Card 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                <img
                  src="assets/img/portfolio/portfolio-9.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Web 3"
                  >
                    <i class="bx bx-plus"></i>
                  </a>
                  <a href="/#" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <section id="pricing" class="pricing">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Tarifas</h2>
              <p>
                Todos nuestros servicios los puedes pagar online, aca conoceras
                todas nuestras tarifas.
              </p>
            </div>
            <div class="row">
              <div
                class="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="box">
                  <h3>Mensualidad</h3>
                  <h4>
                    <sup>$</sup>150.000<span> / mes</span>
                  </h4>
                  <ul>
                    <li>Acceso total a toda nuestra red de parqueaderos</li>
                    <li>Servicio 24 hrs</li>
                    <li>Reembolsable</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="/#" class="btn-buy">
                      Pagar Ahora
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="box featured">
                  <h3>Horas</h3>
                  <h4>
                    <sup>$</sup>6000<span> / hora</span>
                  </h4>
                  <ul>
                    <li>Acceso total a toda nuestra red de parqueaderos</li>
                    <li>Servicio 24 hrs</li>
                    <li>Simpre listo para ti</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="/#" class="btn-buy">
                      Pagar Ahora
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="box">
                  <h3>Minutos</h3>
                  <h4>
                    <sup>$</sup>80<span> / minuto</span>
                  </h4>
                  <ul>
                    <li>Acceso total a toda nuestra red de parqueaderos</li>
                    <li>Servicio 24 hrs</li>
                    <li>Simpre listo para ti</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="/#" class="btn-buy">
                      Pagar Ahora
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-3 col-md-6 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="box">
                  <span class="advanced">Advanced</span>
                  <h3>Semanal</h3>
                  <h4>
                    <sup>$</sup>60000<span> / semana</span>
                  </h4>
                  <ul>
                    <li>Acceso total a toda nuestra red de parqueaderos</li>
                    <li>Servicio 24 hrs</li>
                    <li>Reembolsable</li>
                  </ul>
                  <div class="btn-wrap">
                    <a href="/#" class="btn-buy">
                      Pagar Ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contactenos</h2>
            </div>
            <div
              class="row mt-1 d-flex justify-content-end"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div class="col-lg-5">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Su Ubicacion:</h4>
                    <p>Bogota - Colombia</p>
                  </div>
                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>
                      <a href="/#" class="__cf_email__">
                        correotest@gmail.com
                      </a>
                    </p>
                  </div>
                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Celular:</h4>
                    <p>+54 123 456 789</p>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 mt-5 mt-lg-0"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <form action="#" method="#" class="php-email-form">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Su Nombre Completo"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Su Correo"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Motivo del mensaje"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Su mensaje fue enviado. Gracias!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Enviar Mensaje</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <div class="footer-newsletter">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <h4>Nuestro boletin de Noticias!</h4>
                <p>
                  Suscribete a nuestro boletin semanal y recibe grandes
                  descuentos
                </p>
              </div>
              <div class="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribete" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Product Management</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Marketing</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/#">Graphic Design</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Universidad UTP <br />
                  Desarrollo Web
                  <br />
                  Colombia <br />
                  <br />
                  <strong>Phone:</strong> +57 123 456 789
                  <br />
                  <strong>Email:</strong>{" "}
                  <a href="/#" class="__cf_email__">
                    CORREOTEST@gmail.com
                  </a>
                  <br />
                </p>
              </div>
              <div class="col-lg-3 col-md-6 footer-info">
                <h3>Grupo 12 - SubGrupo 5</h3>
                <p>
                  Somos un grupo conformado por diferentes profesionales
                  capacitados para hacer realidad el software que su medida{" "}
                </p>
                <div class="social-links mt-3">
                  <a href="/#" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="/#" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="/#" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="/#" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="/#" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Grupo 12 - SubGrupo 5</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits"></div>
        </div>
      </footer>
     
      <a
        href="/#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>

      {/* ------------------ Renderizar rutas anidadas ---------------- */}
      <Outlet />
    </div>
  );
}
