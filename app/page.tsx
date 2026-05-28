'use client';

import React, { useState } from 'react';
import {
  Globe,
  CheckCircle,
  Mail,
  Shield,
  Sprout,
  FileText,
  ArrowDown,
  Ship,
  Users,
  ShieldCheck,
  Package,
  ClipboardCheck
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    productInterest: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | React.HTMLSelectElement | React.HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submission Data:', {
      ...formData,
      timestamp: new Date().toISOString()
    });
    alert('Thank you! Your quote request has been received. We will contact you within 24 hours.');
  };

  return (
    <div className="bg-[#FDFDFB] text-slate-800 antialiased selection:bg-red-600 selection:text-white font-sans min-h-screen">

      {/* Top Info Bar */}
      <div className="bg-emerald-950 text-emerald-100/80 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-red-500" /> Global B2B Supply Chain
            </span>
            <span className="hidden md:inline-flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> APEDA & Spices Board Compliant
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@theharvesthub.com" className="hover:text-white transition flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" /> contact@theharvesthub.com
            </a>
            <span className="text-emerald-800">|</span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> SGS / Geo-Chem Certified Quality
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-agri-green text-white p-2.5 rounded-xl shadow-md shadow-emerald-900/10">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-emerald-950 block leading-tight font-heading">THE HARVEST HUB</span>
              <span className="text-[10px] font-bold tracking-widest text-chili-red uppercase block">Premium Agri Exports</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-agri-green transition">About Us</a>
            <a href="#chillies" className="hover:text-chili-red transition">Red Chillies</a>
            <a href="#peanuts" className="hover:text-agri-green transition">Peanuts & Groundnuts</a>
            <a href="#quality" className="hover:text-agri-green transition">Quality Assurance</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#rfq" className="bg-chili-red text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm shadow-red-900/20 hover:bg-chili-red-dark transition duration-200">
              Request Bulk Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-50/60 to-white pt-12 pb-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200/60 px-3 py-1 rounded-full text-xs font-semibold text-emerald-900">
                <span className="w-2 h-2 rounded-full bg-chili-red animate-pulse"></span> Direct From Origin: India
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-emerald-950 leading-tight font-heading">
                Premium Indian Red Chillies & Peanuts, <span class="text-chili-red">Delivered Globally.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The Harvest Hub bridges the gap between local Indian micro-farmers and international bulk buyers. We supply authentic, premium-grade dry red chillies and high-yield groundnuts with guaranteed quality standards, transparent pricing, and flawless port-to-port logistics.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#rfq" className="w-full sm:w-auto bg-agri-green text-white text-center font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 hover:bg-agri-green-dark transition duration-200 flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" /> Request MT Pricing
                </a>
                <a href="#chillies" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 text-center font-bold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2">
                  Explore Catalog <ArrowDown className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* B2B Trust Badges */}
              <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div>
                  <span className="block text-2xl font-extrabold text-emerald-950 font-heading">100%</span>
                  <span className="text-xs font-medium text-slate-500">Farmer Sourced</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-emerald-950 font-heading">&lt; 12%</span>
                  <span className="text-xs font-medium text-slate-500">Moisture Guard</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-emerald-950 font-heading">Aflatoxin</span>
                  <span className="text-xs font-medium text-slate-500">Strict Tested</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-[420px] aspect-square rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 shadow-2xl relative flex flex-col justify-between p-8 text-white overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]"></div>
                <div className="flex justify-between items-start z-10">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <Ship className="w-6 h-6 text-emerald-300" />
                  </div>
                  <span className="bg-chili-red font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 shadow-sm">Container Ready</span>
                </div>
                <div className="space-y-3 z-10">
                  <span className="text-emerald-300 text-xs font-bold tracking-widest uppercase block">Export Logistics</span>
                  <h3 className="text-2xl font-extrabold tracking-tight leading-tight font-heading">FOB & CIF Shipping to Any Major Global Port</h3>
                  <p className="text-white/80 text-xs leading-relaxed">Rigorous containerization, customized multi-layer moisture barrier packaging, and rapid customs handling out of Mumbai, Chennai, and Mundra ports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold tracking-widest text-agri-green uppercase">Farm-To-Port Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight font-heading">The Sustainable Sourcing Hub</h2>
            <p className="text-slate-600">We remove traditional middlemen trading layers. By dealing directly with farming clusters across Andhra Pradesh, Telangana, and Karnataka, we provide optimal profit margins back to agricultural communities while ensuring unrivaled container trace-ability for global buyers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-agri-green flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950 font-heading">Ethical Farmer Alliances</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Direct support framework empowering local farmers with standardized pre-harvest inputs and fair trade pricing practices.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-chili-red flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950 font-heading">Strict Quality Inspections</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Every batch undergoes exhaustive screening for sizing consistency, skin color values, aflatoxin compliance, and moisture limits.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950 font-heading">Tailored Commercial Packing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Available in standard jute bags, multi-wall paper packages, or vacuum-sealed PP bags configured to withstand extreme transit temperatures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog: Chillies */}
      <section id="chillies" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-chili-red uppercase">Commodity Selection 01</span>
              <h2 className="text-3xl font-extrabold text-emerald-950 tracking-tight mt-1 font-heading">Premium Indian Dry Red Chillies</h2>
            </div>
            <p className="text-slate-600 max-w-md text-sm">Sourced directly from Guntur (Andhra Pradesh) and Byadagi (Karnataka) markets.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Byadagi Card */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex justify-between items-start gap-2 mb-4">
                  <h3 className="text-xl font-bold text-emerald-950 font-heading">Byadagi Red Chilli</h3>
                  <span className="bg-red-50 text-chili-red text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-red-100">High Color</span>
                </div>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">Deep red crinkled skin, low pungency spice. Highly favored for deep color extraction without overriding heat.</p>
                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs">
                  <div className="flex justify-between"><span className="text-slate-400">ASTA Color Value:</span><span className="font-semibold text-slate-700">150 - 170 Max</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Heat Scale (SHU):</span><span className="font-semibold text-slate-700">12,000 - 15,000</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Moisture Content:</span><span className="font-semibold text-slate-700">&lt; 11% Max</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Stem Variant:</span><span className="font-semibold text-slate-700">With Stem / Stemless</span></div>
                </div>
              </div>
              <a href="#rfq" className="mt-6 w-full text-center bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-chili-red transition">Quote Variety</a>
            </div>

            {/* Guntur Sannam Card */}
            <div className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex justify-between items-start gap-2 mb-4">
                  <h3 className="text-xl font-bold text-emerald-950 font-heading">Guntur Sannam (S4)</h3>
                  <span className="bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-amber-100">Balanced Spice</span>
                </div>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">The global benchmark for culinary heat and industrial hot pepper flakes. Widely used across global food brands.</p>
                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs">
                  <div className="flex justify-between"><span className="text-slate-400">ASTA Color Value:</span><span className="font-semibold text-slate-700">85 - 100 Max</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Heat Scale (SHU):</span><span className="font-semibold text-slate-700">35,000 - 40,000</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Moisture Content:</span><span className="font-semibold text-slate-700">&lt; 12% Max</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Stem Variant:</span><span className="font-semibold text-slate-700">With Stem Only</span></div>
                </div>
              </div>
              <a href="#rfq" className="mt-6 w-full text-center bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-chili-red transition">Quote Variety</a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Compliance */}
      <section id="quality" className="py-25 bg-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase block">Global Quality Standards</span>
              <h2 className="text-3xl font-extrabold tracking-tight font-heading">Rigorous Laboratory Verification Protocols</h2>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                We eliminate processing uncertainties. Every production consignment passes critical safety evaluations conducted via independent tier-one testing labs before receiving container export release.
              </p>
              <div className="space-y-3 text-xs text-emerald-100">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span><strong>Pre-Shipment Fumigation:</strong> Full Aluminum Phosphide treatment protocols with official fumigation logs.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xs border border-white/10 p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-bold text-lg mb-1 font-heading">APEDA Registrations</h3>
                <p className="text-xs text-emerald-100/60 leading-relaxed">Fully registered and recognized exporter under the Agricultural and Processed Food Products Export Development Authority of India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ Form */}
      <section id="rfq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-extrabold text-emerald-950 font-heading">Request Commercial Proforma Invoice</h2>
            <p className="text-slate-500 text-sm">Fill out your specific requirements to receive container breakdown metrics and metric-ton contract quotes within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 border border-slate-100 p-8 rounded-3xl bg-slate-50/50">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Registered Corporate Name *</label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition"
                placeholder="e.g. Global Foods LLC (Germany)"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Corporate Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition"
                  placeholder="e.g. procurement@globalfoods.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Primary Product Interest *</label>
                <select
                  name="productInterest"
                  required
                  value={formData.productInterest}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition"
                >
                  <option value="">Select Primary Commodity</option>
                  <option value="byadagi">Byadagi Crinkled Chillies</option>
                  <option value="guntur">Guntur Sannam Chillies</option>
                  <option value="peanuts">Premium Groundnuts</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Volume Target (MT) & Shipping Terms</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:border-agri-green focus:bg-white transition"
                placeholder="Describe metric tonnage parameters, customized packaging needs, or specific port CIF destinations..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-agri-green text-white font-bold py-4 rounded-xl shadow-lg hover:bg-agri-green-dark transition duration-200 text-sm tracking-wide uppercase">
              Submit Formal Procurement Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="bg-agri-green p-2 rounded-lg">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight font-heading">THE HARVEST HUB</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Direct-from-origin agricultural export pipelines optimizing transparency, grade calibrations, and maritime transport fulfillment.
            </p>
          </div>
          <div className="md:col-span-4 text-xs">
            <h4 className="text-white font-bold tracking-wider uppercase mb-3 font-heading">Corporate Compliance</h4>
            <p className="leading-relaxed text-slate-500">
              Sourcing Origins: Guntur (AP), Byadagi (KA), Mahbubnagar (TS), Junagadh (GJ). All storage facilities compliant with APEDA phyto-sanitary conditions.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/60 text-center text-[10px] text-slate-600">
          Disclaimer: All proprietary specifications, trade volumes, pricing matrices are subject to seasonal market fluctuations on major Indian commodity exchanges.
        </div>
      </footer>

    </div>
  );
}