export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The Harvest Hub - Premium Indian spices and oilseeds exported globally. Direct from farmers, certified quality.">
    <meta name="keywords" content="agricultural export, dry red chillies, peanuts, groundnuts, B2B trade, Indian spices">
    <title>The Harvest Hub - Premium Agricultural Exports</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
        }

        /* Color Scheme */
        :root {
            --primary-green: #1a5f4a;
            --accent-red: #c41e3a;
            --light-bg: #f0f5f3;
            --white: #ffffff;
            --gray-light: #e8e8e8;
            --gray-dark: #4a4a4a;
            --text-primary: #1a1a1a;
            --text-secondary: #666;
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 600;
            color: var(--text-primary);
        }

        h1 {
            font-size: 3.5rem;
            line-height: 1.2;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2.5rem;
            line-height: 1.3;
            margin-bottom: 1.5rem;
        }

        h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }

        /* Header & Navigation */
        header {
            background: var(--white);
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70px;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-green);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-primary);
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--accent-red);
        }

        .nav-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 5px;
        }

        .nav-toggle span {
            width: 25px;
            height: 3px;
            background: var(--primary-green);
            border-radius: 2px;
            transition: all 0.3s ease;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, var(--primary-green) 0%, #2a7a5f 100%);
            color: var(--white);
            padding: 6rem 2rem;
            text-align: center;
            min-height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: 
                linear-gradient(135deg, rgba(26, 95, 74, 0.92) 0%, rgba(42, 122, 95, 0.92) 100%),
                radial-gradient(circle at 20% 80%, rgba(196, 30, 58, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(26, 95, 74, 0.1) 0%, transparent 50%);
            background-size: cover;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .hero::after {
            content: '';
            position: absolute;
            bottom: -30%;
            left: -5%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(196, 30, 58, 0.08) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .hero-content {
            max-width: 900px;
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            color: var(--white);
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
        }

        .hero p {
            color: rgba(255,255,255,0.95);
            font-size: 1.25rem;
            margin-bottom: 2.5rem;
            font-weight: 300;
        }

        .cta-button {
            display: inline-block;
            background: var(--accent-red);
            color: var(--white);
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 6px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(196, 30, 58, 0.3);
        }

        .cta-button:hover {
            background: #a01830;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(196, 30, 58, 0.4);
        }

        .cta-button-secondary {
            background: var(--white);
            color: var(--primary-green);
        }

        .cta-button-secondary:hover {
            background: #f0f5f3;
        }

        /* Container */
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        /* Section Spacing */
        section {
            padding: 5rem 2rem;
        }

        section.alt {
            background: var(--light-bg);
        }

        /* About Section */
        .about {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-content h2 {
            color: var(--primary-green);
            margin-bottom: 1.5rem;
        }

        .about-content p {
            margin-bottom: 1.25rem;
            font-size: 1.05rem;
            color: #555;
        }

        .about-features {
            list-style: none;
            margin-top: 2rem;
        }

        .about-features li {
            padding: 0.75rem 0;
            padding-left: 2rem;
            position: relative;
            color: #555;
            font-weight: 500;
        }

        .about-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--accent-red);
            font-weight: bold;
            font-size: 1.2rem;
        }

        .about-image {
            background: linear-gradient(135deg, var(--primary-green), #2a7a5f);
            border-radius: 12px;
            min-height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-size: 4rem;
        }

        /* Product Catalog */
        .products h2 {
            color: var(--primary-green);
            text-align: center;
            margin-bottom: 3rem;
        }

        .product-section-title {
            font-size: 1.8rem;
            color: var(--primary-green);
            margin-top: 2.5rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 3px solid var(--accent-red);
            display: inline-block;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .product-card {
            background: var(--white);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            border-top: 4px solid var(--primary-green);
        }

        .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .product-card.chilli {
            border-top-color: var(--accent-red);
        }

        .product-card-header {
            background: linear-gradient(135deg, var(--primary-green), #2a7a5f);
            color: var(--white);
            padding: 1.5rem;
            text-align: center;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .product-card.chilli .product-card-header {
            background: linear-gradient(135deg, var(--accent-red), #a01830);
        }

        .product-card h3 {
            color: var(--white);
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }

        .product-card-body {
            padding: 1.5rem;
        }

        .product-specs {
            list-style: none;
            margin: 1rem 0;
        }

        .product-specs li {
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--gray-light);
            font-size: 0.95rem;
            color: #666;
        }

        .product-specs li:last-child {
            border-bottom: none;
        }

        .spec-label {
            font-weight: 600;
            color: var(--primary-green);
        }

        /* Quality & Certifications */
        .quality h2 {
            color: var(--primary-green);
            text-align: center;
            margin-bottom: 3rem;
        }

        .quality-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .quality-card {
            background: var(--white);
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            border-bottom: 4px solid var(--primary-green);
        }

        .quality-card.highlight {
            border-bottom-color: var(--accent-red);
            transform: scale(1.02);
        }

        .quality-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .quality-card h3 {
            color: var(--primary-green);
            margin-bottom: 1rem;
        }

        .quality-card.highlight h3 {
            color: var(--accent-red);
        }

        .certifications {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 2px solid var(--gray-light);
        }

        .cert-badge {
            background: var(--light-bg);
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            border: 2px solid var(--primary-green);
        }

        .cert-badge-icon {
            font-size: 2.5rem;
            margin-bottom: 0.75rem;
        }

        .cert-badge p {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--primary-green);
            margin: 0;
        }

        /* Lead Form */
        .lead-capture {
            max-width: 700px;
            margin: 0 auto;
        }

        .lead-capture h2 {
            color: var(--primary-green);
            text-align: center;
            margin-bottom: 2rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.875rem;
            border: 2px solid var(--gray-light);
            border-radius: 6px;
            font-size: 1rem;
            font-family: inherit;
            transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-green);
            background: rgba(26, 95, 74, 0.02);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .form-group-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }

        .form-submit {
            width: 100%;
            padding: 1.125rem;
            background: var(--accent-red);
            color: var(--white);
            border: none;
            border-radius: 6px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1rem;
        }

        .form-submit:hover {
            background: #a01830;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(196, 30, 58, 0.3);
        }

        .form-message {
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 6px;
            text-align: center;
            display: none;
        }

        .form-message.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
            display: block;
        }

        .form-message.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
            display: block;
        }

        /* Footer */
        footer {
            background: var(--primary-green);
            color: var(--white);
            padding: 3rem 2rem;
            margin-top: 3rem;
        }

        .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2.5rem;
            margin-bottom: 2rem;
        }

        .footer-section h4 {
            color: var(--white);
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.75rem;
        }

        .footer-section a {
            color: rgba(255,255,255,0.85);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-section a:hover {
            color: var(--accent-red);
        }

        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.2);
            padding-top: 2rem;
            text-align: center;
            color: rgba(255,255,255,0.8);
            font-size: 0.95rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 2rem;
            }

            .about {
                grid-template-columns: 1fr;
                gap: 2.5rem;
            }

            .form-group-row {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            nav {
                padding: 0 1.5rem;
            }

            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                right: 0;
                background: var(--white);
                padding: 1.5rem;
                gap: 1rem;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }

            .nav-links.active {
                display: flex;
            }

            .nav-toggle {
                display: flex;
            }

            h1 {
                font-size: 2rem;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .hero p {
                font-size: 1rem;
            }

            h2 {
                font-size: 1.5rem;
            }

            section {
                padding: 3rem 1.5rem;
            }

            .hero {
                padding: 3rem 1.5rem;
                min-height: auto;
            }

            .product-grid {
                grid-template-columns: 1fr;
            }

            .quality-grid {
                grid-template-columns: 1fr;
            }

            .quality-card.highlight {
                transform: scale(1);
            }

            .certifications {
                grid-template-columns: repeat(2, 1fr);
            }

            .footer-content {
                gap: 1.5rem;
            }
        }

        @media (max-width: 480px) {
            h1 {
                font-size: 1.5rem;
            }

            .hero h1 {
                font-size: 1.5rem;
            }

            h2 {
                font-size: 1.3rem;
            }

            h3 {
                font-size: 1.1rem;
            }

            p {
                font-size: 0.95rem;
            }

            section {
                padding: 2.5rem 1rem;
            }

            .cta-button {
                padding: 0.875rem 2rem;
                font-size: 1rem;
            }

            .certifications {
                grid-template-columns: 1fr;
            }

            .logo {
                font-size: 1.3rem;
            }

            nav {
                padding: 0 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation Header -->
    <header>
        <nav>
            <div class="logo">
                🌾 The Harvest Hub
            </div>
            <ul class="nav-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#quality">Quality</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="nav-toggle" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Premium Indian Spices & Oilseeds Delivered Globally</h1>
            <p>Direct from verified farmers with stringent quality control and certified export compliance</p>
            <button class="cta-button" onclick="scrollToSection('contact')">Request a Quote</button>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="alt">
        <div class="container">
            <div class="about">
                <div class="about-content">
                    <h2>Farm-to-Port Excellence</h2>
                    <p>The Harvest Hub connects global B2B commodity buyers directly with India's most trusted agricultural producers. Our vertically integrated supply chain ensures transparency, quality, and reliability at every step.</p>
                    <ul class="about-features">
                        <li>Direct farmer sourcing for optimal freshness</li>
                        <li>ISO-certified processing facilities</li>
                        <li>Advanced testing protocols and quality assurance</li>
                        <li>Competitive bulk pricing and flexible contracts</li>
                        <li>Efficient port-to-destination logistics</li>
                        <li>Complete regulatory compliance documentation</li>
                    </ul>
                </div>
                <div class="about-image">
                    🌾
                </div>
            </div>
        </div>
    </section>

    <!-- Product Catalog -->
    <section id="products" class="products">
        <div class="container">
            <h2>Premium Product Catalog</h2>

            <!-- Dry Red Chillies -->
            <div class="product-section-title">Dry Red Chillies</div>
            <div class="product-grid">
                <div class="product-card chilli">
                    <div class="product-card-header">
                        <h3>Byadagi</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">High Color, Low Heat</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">SHU Heat:</span> 2,000 - 4,000</li>
                            <li><span class="spec-label">ASTA Color:</span> 175-200</li>
                            <li><span class="spec-label">Moisture:</span> 8-10%</li>
                            <li><span class="spec-label">Count:</span> 120-150 per 100g</li>
                            <li><span class="spec-label">Origin:</span> Karnataka</li>
                        </ul>
                    </div>
                </div>

                <div class="product-card chilli">
                    <div class="product-card-header">
                        <h3>Guntur Sannam</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Balanced Heat & Color</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">SHU Heat:</span> 30,000 - 50,000</li>
                            <li><span class="spec-label">ASTA Color:</span> 130-160</li>
                            <li><span class="spec-label">Moisture:</span> 8-10%</li>
                            <li><span class="spec-label">Count:</span> 100-130 per 100g</li>
                            <li><span class="spec-label">Origin:</span> Andhra Pradesh</li>
                        </ul>
                    </div>
                </div>

                <div class="product-card chilli">
                    <div class="product-card-header">
                        <h3>Teja S17</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Extreme Heat Profile</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">SHU Heat:</span> 80,000 - 100,000</li>
                            <li><span class="spec-label">ASTA Color:</span> 120-150</li>
                            <li><span class="spec-label">Moisture:</span> 8-9%</li>
                            <li><span class="spec-label">Count:</span> 90-110 per 100g</li>
                            <li><span class="spec-label">Origin:</span> Telangana</li>
                        </ul>
                    </div>
                </div>

                <div class="product-card chilli">
                    <div class="product-card-header">
                        <h3>Kashmiri</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Mild, Deep Red</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">SHU Heat:</span> 1,000 - 2,000</li>
                            <li><span class="spec-label">ASTA Color:</span> 180-210</li>
                            <li><span class="spec-label">Moisture:</span> 8-11%</li>
                            <li><span class="spec-label">Count:</span> 130-160 per 100g</li>
                            <li><span class="spec-label">Origin:</span> Jammu & Kashmir</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Premium Peanuts -->
            <div class="product-section-title">Premium Peanuts & Groundnuts</div>
            <div class="product-grid">
                <div class="product-card">
                    <div class="product-card-header">
                        <h3>Bold/Runner Type</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Large, Quality Grade</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">Size:</span> 40/50 count per oz</li>
                            <li><span class="spec-label">Grade:</span> Hand-picked Virginia</li>
                            <li><span class="spec-label">Oil Content:</span> 48-52%</li>
                            <li><span class="spec-label">Moisture:</span> 5-7%</li>
                            <li><span class="spec-label">Availability:</span> Raw & Roasted</li>
                        </ul>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-card-header">
                        <h3>Java/Spanish Type</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Versatile & Affordable</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">Size:</span> 70/80 count per oz</li>
                            <li><span class="spec-label">Grade:</span> Premium Grade A</li>
                            <li><span class="spec-label">Oil Content:</span> 45-50%</li>
                            <li><span class="spec-label">Moisture:</span> 5-7%</li>
                            <li><span class="spec-label">Availability:</span> Raw & Roasted</li>
                        </ul>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-card-header">
                        <h3>Blanched Peanuts</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Premium Processing</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">Form:</span> Blanched kernels</li>
                            <li><span class="spec-label">Whiteness:</span> 95% minimum</li>
                            <li><span class="spec-label">Oil Content:</span> 48-52%</li>
                            <li><span class="spec-label">Moisture:</span> 2-3%</li>
                            <li><span class="spec-label">Purity:</span> 99.5% minimum</li>
                        </ul>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-card-header">
                        <h3>Inshell Peanuts</h3>
                        <p style="margin: 0; font-size: 0.9rem; opacity: 0.9;">Raw & Roasted</p>
                    </div>
                    <div class="product-card-body">
                        <ul class="product-specs">
                            <li><span class="spec-label">Form:</span> Complete in-shell</li>
                            <li><span class="spec-label">Grade:</span> Jumbo & Medium</li>
                            <li><span class="spec-label">Kernel Filled:</span> 99% minimum</li>
                            <li><span class="spec-label">Moisture:</span> 6-8%</li>
                            <li><span class="spec-label">Availability:</span> Raw & Roasted</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quality & Certifications -->
    <section id="quality" class="quality alt">
        <div class="container">
            <h2>Quality Assurance & Testing</h2>

            <div class="quality-grid">
                <div class="quality-card">
                    <div class="quality-icon">🧪</div>
                    <h3>Aflatoxin Testing</h3>
                    <p>Advanced laboratory testing ensuring strict mycotoxin limits compliance for all shipments.</p>
                </div>

                <div class="quality-card">
                    <div class="quality-icon">⚖️</div>
                    <h3>Moisture Analysis</h3>
                    <p>Precise moisture content measurement to ensure optimal shelf-life and quality preservation.</p>
                </div>

                <div class="quality-card highlight">
                    <div class="quality-icon">✓</div>
                    <h3>Purity Standards</h3>
                    <p>Rigorous inspection protocols removing foreign matter and ensuring product consistency.</p>
                </div>

                <div class="quality-card">
                    <div class="quality-icon">🎯</div>
                    <h3>Color Assessment</h3>
                    <p>ASTA color grading and spectrophotometric analysis for chillies and specialty crops.</p>
                </div>

                <div class="quality-card">
                    <div class="quality-icon">🔍</div>
                    <h3>Microbial Testing</h3>
                    <p>Complete microbiological screening including E. coli, Salmonella, and pathogenic bacteria.</p>
                </div>

                <div class="quality-card">
                    <div class="quality-icon">📋</div>
                    <h3>Documentation</h3>
                    <p>Complete traceability documentation and certificates of analysis with every shipment.</p>
                </div>
            </div>

            <div class="certifications">
                <div class="cert-badge">
                    <div class="cert-badge-icon">🏅</div>
                    <p>APEDA Certified</p>
                </div>
                <div class="cert-badge">
                    <div class="cert-badge-icon">🏆</div>
                    <p>Spices Board Approved</p>
                </div>
                <div class="cert-badge">
                    <div class="cert-badge-icon">📜</div>
                    <p>ISO 9001:2015</p>
                </div>
                <div class="cert-badge">
                    <div class="cert-badge-icon">🌍</div>
                    <p>Export Compliant</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Lead Capture Form -->
    <section id="contact" class="lead-capture">
        <div class="container">
            <h2>Request a B2B Quote</h2>
            <form id="leadForm" onsubmit="handleFormSubmit(event)">
                <div class="form-group">
                    <label for="companyName">Company Name *</label>
                    <input type="text" id="companyName" name="companyName" required placeholder="Your Company Name">
                </div>

                <div class="form-group-row">
                    <div class="form-group">
                        <label for="contactName">Contact Person *</label>
                        <input type="text" id="contactName" name="contactName" required placeholder="Full Name">
                    </div>
                    <div class="form-group">
                        <label for="email">Business Email *</label>
                        <input type="email" id="email" name="email" required placeholder="email@company.com">
                    </div>
                </div>

                <div class="form-group-row">
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000">
                    </div>
                    <div class="form-group">
                        <label for="country">Country *</label>
                        <input type="text" id="country" name="country" required placeholder="Country of Operation">
                    </div>
                </div>

                <div class="form-group">
                    <label for="productInterest">Product Interest *</label>
                    <select id="productInterest" name="productInterest" required>
                        <option value="">Select Products</option>
                        <option value="Byadagi Chillies">Byadagi Chillies</option>
                        <option value="Guntur Sannam Chillies">Guntur Sannam Chillies</option>
                        <option value="Teja S17 Chillies">Teja S17 Chillies</option>
                        <option value="Kashmiri Chillies">Kashmiri Chillies</option>
                        <option value="Bold/Runner Peanuts">Bold/Runner Peanuts</option>
                        <option value="Java/Spanish Peanuts">Java/Spanish Peanuts</option>
                        <option value="Blanched Peanuts">Blanched Peanuts</option>
                        <option value="Inshell Peanuts">Inshell Peanuts</option>
                        <option value="Multiple Products">Multiple Products</option>
                    </select>
                </div>

                <div class="form-group-row">
                    <div class="form-group">
                        <label for="volume">Annual Volume (Metric Tons) *</label>
                        <input type="number" id="volume" name="volume" required placeholder="Expected volume" min="0" step="0.1">
                    </div>
                    <div class="form-group">
                        <label for="destinationPort">Destination Port *</label>
                        <input type="text" id="destinationPort" name="destinationPort" required placeholder="Port of Delivery">
                    </div>
                </div>

                <div class="form-group">
                    <label for="message">Additional Requirements</label>
                    <textarea id="message" name="message" placeholder="Specifications, certifications, or special requests..."></textarea>
                </div>

                <button type="submit" class="form-submit">Submit Quote Request</button>
                <div id="formMessage" class="form-message"></div>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>🌾 The Harvest Hub</h4>
                <p>Premium agricultural exports connecting global B2B buyers with India's finest producers.</p>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#quality">Quality</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Products</h4>
                <ul>
                    <li><a href="#products">Dry Red Chillies</a></li>
                    <li><a href="#products">Premium Peanuts</a></li>
                    <li><a href="#products">Groundnuts</a></li>
                    <li><a href="#products">Specialty Crops</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Contact Info</h4>
                <ul>
                    <li><a href="mailto:business@harvesthub.in">business@harvesthub.in</a></li>
                    <li><a href="tel:+911234567890">+91 (123) 456-7890</a></li>
                    <li>Export Division, India</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 The Harvest Hub. All rights reserved. | Premium Agricultural Exports</p>
        </div>
    </footer>

    <script>
        // Mobile Navigation Toggle
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Close menu when link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Smooth scroll to section
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Form Submission Handler
        function handleFormSubmit(event) {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const messageDiv = document.getElementById('formMessage');

            // Validate form
            const companyName = document.getElementById('companyName').value.trim();
            const email = document.getElementById('email').value.trim();
            const productInterest = document.getElementById('productInterest').value;
            const volume = document.getElementById('volume').value;
            const destinationPort = document.getElementById('destinationPort').value.trim();

            if (!companyName || !email || !productInterest || !volume || !destinationPort) {
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'Please fill in all required fields.';
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'Please enter a valid email address.';
                return;
            }

            // Prepare data for submission
            const submissionData = {
                company: companyName,
                contact: document.getElementById('contactName').value,
                email: email,
                phone: document.getElementById('phone').value || 'Not provided',
                country: document.getElementById('country').value,
                productInterest: productInterest,
                volume: volume + ' MT',
                destinationPort: destinationPort,
                message: document.getElementById('message').value || 'None',
                timestamp: new Date().toISOString()
            };

            // Simulate form submission (in production, this would send to a backend)
            console.log('Form Submission Data:', submissionData);

            // Show success message
            messageDiv.className = 'form-message success';
            messageDiv.textContent = 'Thank you! Your quote request has been received. We will contact you within 24 hours.';

            // Reset form
            form.reset();

            // Clear message after 5 seconds
            setTimeout(() => {
                messageDiv.className = 'form-message';
            }, 5000);
        }

        // Add scroll animations
        window.addEventListener('scroll', () => {
            const elements = document.querySelectorAll('.product-card, .quality-card');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        });

        // Initialize animation opacity
        document.querySelectorAll('.product-card, .quality-card').forEach(el => {
            el.style.opacity = '0.8';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
        });
    </script>
</body>
</html>
    ` }} />
  );
}'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // Dynamically load Lucide icons once the component mounts in the browser
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.lucide) {
        // @ts-ignore
        window.lucide.createIcons();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // UI interaction handlers mapped from the design build
  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) mobileMenu.classList.toggle('hidden');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectProductAndScroll = (productValue: string) => {
    const dropdown = document.getElementById('productInterest') as HTMLSelectElement;
    if (dropdown) {
      dropdown.value = productValue;
    }
    scrollToSection('contact');
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const messageDiv = document.getElementById('formMessage');
    if (!messageDiv) return;

    const companyName = (document.getElementById('companyName') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const productInterest = (document.getElementById('productInterest') as HTMLSelectElement).value;
    const volume = (document.getElementById('volume') as HTMLInputElement).value;
    const destinationPort = (document.getElementById('destinationPort') as HTMLInputElement).value.trim();

    if (!companyName || !email || !productInterest || !volume || !destinationPort) {
      messageDiv.className = 'mt-4 p-4 rounded-xl text-center block bg-red-100 text-red-800 border border-red-200';
      messageDiv.textContent = 'Please fill in all required fields.';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageDiv.className = 'mt-4 p-4 rounded-xl text-center block bg-red-100 text-red-800 border border-red-200';
      messageDiv.textContent = 'Please enter a valid business email address.';
      return;
    }

    // Direct logging output for lead verification
    console.log('B2B Lead Sourcing Specs Verified:', {
      company: companyName,
      email: email,
      product: productInterest,
      volume: volume + ' MT',
      port: destinationPort,
      timestamp: new Date().toISOString()
    });

    messageDiv.className = 'mt-4 p-4 rounded-xl text-center block bg-emerald-100 text-emerald-800 border border-emerald-200';
    messageDiv.textContent = 'Thank you! Your quote request has been received. Our trade desk will contact you within 12 business hours.';

    form.reset();

    setTimeout(() => {
      messageDiv.className = 'hidden mt-4 p-4 rounded-xl text-center';
    }, 6000);
  };

  return (
    <>
      {/* Dynamic Head Injectors for Tailwind CSS v4 and Google Fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" />
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" defer></script>

      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; background-color: #FDFDFB; color: #1e293b; }
        h1, h2, h3, h4 { font-family: 'Plus Jakarta Sans', sans-serif; }
        .bg-agri-green { background-color: #0B4624; }
        .text-agri-green { color: #0B4624; }
        .border-agri-green { border-color: #0B4624; }
        .bg-chili-red { background-color: #C82217; }
        .text-chili-red { color: #C82217; }
        .hover\\:bg-agri-green-dark:hover { background-color: #062B15; }
        .hover\\:bg-chili-red-dark:hover { background-color: #A3180F; }
      `}} />

      <div class="bg-[#FDFDFB] text-slate-800 antialiased selection:bg-red-600 selection:text-white">
        
        {/* Top Info Bar */}
        <div class="bg-emerald-950 text-emerald-100/80 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/50">
          <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1"><i data-lucide="globe" class="w-3.5 h-3.5 text-red-500"></i> Global B2B Supply Chain</span>
              <span class="hidden md:inline-flex items-center gap-1"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-400"></i> APEDA & Spices Board Compliant</span>
            </div>
            <div class="flex items-center gap-4">
              <a href="mailto:business@harvesthub.in" class="hover:text-white transition flex items-center gap-1"><i data-lucide="mail" class="w-3.5 h-3.5"></i> business@harvesthub.in</a>
              <span class="text-emerald-800">|</span>
              <span class="flex items-center gap-1"><i data-lucide="shield" class="w-3.5 h-3.5 text-emerald-400"></i> SGS / Geo-Chem Certified Quality</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="bg-agri-green text-white p-2.5 rounded-xl shadow-md shadow-emerald-900/10">
                <i data-lucide="sprout" class="w-6 h-6"></i>
              </div>
              <div>
                <span class="text-xl font-extrabold tracking-tight text-emerald-950 block leading-tight">THE HARVEST HUB</span>
                <span class="text-[10px] font-bold tracking-widest text-chili-red uppercase block">Premium Agri Exports</span>
              </div>
            </div>
            
            <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#about" class="hover:text-agri-green transition">About Us</a>
              <a href="#products" class="hover:text-chili-red transition">Our Products</a>
              <a href="#quality" class="hover:text-agri-green transition">Quality Assurance</a>
            </nav>

            <div class="flex items-center gap-4">
              <button onClick={() => scrollToSection('contact')} class="bg-chili-red text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm shadow-red-900/20 hover:bg-chili-red-dark transition duration-200 cursor-pointer">
                Request Bulk Quote
              </button>
              <button onClick={toggleMenu} class="md:hidden text-slate-600 hover:text-emerald-950 focus:outline-hidden">
                <i data-lucide="menu" class="w-6 h-6"></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown Links */}
          <div id="mobileMenu" class="hidden md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-3 shadow-md">
            <a href="#about" onClick={toggleMenu} class="block text-sm font-semibold text-slate-600 hover:text-agri-green">About Us</a>
            <a href="#products" onClick={toggleMenu} class="block text-sm font-semibold text-slate-600 hover:text-chili-red">Our Products</a>
            <a href="#quality" onClick={toggleMenu} class="block text-sm font-semibold text-slate-600 hover:text-agri-green">Quality Assurance</a>
          </div>
        </header>

        {/* Hero Section */}
        <section class="relative bg-linear-to-b from-emerald-50/60 to-white pt-12 pb-20 md:py-28 overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div class="lg:col-span-7 text-center lg:text-left space-y-6">
                <div class="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-semibold text-emerald-900">
                  <span class="w-2 x-2 h-2 rounded-full bg-chili-red animate-pulse"></span> Direct From Origin: India
                </div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-emerald-950 leading-tight">
                  Premium Indian Spices & Oilseeds <span class="text-chili-red">Delivered Globally.</span>
                </h1>
                <p class="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  The Harvest Hub connects global B2B commodity buyers directly with India's most trusted agricultural producers. We supply authentic, premium-grade dry red chillies and high-yield groundnuts with guaranteed quality standards and flawless port-to-port logistics.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <button onClick={() => scrollToSection('contact')} class="w-full sm:w-auto bg-agri-green text-white text-center font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 hover:bg-agri-green-dark transition duration-200 flex items-center justify-center gap-2 cursor-pointer">
                    <i data-lucide="file-text" class="w-4 h-4"></i> Request a Quote
                  </button>
                  <button onClick={() => scrollToSection('products')} class="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 text-center font-bold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2 cursor-pointer">
                    Explore Catalog <i data-lucide="arrow-down" class="w-4 h-4 text-slate-400"></i>
                  </button>
                </div>
                
                {/* B2B Trust Badges */}
                <div class="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                  <div>
                    <span class="block text-2xl font-extrabold text-emerald-950">100%</span>
                    <span class="text-xs font-medium text-slate-500">Farmer Sourced</span>
                  </div>
                  <div>
                    <span class="block text-2xl font-extrabold text-emerald-950">&lt; 10%</span>
                    <span class="text-xs font-medium text-slate-500">Moisture Guard</span>
                  </div>
                  <div>
                    <span class="block text-2xl font-extrabold text-emerald-950">ISO Certified</span>
                    <span class="text-xs font-medium text-slate-500">Processing Facilities</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Visual Elements */}
              <div class="lg:col-span-5 relative flex justify-center">
                <div class="w-full max-w-[420px] aspect-square rounded-2xl bg-linear-to-tr from-emerald-800 to-emerald-600 shadow-2xl relative flex flex-col justify-between p-8 text-white overflow-hidden group">
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]"></div>
                  <div class="flex justify-between items-start z-10">
                    <div class="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                      <i data-lucide="ship" class="w-6 h-6 text-emerald-300"></i>
                    </div>
                    <span class="bg-chili-red font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 shadow-sm">Container Ready</span>
                  </div>
                  <div class="space-y-3 z-10">
                    <span class="text-emerald-300 text-xs font-bold tracking-widest uppercase block">Export Logistics</span>
                    <h3 class="text-2xl font-extrabold tracking-tight leading-tight">FOB & CIF Shipping to Any Major Global Port</h3>
                    <p class="text-white/80 text-xs leading-relaxed">Rigorous containerization, customized multi-layer moisture barrier packaging, and rapid export compliance handling across major international shipping channels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" class="py-20 border-t border-slate-100 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span class="text-xs font-bold tracking-widest text-agri-green uppercase">Farm-To-Port Excellence</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">The Sustainable Sourcing Hub</h2>
              <p class="text-slate-600">The Harvest Hub connects global B2B commodity buyers directly with India's most trusted agricultural producers. Our vertically integrated supply chain ensures transparency, quality, and reliability at every step.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                <div class="w-12 h-12 rounded-xl bg-emerald-100 text-agri-green flex items-center justify-center"><i data-lucide="users" class="w-6 h-6"></i></div>
                <h3 class="text-lg font-bold text-emerald-950">Ethical Sourcing</h3>
                <p class="text-sm text-slate-600 leading-relaxed">Direct farmer alliances ensuring optimal freshness, absolute traceability, and competitive bulk pricing architectures.</p>
              </div>
              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                <div class="w-12 h-12 rounded-xl bg-red-100 text-chili-red flex items-center justify-center"><i data-lucide="shield-check" class="w-6 h-6"></i></div>
                <h3 class="text-lg font-bold text-emerald-950">Advanced Testing</h3>
                <p class="text-sm text-slate-600 leading-relaxed">Advanced processing layout supporting rigorous moisture management, color sorting, and multi-tier lab grading.</p>
              </div>
              <div class="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
                <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center"><i data-lucide="package" class="w-6 h-6"></i></div>
                <h3 class="text-lg font-bold text-emerald-950">Complete Compliance</h3>
                <p class="text-sm text-slate-600 leading-relaxed">Flawless documentation workflows fulfilling strict international standards across custom clearances and destination markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Container */}
        <section id="products" class="py-20 bg-slate-50 border-y border-slate-100">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center space-y-2 mb-12">
              <span class="text-xs font-bold tracking-widest text-chili-red uppercase">Premium Catalog</span>
              <h2 class="text-3xl font-extrabold text-emerald-950 tracking-tight">Our Export Commodities</h2>
            </div>

            {/* Dry Red Chillies Subsection