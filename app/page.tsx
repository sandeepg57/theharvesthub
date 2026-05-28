export default function Page() {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The Harvest Hub - Premium Indian spices and oilseeds exported globally. Direct from farmers, certified quality.">
    <meta name="keywords" content="agricultural export, dry red chillies, peanuts, groundnuts, B2B trade, Indian spices">
    <title>The Harvest Hub - Premium Agricultural Exports</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
    <!-- Lucide Icons CDN -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        html {
            scroll-behavior: smooth;
        }
        body {
            font-family: 'Inter', sans-serif;
        }
        h1, h2, h3, h4 {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .bg-agri-green { background-color: #0B4624; }
        .text-agri-green { color: #0B4624; }
        .border-agri-green { border-color: #0B4624; }
        .bg-chili-red { background-color: #C82217; }
        .text-chili-red { color: #C82217; }
        .hover\:bg-agri-green-dark:hover { background-color: #062B15; }
        .hover\:bg-chili-red-dark:hover { background-color: #A3180F; }
    </style>
</head>
<body class="bg-[#FDFDFB] text-slate-800 antialiased selection:bg-red-600 selection:text-white">

    <!-- Top Info Bar -->
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

    <!-- Navigation -->
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
                <button onclick="scrollToSection('contact')" class="bg-chili-red text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm shadow-red-900/20 hover:bg-chili-red-dark transition duration-200 cursor-pointer">
                    Request Bulk Quote
                </button>
                <!-- Mobile Menu Button -->
                <button onclick="toggleMenu()" class="md:hidden text-slate-600 hover:text-emerald-950 focus:outline-hidden">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Dropdown Links -->
        <div id="mobileMenu" class="hidden md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-3 shadow-md">
            <a href="#about" onclick="toggleMenu()" class="block text-sm font-semibold text-slate-600 hover:text-agri-green">About Us</a>
            <a href="#products" onclick="toggleMenu()" class="block text-sm font-semibold text-slate-600 hover:text-chili-red">Our Products</a>
            <a href="#quality" onclick="toggleMenu()" class="block text-sm font-semibold text-slate-600 hover:text-agri-green">Quality Assurance</a>
        </div>
    </header>

    <!-- Hero Section -->
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
                        <button onclick="scrollToSection('contact')" class="w-full sm:w-auto bg-agri-green text-white text-center font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 hover:bg-agri-green-dark transition duration-200 flex items-center justify-center gap-2 cursor-pointer">
                            <i data-lucide="file-text" class="w-4 h-4"></i> Request a Quote
                        </button>
                        <button onclick="scrollToSection('products')" class="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 text-center font-bold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2 cursor-pointer">
                            Explore Catalog <i data-lucide="arrow-down" class="w-4 h-4 text-slate-400"></i>
                        </button>
                    </div>
                    
                    <!-- B2B Trust Badges -->
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
                
                <!-- Hero Visual Elements -->
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

    <!-- About Section -->
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

    <!-- Product Catalog Container -->
    <section id="products" class="py-20 bg-slate-50 border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center space-y-2 mb-12">
                <span class="text-xs font-bold tracking-widest text-chili-red uppercase">Premium Catalog</span>
                <h2 class="text-3xl font-extrabold text-emerald-950 tracking-tight">Our Export Commodities</h2>
            </div>

            <!-- Dry Red Chillies Subsection -->
            <div class="mb-6">
                <h3 class="text-xl font-bold text-emerald-950 border-b-2 border-chili-red inline-block pb-1 mb-8">Dry Red Chillies</h3>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <!-- Byadagi Chilli -->
                <div class="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-xl font-bold text-emerald-950">Byadagi</h3>
                            <span class="bg-red-50 text-chili-red text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-red-100">High Color</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">High Color, Low Heat Profile. Deep red wrinkled skin variety.</p>
                        <div class="space-y-2 border-t border-slate-100 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">SHU Heat Value:</span><span class="font-semibold text-slate-700">2,000 - 4,000</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">ASTA Color Value:</span><span class="font-semibold text-slate-700">175 - 200</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Limit:</span><span class="font-semibold text-slate-700">8% - 10%</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Export Sourcing:</span><span class="font-semibold text-slate-700">Karnataka Origin</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Byadagi Chillies')" class="mt-6 w-full text-center bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-chili-red transition cursor-pointer">Select Variant</button>
                </div>

                <!-- Guntur Sannam -->
                <div class="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-xl font-bold text-emerald-950">Guntur Sannam</h3>
                            <span class="bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-amber-100">Balanced Spice</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">Balanced Heat & Color trade standard framework parameters.</p>
                        <div class="space-y-2 border-t border-slate-100 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">SHU Heat Value:</span><span class="font-semibold text-slate-700">30,000 - 50,000</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">ASTA Color Value:</span><span class="font-semibold text-slate-700">130 - 160</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Limit:</span><span class="font-semibold text-slate-700">8% - 10%</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Export Sourcing:</span><span class="font-semibold text-slate-700">Andhra Pradesh</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Guntur Sannam Chillies')" class="mt-6 w-full text-center bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-chili-red transition cursor-pointer">Select Variant</button>
                </div>

                <!-- Teja S17 -->
                <div class="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-xl font-bold text-emerald-950">Teja S17</h3>
                            <span class="bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">Extreme Heat</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">Extreme Heat Profile engineered for commercial spice processors.</p>
                        <div class="space-y-2 border-t border-slate-100 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">SHU Heat Value:</span><span class="font-semibold text-slate-700">80,000 - 100,000</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">ASTA Color Value:</span><span class="font-semibold text-slate-700">120 - 150</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Limit:</span><span class="font-semibold text-slate-700">8% - 9%</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Export Sourcing:</span><span class="font-semibold text-slate-700">Telangana Origin</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Teja S17 Chillies')" class="mt-6 w-full text-center bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-chili-red transition cursor-pointer">Select Variant</button>
                </div>

                <!-- Kashmiri Chilli -->
                <div class="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-xl font-bold text-emerald-950">Kashmiri</h3>
                            <span class="bg-emerald-50 text-agri-green text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-emerald-100">Deep Crimson</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">Mild, Deep Crimson configuration for gourmet branding.</p>
                        <div class="space-y-2 border-t border-slate-100 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">SHU Heat Value:</span><span class="font-semibold text-slate-700">1,000 - 2,000</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">ASTA Color Value:</span><span class="font-semibold text-slate-700">180 - 210</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Limit:</span><span class="font-semibold text-slate-700">8% - 11%</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Export Sourcing:</span><span class="font-semibold text-slate-700">North India</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Kashmiri Chillies')" class="mt-6 w-full text-center bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-chili-red transition cursor-pointer">Select Variant</button>
                </div>
            </div>

            <!-- Peanuts/Groundnuts Subsection -->
            <div class="mb-6">
                <h3 class="text-xl font-bold text-emerald-950 border-b-2 border-emerald-800 inline-block pb-1 mb-8">Premium Peanuts & Groundnuts</h3>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Bold Variant -->
                <div class="bg-linear-to-b from-slate-50 to-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-lg font-bold text-emerald-950">Bold / Runner</h3>
                            <span class="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded font-mono">Large Grade</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">Hand-picked Virginia sorting infrastructure properties.</p>
                        <div class="space-y-2 border-t border-slate-200/50 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">Count Matrix:</span><span class="font-semibold text-slate-700">40/50 per Ounce</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Oil Percentage:</span><span class="font-semibold text-slate-700">48% - 52% Range</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Guard:</span><span class="font-semibold text-slate-700">5% - 7% Max</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Availability:</span><span class="font-semibold text-slate-700">Raw & Roasted</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Bold/Runner Peanuts')" class="mt-6 w-full text-center bg-agri-green text-white text-xs font-bold py-2.5 rounded-lg hover:bg-emerald-900 transition cursor-pointer">Select Variant</button>
                </div>

                <!-- Java Variant -->
                <div class="bg-linear-to-b from-slate-50 to-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-lg font-bold text-emerald-950">Java / Spanish</h3>
                            <span class="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded font-mono">Round Seeds</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">Premium Grade A configurations supporting high oil yields.</p>
                        <div class="space-y-2 border-t border-slate-200/50 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">Count Matrix:</span><span class="font-semibold text-slate-700">70/80 per Ounce</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Oil Percentage:</span><span class="font-semibold text-slate-700">45% - 50% Range</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Guard:</span><span class="font-semibold text-slate-700">5% - 7% Max</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Availability:</span><span class="font-semibold text-slate-700">Raw & Roasted</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Java/Spanish Peanuts')" class="mt-6 w-full text-center bg-agri-green text-white text-xs font-bold py-2.5 rounded-lg hover:bg-emerald-900 transition cursor-pointer">Select Variant</button>
                </div>

                <!-- Blanched Variant -->
                <div class="bg-linear-to-b from-slate-50 to-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-lg font-bold text-emerald-950">Blanched Kernels</h3>
                            <span class="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded font-mono">Skinless Raw</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">Premium skinless processing matrix optimizations.</p>
                        <div class="space-y-2 border-t border-slate-200/50 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">Calibration:</span><span class="font-semibold text-slate-700">Blanched Form</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Whiteness Cap:</span><span class="font-semibold text-slate-700">95% Minimum</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Guard:</span><span class="font-semibold text-slate-700">2% - 3% Strict</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Purity Grade:</span><span class="font-semibold text-slate-700">99.5% Sortex</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Blanched Peanuts')" class="mt-6 w-full text-center bg-agri-green text-white text-xs font-bold py-2.5 rounded-lg hover:bg-emerald-900 transition cursor-pointer">Select Variant</button>
                </div>

                <!-- Inshell Variant -->
                <div class="bg-linear-to-b from-slate-50 to-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
                    <div>
                        <div class="flex justify-between items-start gap-2 mb-4">
                            <h3 class="text-lg font-bold text-emerald-950">Inshell Pods</h3>
                            <span class="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 rounded font-mono">Raw/Roasted</span>
                        </div>
                        <p class="text-xs text-slate-500 mb-4">Jumbo and Medium clean intact exterior shells.</p>
                        <div class="space-y-2 border-t border-slate-200/50 pt-4 text-xs">
                            <div class="flex justify-between"><span class="text-slate-400">Shell Breakdown:</span><span class="font-semibold text-slate-700">Complete Inshell</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Pod Fill Rate:</span><span class="font-semibold text-slate-700">99% Minimum</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Moisture Guard:</span><span class="font-semibold text-slate-700">6% - 8% Max</span></div>
                            <div class="flex justify-between"><span class="text-slate-400">Availability:</span><span class="font-semibold text-slate-700">Raw & Roasted</span></div>
                        </div>
                    </div>
                    <button onclick="selectProductAndScroll('Inshell Peanuts')" class="mt-6 w-full text-center bg-agri-green text-white text-xs font-bold py-2.5 rounded-lg hover:bg-emerald-900 transition cursor-pointer">Select Variant</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Quality Assurance / Lab Certifications Section -->
    <section id="quality" class="py-25 bg-emerald-950 text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(11,70,36,0.8),transparent)]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <span class="text-xs font-bold tracking-widest text-emerald-400 uppercase block">Zero Contamination Guarantee</span>
                <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Quality Assurance & Testing Standards</h2>
                <p class="text-emerald-100/70 text-sm">International agricultural trade relies on strict safety thresholds. The Harvest Hub deploys extreme checkpoints to eliminate structural entry hazards.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div class="bg-white/5 backdrop-blur-xs border border-white/10 p-6 rounded-2xl text-center">
                    <div class="text-3xl mb-3">🧪</div>
                    <h3 class="font-bold text-lg mb-2 text-emerald-300">Aflatoxin Analysis</h3>
                    <p class="text-xs text-emerald-100/70 leading-relaxed">Advanced laboratory screening ensuring strict mycotoxin limits compliance for all target destinations.</p>
                </div>
                <div class="bg-white/5 backdrop-blur-xs border border-white/10 p-6 rounded-2xl text-center border-emerald-500/50 shadow-lg">
                    <div class="text-3xl mb-3">⚖️</div>
                    <h3 class="font-bold text-lg mb-2 text-red-400">Moisture Analysis</h3>
                    <p class="text-xs text-emerald-100/70 leading-relaxed">Precise moisture metrics to ensure optimal storage preservation and shield container stock from mildew.</p>
                </div>
                <div class="bg-white/5 backdrop-blur-xs border border-white/10 p-6 rounded-2xl text-center">
                    <div class="text-3xl mb-3">🎯</div>
                    <h3 class="font-bold text-lg mb-2 text-emerald-300">Purity Standards</h3>
                    <p class="text-xs text-emerald-100/70 leading-relaxed">Rigorous Sortex and manual screening to completely remove extraneous matter and visual defects.</p>
                </div>
                <div class="bg-white/5 backdrop-blur-xs border border-white/10 p-6 rounded-2xl text-center">
                    <div class="text-3xl mb-3">🔍</div>
                    <h3 class="font-bold text-lg mb-2 text-emerald-300">Color Assessment</h3>
                    <p class="text-xs text-emerald-100/70 leading-relaxed">Standardized ASTA spectrophotometric scaling benchmarks tracking uniform color values.</p>
                </div>
                <div class="bg-white/5 backdrop-blur-xs border border-white/10 p-6 rounded-2xl text-center">
                    <div class="text-3xl mb-3">📋</div>
                    <h3 class="font-bold text-lg mb-2 text-emerald-300">Microbial Testing</h3>
                    <p class="text-xs text-emerald-100/70 leading-relaxed">Exhaustive microbiological identification tracking Salmonella, E. coli, and micro-organism thresholds.</p>
                </div>
                <div class="bg-white/5 backdrop-blur-xs border border-white/10 p-6 rounded-2xl text-center">
                    <div class="text-3xl mb-3">📜</div>
                    <h3 class="font-bold text-lg mb-2 text-emerald-300">Traceability Logs</h3>
                    <p class="text-xs text-emerald-100/70 leading-relaxed">Complete transparent origin routing profiles data matching every batch out of storage coordinates.</p>
                </div>
            </div>

            <div class="border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div class="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div class="text-2xl mb-1">🏅</div>
                    <p class="text-xs font-bold text-emerald-400">APEDA Certified</p>
                </div>
                <div class="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div class="text-2xl mb-1">🏆</div>
                    <p class="text-xs font-bold text-emerald-400">Spices Board Approved</p>
                </div>
                <div class="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div class="text-2xl mb-1">📜</div>
                    <p class="text-xs font-bold text-emerald-400">ISO 9001:2015</p>
                </div>
                <div class="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div class="text-2xl mb-1">🌍</div>
                    <p class="text-xs font-bold text-emerald-400">Export Compliant</p>
                </div>
            </div>
        </div>
    </section>

    <!-- B2B Lead Generation Form -->
    <section id="contact" class="py-20 bg-linear-to-b from-slate-50 to-slate-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <div class="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
                <div class="bg-agri-green text-white px-8 py-8 text-center space-y-2">
                    <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Request Commercial Quotation</h2>
                    <p class="text-emerald-100/80 text-sm max-w-xl mx-auto">Complete your B2B sourcing specs below. Our export desk replies with localized FOB/CIF pricing coordinates.</p>
                </div>
                
                <form id="leadForm" class="p-8 sm:p-12 space-y-6" onsubmit="handleFormSubmit(event)">
                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name *</label>
                        <input type="text" id="companyName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="Your Registered Corporation">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Contact Person *</label>
                            <input type="text" id="contactName" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="Full Name">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Business Email *</label>
                            <input type="email" id="email" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="procurement@company.com">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                            <input type="tel" id="phone" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="+1 (555) 000-0000">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Country *</label>
                            <input type="text" id="country" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="Country of Operation">
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Product Interest *</label>
                        <select id="productInterest" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition">
                            <option value="">-- Select Target Crop --</option>
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

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Annual Volume (Metric Tons) *</label>
                            <input type="number" id="volume" required min="0" step="0.1" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="Expected volume">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Destination Port *</label>
                            <input type="text" id="destinationPort" required class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="Port of Delivery">
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Additional Requirements</label>
                        <textarea id="message" rows="4" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition" placeholder="Specifications, target certifications, packing instructions or shipping rules..."></textarea>
                    </div>

                    <button type="submit" class="w-full bg-chili-red text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 hover:bg-chili-red-dark transition duration-200 tracking-wide text-sm cursor-pointer">
                        SUBMIT OFFICIAL RFQ INQUIRY
                    </button>
                    
                    <div id="formMessage" class="mt-4 p-4 rounded-xl text-center hidden font-semibold"></div>
                </form>
            </div>
        </div>
    </section>

    <!-- Professional Footer Section -->
    <footer class="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            <div class="md:col-span-4 space-y-4">
                <div class="flex items-center gap-2 text-white">
                    <div class="bg-emerald-600 p-2 rounded-lg text-white">
                        <i data-lucide="sprout" class="w-5 h-5"></i>
                    </div>
                    <span class="text-lg font-bold tracking-tight">THE HARVEST HUB</span>
                </div>
                <p class="text-xs text-slate-400 max-w-sm leading-relaxed">
                    Premium agricultural exports connecting global B2B buyers with India's finest producers.
                </p>
            </div>

            <div class="md:col-span-2 space-y-3 text-xs">
                <h4 class="text-white font-bold tracking-wider uppercase text-slate-300">Quick Links</h4>
                <ul class="space-y-2">
                    <li><a href="#about" class="hover:text-white transition">About Us</a></li>
                    <li><a href="#products" class="hover:text-white transition">Products</a></li>
                    <li><a href="#quality" class="hover:text-white transition">Quality</a></li>
                    <li><a href="#contact" class="hover:text-white transition">Contact</a></li>
                </ul>
            </div>

            <div class="md:col-span-3 space-y-3 text-xs">
                <h4 class="text-white font-bold tracking-wider uppercase text-slate-300">Commodities</h4>
                <ul class="space-y-2">
                    <li><a href="#products" class="hover:text-white transition">Dry Red Chillies</a></li>
                    <li><a href="#products" class="hover:text-white transition">Premium Peanuts</a></li>
                    <li><a href="#products" class="hover:text-white transition">Groundnuts</a></li>
                    <li><a href="#products" class="hover:text-white transition">Specialty Crops</a></li>
                </ul>
            </div>

            <div class="md:col-span-3 space-y-3 text-xs">
                <h4 class="text-white font-bold tracking-wider uppercase text-slate-300">Contact Info</h4>
                <ul class="space-y-2">
                    <li><a href="mailto:business@harvesthub.in" class="hover:text-white transition">business@harvesthub.in</a></li>
                    <li><a href="tel:+911234567890" class="hover:text-white transition">+91 (123) 456-7890</a></li>
                    <li class="text-slate-500">Export Division, India</li>
                </ul>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/60 text-center text-xs text-slate-500">
            &copy; 2026 The Harvest Hub. All rights reserved. | Premium Agricultural Exports
        </div>
    </footer>

    <!-- Initialize Lucide Icons & Core JavaScript -->
    <script>
        lucide.createIcons();

        // Mobile Navigation Dropdown Toggle
        function toggleMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
        }

        // Smooth scroll tool helper
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Pre-fill selector drop down when picking from layout cards
        function selectProductAndScroll(productValue) {
            const dropdown = document.getElementById('productInterest');
            if (dropdown) {
                dropdown.value = productValue;
            }
            scrollToSection('contact');
        }

        // B2B Form Submission Engine
        function handleFormSubmit(event) {
            event.preventDefault();

            const form = event.target;
            const messageDiv = document.getElementById('formMessage');

            // Extraction metrics validation
            const companyName = document.getElementById('companyName').value.trim();
            const email = document.getElementById('email').value.trim();
            const productInterest = document.getElementById('productInterest').value;
            const volume = document.getElementById('volume').value;
            const destinationPort = document.getElementById('destinationPort').value.trim();

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

            // Assembly parameters logging array reference 
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

            console.log('Form Submission Data Verified:', submissionData);

            // Display positive status feedback configuration
            messageDiv.className = 'mt-4 p-4 rounded-xl text-center block bg-emerald-100 text-emerald-800 border border-emerald-200';
            messageDiv.textContent = 'Thank you! Your quote request has been received. We will contact you within 24 hours.';

            form.reset();

            // Clear visual toast elements after specified time lapse
            setTimeout(() => {
                messageDiv.className = 'hidden mt-4 p-4 rounded-xl text-center';
            }, 6000);
        }
    </script>
</body>
</html>
    ` }} />
    );
}