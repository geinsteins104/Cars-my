<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LUMINA • modern landing</title>
  <!-- Font Awesome (free icons) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    /* ---------- RESET & BASE ---------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #faf9f8;
      color: #1e1e2a;
      line-height: 1.5;
    }

    /* smooth scroll & focus */
    html {
      scroll-behavior: smooth;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* ---------- UTILITY ---------- */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .flex {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .btn {
      display: inline-block;
      background: #1e1e2a;
      color: #fff;
      padding: 0.75rem 2rem;
      border-radius: 40px;
      font-weight: 600;
      font-size: 1rem;
      border: 2px solid transparent;
      transition: all 0.25s ease;
      cursor: pointer;
      box-shadow: 0 8px 20px rgba(0,0,0,0.04);
    }

    .btn-outline {
      background: transparent;
      color: #1e1e2a;
      border-color: #1e1e2a;
      box-shadow: none;
    }

    .btn-outline:hover {
      background: #1e1e2a;
      color: #fff;
    }

    .btn-primary {
      background: #2a2a3e;
      border-color: #2a2a3e;
    }

    .btn-primary:hover {
      background: #0f0f1a;
      border-color: #0f0f1a;
      transform: translateY(-3px);
      box-shadow: 0 16px 28px rgba(0,0,0,0.12);
    }

    .section-title {
      font-size: 2.6rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }

    .section-sub {
      font-size: 1.2rem;
      color: #4a4a5a;
      max-width: 540px;
    }

    .text-center {
      text-align: center;
    }

    /* ---------- HEADER / NAV ---------- */
    header {
      padding: 1.5rem 0;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(0,0,0,0.03);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      background: linear-gradient(135deg, #1e1e2a, #5b5b7a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-links {
      display: flex;
      gap: 2.2rem;
      align-items: center;
      font-weight: 500;
    }

    .nav-links a {
      transition: color 0.2s;
      font-size: 1rem;
    }

    .nav-links a:hover {
      color: #4f4f6b;
    }

    .nav-cta {
      background: #1e1e2a;
      color: #fff !important;
      padding: 0.4rem 1.4rem;
      border-radius: 40px;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.2s;
    }

    .nav-cta:hover {
      background: #3d3d5a !important;
      color: #fff !important;
    }

    /* ---------- HERO ---------- */
    .hero {
      padding: 4rem 0 5rem 0;
    }

    .hero .grid-2 {
      align-items: center;
    }

    .hero-content h1 {
      font-size: 3.8rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 1.2rem;
    }

    .hero-content h1 span {
      background: linear-gradient(145deg, #2a2a4a, #6b6b8f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-content p {
      font-size: 1.2rem;
      color: #3d3d4d;
      max-width: 460px;
      margin-bottom: 2.2rem;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ecebf0;
      border-radius: 40px;
      padding: 1.2rem;
      box-shadow: 0 30px 50px -20px rgba(0,0,0,0.15);
    }

    .hero-image img {
      width: 100%;
      max-width: 420px;
      height: auto;
      filter: drop-shadow(0 12px 20px rgba(0,0,0,0.08));
      transition: transform 0.4s ease;
    }

    .hero-image img:hover {
      transform: scale(1.02);
    }

    /* ---------- FEATURES ---------- */
    .features {
      padding: 5rem 0;
      background: #ffffff;
      border-radius: 60px 60px 0 0;
      margin-top: -1px;
    }

    .features .section-title {
      text-align: center;
    }

    .features .section-sub {
      margin: 0 auto 3.5rem auto;
      text-align: center;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 2.5rem;
    }

    .feature-card {
      background: #f6f5fa;
      padding: 2.2rem 1.8rem;
      border-radius: 32px;
      transition: all 0.25s ease;
      border: 1px solid rgba(0,0,0,0.02);
      box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 35px -8px rgba(0,0,0,0.08);
      background: #fff;
      border-color: #e8e7f0;
    }

    .feature-card i {
      font-size: 2.4rem;
      color: #2a2a4a;
      margin-bottom: 1.2rem;
      background: #eae9f2;
      padding: 0.6rem;
      border-radius: 20px;
      width: 4rem;
      text-align: center;
    }

    .feature-card h3 {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
    }

    .feature-card p {
      color: #4e4e62;
      font-size: 0.95rem;
    }

    /* ---------- QUOTE / TESTIMONIAL ---------- */
    .testimonial {
      padding: 4rem 0;
      background: #f0eff5;
    }

    .testimonial-box {
      background: #ffffff;
      border-radius: 48px;
      padding: 3.5rem 4rem;
      box-shadow: 0 12px 40px rgba(0,0,0,0.02);
      border: 1px solid #f0edf5;
      max-width: 800px;
      margin: 0 auto;
    }

    .testimonial-box i {
      font-size: 2.8rem;
      color: #b7b4cc;
      opacity: 0.4;
      margin-bottom: 0.5rem;
    }

    .testimonial-box blockquote {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.4;
      letter-spacing: -0.01em;
      margin: 0.5rem 0 1rem 0;
      color: #1c1c2a;
    }

    .testimonial-box cite {
      display: block;
      font-style: normal;
      font-weight: 500;
      color: #4e4e66;
      margin-top: 1rem;
    }

    .testimonial-box cite span {
      font-weight: 400;
      color: #7a7a92;
    }

    /* ---------- CTA ---------- */
    .cta {
      padding: 5rem 0 6rem 0;
      background: #faf9f8;
    }

    .cta-card {
      background: #1e1e2a;
      border-radius: 60px;
      padding: 4rem 3.5rem;
      color: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 30px 50px -25px rgba(0,0,0,0.3);
    }

    .cta-card h2 {
      font-size: 2.4rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      max-width: 400px;
    }

    .cta-card p {
      opacity: 0.75;
      font-size: 1.1rem;
      max-width: 400px;
      margin: 0.5rem 0 0 0;
    }

    .cta-card .btn {
      background: #fff;
      color: #1e1e2a;
      padding: 0.9rem 2.8rem;
      font-weight: 700;
      border: none;
      box-shadow: 0 8px 18px rgba(0,0,0,0.1);
    }

    .cta-card .btn:hover {
      background: #eae9f0;
      transform: scale(1.02);
    }

    /* ---------- FOOTER ---------- */
    footer {
      background: #f0eff5;
      padding: 2rem 0;
      border-top: 1px solid rgba(0,0,0,0.02);
      font-size: 0.95rem;
      color: #4f4f62;
    }

    .footer-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    .footer-links {
      display: flex;
      gap: 2rem;
    }

    .footer-links a {
      transition: color 0.2s;
    }

    .footer-links a:hover {
      color: #1e1e2a;
    }

    .social i {
      font-size: 1.3rem;
      margin-left: 0.8rem;
      opacity: 0.6;
      transition: opacity 0.2s, transform 0.2s;
    }

    .social i:hover {
      opacity: 1;
      transform: translateY(-2px);
    }

    /* ---------- RESPONSIVE ---------- */
    @media (max-width: 900px) {
      .grid-2 {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .hero-content h1 {
        font-size: 2.8rem;
      }

      .hero {
        padding: 2rem 0 3rem 0;
      }

      .hero-image img {
        max-width: 300px;
      }

      .section-title {
        font-size: 2.2rem;
      }

      .cta-card {
        flex-direction: column;
        text-align: center;
        padding: 3rem 2rem;
      }

      .cta-card h2 {
        max-width: 100%;
        margin-bottom: 0.5rem;
      }

      .cta-card p {
        max-width: 100%;
        margin-bottom: 2rem;
      }

      .testimonial-box {
        padding: 2.5rem 1.8rem;
      }

      .testimonial-box blockquote {
        font-size: 1.3rem;
      }

      .nav-links {
        gap: 1.2rem;
      }

      .nav-links a:not(.nav-cta) {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 600px) {
      .container {
        padding: 0 1.5rem;
      }

      nav {
        flex-wrap: wrap;
        gap: 0.8rem;
        justify-content: center;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.8rem 1.5rem;
      }

      .hero-content h1 {
        font-size: 2.2rem;
      }

      .feature-grid {
        grid-template-columns: 1fr 1fr;
      }

      .cta-card {
        padding: 2.5rem 1.5rem;
      }

      .cta-card h2 {
        font-size: 1.8rem;
      }

      .footer-inner {
        flex-direction: column;
        gap: 1.2rem;
        text-align: center;
      }

      .footer-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }
    }

    @media (max-width: 450px) {
      .feature-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

<!-- HEADER / NAV -->
<header>
  <div class="container">
    <nav>
      <span class="logo">LUMINA</span>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#testimonial">Reviews</a>
        <a href="#cta" class="nav-cta">Get started</a>
      </div>
    </nav>
  </div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="grid-2">
      <div class="hero-content">
        <h1>Timeless <span>elegance</span> meets modern <span>craft</span></h1>
        <p>Discover the perfect blend of minimalist design and premium materials. Built for those who appreciate the finer details.</p>
        <div class="hero-buttons">
          <a href="#cta" class="btn btn-primary">Explore collection</a>
          <a href="#features" class="btn btn-outline">Learn more <i class="fas fa-arrow-right" style="margin-left: 8px; font-size: 0.8rem;"></i></a>
        </div>
      </div>
      <div class="hero-image">
        <!-- abstract watch / product image (SVG inspired) -->
        <svg viewBox="0 0 400 380" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%; max-width:380px; height:auto;">
          <circle cx="200" cy="180" r="140" fill="#e1dde8" stroke="#2a2a3e" stroke-width="10" />
          <circle cx="200" cy="180" r="110" fill="#f4f2f8" stroke="#3b3b52" stroke-width="6" />
          <circle cx="200" cy="180" r="40" fill="#2a2a3e" />
          <circle cx="200" cy="180" r="28" fill="#faf9f8" stroke="#2a2a3e" stroke-width="3" />
          <rect x="195" y="50" width="10" height="50" rx="5" fill="#2a2a3e" />
          <rect x="195" y="260" width="10" height="50" rx="5" fill="#2a2a3e" />
          <circle cx="160" cy="110" r="6" fill="#7a7a95" />
          <circle cx="240" cy="110" r="6" fill="#7a7a95" />
          <circle cx="160" cy="250" r="6" fill="#7a7a95" />
          <circle cx="240" cy="250" r="6" fill="#7a7a95" />
          <path d="M200 90 L200 140 L220 150" stroke="#2a2a3e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M200 270 L200 220 L180 210" stroke="#2a2a3e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="200" cy="110" r="14" fill="#b3adc4" stroke="#2a2a3e" stroke-width="3" />
          <circle cx="200" cy="250" r="14" fill="#b3adc4" stroke="#2a2a3e" stroke-width="3" />
        </svg>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="features" id="features">
  <div class="container">
    <h2 class="section-title text-center">Designed for <br>every moment</h2>
    <p class="section-sub text-center">Crafted with precision, built to last. Each detail tells a story.</p>
    <div class="feature-grid">
      <div class="feature-card">
        <i class="fas fa-gem"></i>
        <h3>Premium materials</h3>
        <p>Italian leather, sapphire glass, and titanium grade 5.</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-water"></i>
        <h3>Water resistant</h3>
        <p>100m depth rating – ready for every adventure.</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-bolt"></i>
        <h3>Automatic movement</h3>
        <p>Swiss precision with 80h power reserve.</p>
      </div>
      <div class="feature-card">
        <i class="fas fa-moon"></i>
        <h3>Night vision</h3>
        <p>Super-luminova coating for perfect readability.</p>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIAL -->
<section class="testimonial" id="testimonial">
  <div class="container">
    <div class="testimonial-box text-center">
      <i class="fas fa-quote-right"></i>
      <blockquote>“ The LUMINA watch is more than a timepiece – it’s a statement. The finishing and weight are absolutely perfect. ”</blockquote>
      <cite>— Alex Rivera <span> / creative director</span></cite>
    </div>
  </div>
</section>

<!-- CALL TO ACTION -->
<section class="cta" id="cta">
  <div class="container">
    <div class="cta-card">
      <div>
        <h2>Own the moment.</h2>
        <p>Join thousands of collectors who made the switch.</p>
      </div>
      <a href="#" class="btn">Shop now →</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container footer-inner">
    <span>© 2026 LUMINA. All rights reserved.</span>
    <div class="footer-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="#">Support</a>
    </div>
    <div class="social">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-youtube"></i>
    </div>
  </div>
</footer>

</body>
</html>
