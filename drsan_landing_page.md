/* STREAMING_CHUNK:Updating imports and state setup... */
import React, { useState, useEffect } from 'react';
import { 
  Heart, Shield, Smartphone, QrCode, FileText, Activity, Users, CheckCircle, 
  ChevronDown, Globe, Moon, Sun, ArrowUp, Send, MessageSquare, X, Play, Apple,
  Sparkles, Stethoscope, Lock, Search, Cpu, Database, Menu, Check, Award, MapPin
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('FR');
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Bonjour ! Comment puis-je vous aider aujourd\'hui concernant la carte DrSan e-santé ?' }
  ]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* STREAMING_CHUNK:Handling scroll and theme effects... */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (lang === 'AR') {
      document.dir = 'rtl';
    } else {
      document.dir = 'ltr';
    }
  }, [lang]);

  const toggleTheme = () => setIsDark(!isDark);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { sender: 'user', text: chatInput }]);
    const currentInput = chatInput;
    setChatInput('');

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { sender: 'bot', text: `Merci pour votre question ("${currentInput}"). Pour obtenir votre carte DrSan, inscrivez-vous en ligne ou contactez votre centre de santé agréé à Djibouti.` }
      ]);
    }, 800);
  };

  // Translations object
  const t = {
    FR: {
      navHome: "Accueil",
      navFeatures: "Fonctionnalités",
      navProcess: "Procédure",
      navPricing: "Tarifs",
      navContact: "Contact",
      login: "Connexion",
      heroBadge: "La Santé Numérique à Djibouti",
      heroTitle1: "Votre Santé dans la paume de votre main avec",
      heroTitle2: "DrSan e-santé",
      heroDesc: "La plateforme nationale de santé connectée. Accédez à votre dossier médical, vos ordonnances et votre Carte Médicale Digitale sécurisée en un instant.",
      heroCta1: "Obtenir ma Carte",
      heroCta2: "En savoir plus",
      phoneHeaderTitle: "DrSan",
      phoneHeaderSub: "e-santé",
      cardHolderLabel: "Titulaire",
      cardHolderName: "MOHAMED ALI DJAMA",
      cardIdLabel: "ID National",
      cardNum: "7748 9201 3842",
      cardType: "Carte Médicale Digitale",
      cardDept: "République de Djibouti",
      featuresTitle: "Pourquoi choisir DrSan ?",
      featuresSub: "Une solution moderne, sécurisée et adaptée aux besoins de la population djiboutienne.",
      cardSecTitle: "Carte Médicale Nationale Digitale",
      cardSecDesc: "Une carte unique reliée directement à votre dossier de santé national. Présentez-la chez votre médecin, à la pharmacie ou à l'hôpital pour un suivi instantané.",
      processTitle: "Comment obtenir votre Carte DrSan ?",
      processSub: "4 étapes simples pour numériser vos données de santé.",
      step1Title: "1. Inscription",
      step1Desc: "Remplissez le formulaire en ligne avec vos informations nationales.",
      step2Title: "2. Vérification",
      step2Desc: "Validation de votre identité par les services de santé agréés.",
      step3Title: "3. Activation",
      step3Desc: "Réception de vos identifiants et génération de votre Carte Digitale.",
      step4Title: "4. Utilisation",
      step4Desc: "Présentez votre QR Code ou votre carte physique lors de vos consultations.",
      pricingTitle: "Tarif d'Enregistrement Fixe",
      pricingSub: "Un accès équitable pour tous les citoyens et résidents.",
      priceTag: "2 500 FDJ",
      pricePeriod: "Frais unique d'activation",
      priceFeat1: "Carte Médicale Digitale permanente",
      priceFeat2: "Accès au Dossier Médical Partagé",
      priceFeat3: "Historique des prescriptions et vaccins",
      priceFeat4: "Support client et assistance 24/7",
      pricingCta: "S'inscrire maintenant",
      downloadTitle: "Téléchargez l'application DrSan",
      downloadSub: "Disponible gratuitement sur iOS et Android.",
      footerRights: "Tous droits réservés. République de Djibouti - Santé Numérique."
    },
    EN: {
      navHome: "Home",
      navFeatures: "Features",
      navProcess: "Process",
      navPricing: "Pricing",
      navContact: "Contact",
      login: "Login",
      heroBadge: "Digital Health in Djibouti",
      heroTitle1: "Your Health in the palm of your hand with",
      heroTitle2: "DrSan e-health",
      heroDesc: "The national connected health platform. Access your medical record, prescriptions, and secure Digital Health Card instantly.",
      heroCta1: "Get My Card",
      heroCta2: "Learn More",
      phoneHeaderTitle: "DrSan",
      phoneHeaderSub: "e-health",
      cardHolderLabel: "Cardholder",
      cardHolderName: "MOHAMED ALI DJAMA",
      cardIdLabel: "National ID",
      cardNum: "7748 9201 3842",
      cardType: "Digital Medical Card",
      cardDept: "Republic of Djibouti",
      featuresTitle: "Why Choose DrSan?",
      featuresSub: "A modern, secure solution adapted to the needs of the Djiboutian population.",
      cardSecTitle: "National Digital Medical Card",
      cardSecDesc: "A single card linked directly to your national health file. Present it at the clinic, pharmacy, or hospital for instant care.",
      processTitle: "How to Get Your DrSan Card?",
      processSub: "4 simple steps to digitize your health records.",
      step1Title: "1. Registration",
      step1Desc: "Fill out the online form with your national information.",
      step2Title: "2. Verification",
      step2Desc: "Identity validation by authorized health services.",
      step3Title: "3. Activation",
      step3Desc: "Receive your credentials and generate your Digital Card.",
      step4Title: "4. Usage",
      step4Desc: "Present your QR Code or physical card during consultations.",
      pricingTitle: "Fixed Registration Fee",
      pricingSub: "Equitable access for all citizens and residents.",
      priceTag: "2,500 FDJ",
      pricePeriod: "One-time activation fee",
      priceFeat1: "Permanent Digital Medical Card",
      priceFeat2: "Access to Shared Medical Record",
      priceFeat3: "Prescription & Vaccine History",
      priceFeat4: "24/7 Customer Support & Assistance",
      pricingCta: "Register Now",
      downloadTitle: "Download DrSan App",
      downloadSub: "Available for free on iOS and Android.",
      footerRights: "All rights reserved. Republic of Djibouti - Digital Health."
    },
    AR: {
      navHome: "الرئيسية",
      navFeatures: "المميزات",
      navProcess: "الخطوات",
      navPricing: "الأسعار",
      navContact: "اتصل بنا",
      login: "تسجيل الدخول",
      heroBadge: "الصحة الرقمية في جيبوتي",
      heroTitle1: "صحتك بين يديك مع",
      heroTitle2: "DrSan e-santé",
      heroDesc: "المنصة الوطنية للصحة الرقمية. احصل على ملفك الطبي، وصفاتك الطبية، وبطاقتك الطبية الرقمية المأمونة في لحظات.",
      heroCta1: "احصل على بطاقتك",
      heroCta2: "معرفة المزيد",
      phoneHeaderTitle: "DrSan",
      phoneHeaderSub: "الصحة الرقمية",
      cardHolderLabel: "حامل البطاقة",
      cardHolderName: "محمد علي جامه",
      cardIdLabel: "الهوية الوطنية",
      cardNum: "7748 9201 3842",
      cardType: "البطاقة الطبية الرقمية",
      cardDept: "جمهورية جيبوتي",
      featuresTitle: "لماذا تختار DrSan؟",
      featuresSub: "حل حديث وآمن مصمم لتلبية احتياجات سكان جيبوتي.",
      cardSecTitle: "البطاقة الطبية الوطنية الرقمية",
      cardSecDesc: "بطاقة موحدة مرتبطة مباشرة بملفك الطبي الوطني. قدمها للطبيب، الصيدلية، أو المستشفى للمتابعة الفورية.",
      processTitle: "كيف تحصل على بطاقة DrSan؟",
      processSub: "4 خطوات بسيطة لرقمنة بياناتك الصحية.",
      step1Title: "1. التسجيل",
      step1Desc: "قم بتعبئة النموذج عبر الإنترنت ببياناتك الوطنية.",
      step2Title: "2. التحقق",
      step2Desc: "التحقق من هويتك بواسطة الجهات الصحية المعتمدة.",
      step3Title: "3. التفعيل",
      step3Desc: "استلام بيانات الاعتماد وإصدار بطاقتك الرقمية.",
      step4Title: "4. الاستخدام",
      step4Desc: "اعرض رمز QR أو البطاقة الفعلية عند الزيارة الطبية.",
      pricingTitle: "رسوم التسجيل الثابتة",
      pricingSub: "وصول عادل ومتاح لجميع المواطنين والمقيمين.",
      priceTag: "2,500 FDJ",
      pricePeriod: "رسوم تفعيل لمرة واحدة",
      priceFeat1: "بطاقة طبية رقمية دائمة",
      priceFeat2: "الوصول إلى الملف الطبي المشترك",
      priceFeat3: "سجل الوصفات والتطعيمات",
      priceFeat4: "دعم المساعدة على مدار الساعة 24/7",
      pricingCta: "سجل الآن",
      downloadTitle: "حمل تطبيق DrSan",
      downloadSub: "متوفر مجاناً على iOS و Android.",
      footerRights: "جميع الحقوق محفوظة. جمهورية جيبوتي - الصحة الرقمية."
    }
  };

  const curT = t[lang];

  /* STREAMING_CHUNK:Rendering main header component... */
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* HEADER / NAVIGATION */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 font-bold text-xl">
              <CrossIcon />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-emerald-600 dark:text-emerald-400">DrSan</span>
              <span className="block text-[10px] tracking-widest font-semibold text-slate-500 dark:text-slate-400 -mt-1 uppercase">
                E-SANTÉ
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse font-medium text-sm">
            <a href="#hero" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{curT.navHome}</a>
            <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{curT.navFeatures}</a>
            <a href="#card" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Carte Digitale</a>
            <a href="#process" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{curT.navProcess}</a>
            <a href="#pricing" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">{curT.navPricing}</a>
          </nav>

          {/* Right Actions: Lang, Theme, Login */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border text-xs font-semibold border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{lang}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute right-0 mt-1 w-24 py-1 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-100 dark:border-slate-700 hidden group-hover:block z-50">
                <button onClick={() => setLang('FR')} className="block w-full text-left px-4 py-1.5 text-xs hover:bg-emerald-50 dark:hover:bg-slate-700 font-medium">Français</button>
                <button onClick={() => setLang('EN')} className="block w-full text-left px-4 py-1.5 text-xs hover:bg-emerald-50 dark:hover:bg-slate-700 font-medium">English</button>
                <button onClick={() => setLang('AR')} className="block w-full text-left px-4 py-1.5 text-xs hover:bg-emerald-50 dark:hover:bg-slate-700 font-medium">العربية</button>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Connexion Button */}
            <button className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              {curT.login}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-700"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-3">
            <a href="#hero" onClick={()=>setMobileMenuOpen(false)} className="block py-2 text-base font-medium">{curT.navHome}</a>
            <a href="#features" onClick={()=>setMobileMenuOpen(false)} className="block py-2 text-base font-medium">{curT.navFeatures}</a>
            <a href="#card" onClick={()=>setMobileMenuOpen(false)} className="block py-2 text-base font-medium">Carte Digitale</a>
            <a href="#process" onClick={()=>setMobileMenuOpen(false)} className="block py-2 text-base font-medium">{curT.navProcess}</a>
            <a href="#pricing" onClick={()=>setMobileMenuOpen(false)} className="block py-2 text-base font-medium">{curT.navPricing}</a>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex space-x-2">
                <button onClick={() => setLang('FR')} className={`px-2.5 py-1 text-xs rounded ${lang==='FR'?'bg-emerald-600 text-white':'bg-slate-100 dark:bg-slate-800'}`}>FR</button>
                <button onClick={() => setLang('EN')} className={`px-2.5 py-1 text-xs rounded ${lang==='EN'?'bg-emerald-600 text-white':'bg-slate-100 dark:bg-slate-800'}`}>EN</button>
                <button onClick={() => setLang('AR')} className={`px-2.5 py-1 text-xs rounded ${lang==='AR'?'bg-emerald-600 text-white':'bg-slate-100 dark:bg-slate-800'}`}>AR</button>
              </div>
              <button className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-sm">
                {curT.login}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      /* STREAMING_CHUNK:Rendering Hero section and phone mockup... */
      <section id="hero" className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{curT.heroBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                {curT.heroTitle1} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">
                  {curT.heroTitle2}
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {curT.heroDesc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#pricing" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  {curT.heroCta1}
                </a>
                <a href="#features" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-center transition-all">
                  {curT.heroCta2}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800 text-center lg:text-left rtl:lg:text-right">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Sécurisé & Crypté</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">24/7</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Accès Dossier</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">National</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">République de Djibouti</div>
                </div>
              </div>
            </div>

            {/* Right: Phone UI Mockup (Widened White Screen) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
                
                {/* Glow Backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-[48px] blur-xl opacity-30 animate-pulse"></div>

                {/* Smartphone Outer Frame */}
                <div className="relative rounded-[44px] p-3 bg-slate-900 shadow-2xl border-4 border-slate-800">
                  
                  {/* Phone Notch / Speaker */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center">
                    <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
                  </div>

                  {/* Phone Display Inner Screen (Always Clean White BG) */}
                  <div className="bg-white text-slate-800 rounded-[36px] overflow-hidden pt-7 pb-6 px-4 shadow-inner min-h-[620px] flex flex-col justify-between">
                    
                    {/* APP TOP BAR HEADER inside phone: ONLY DrSan e-santé (NO R. Djibouti here) */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                          <CrossIcon size={14} />
                        </div>
                        <div>
                          <span className="font-bold text-sm text-emerald-600 leading-none block">DrSan</span>
                          <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider block">e-santé</span>
                        </div>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                    </div>

                    {/* App Main Content Area */}
                    <div className="space-y-4 my-auto py-2">
                      
                      {/* Greeting inside app */}
                      <div className="text-left rtl:text-right">
                        <div className="text-[11px] font-medium text-slate-500">Bienvenue,</div>
                        <div className="text-sm font-bold text-slate-800">MOHAMED ALI DJAMA</div>
                      </div>

                      {/* CARD INSIDE PHONE (Perfectly matching Standalone Card) */}
                      <div className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 rounded-2xl p-4 text-white shadow-lg overflow-hidden border border-emerald-400/30">
                        
                        {/* Decorative Background Patterns */}
                        <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-lg pointer-events-none"></div>

                        {/* Card Header: "DrSan e-santé" left, "[Flag] R. Djibouti" right */}
                        <div className="flex items-center justify-between border-b border-white/20 pb-2.5 mb-3">
                          <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                            <div className="w-6 h-6 rounded-md bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-white text-xs">
                              <CrossIcon size={12} />
                            </div>
                            <div>
                              <span className="font-extrabold text-xs tracking-tight block leading-tight">DrSan</span>
                              <span className="text-[8px] font-medium text-emerald-200 block uppercase tracking-wider -mt-0.5">e-santé</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-1 rtl:space-x-reverse bg-white/15 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide">
                            <DjiboutiFlag className="w-3.5 h-2.5 rounded-sm" />
                            <span>R. Djibouti</span>
                          </div>
                        </div>

                        {/* Chip & Contactless */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-8 h-6 bg-gradient-to-tr from-amber-300 to-yellow-500 rounded-md shadow-sm border border-amber-200/50 flex items-center justify-center">
                            <div className="w-6 h-4 border border-amber-700/40 rounded-sm"></div>
                          </div>
                          <div className="text-white/70 text-[10px] font-mono">
                            ((( NFC )))
                          </div>
                        </div>

                        {/* Card Holder Name */}
                        <div className="space-y-0.5 mb-3 text-left rtl:text-right">
                          <div className="text-[9px] uppercase tracking-wider text-emerald-200 font-semibold">Titulaire</div>
                          <div className="text-xs font-black tracking-wide font-mono text-white">MOHAMED ALI DJAMA</div>
                        </div>

                        {/* Card Number & QR Code Footer */}
                        <div className="flex items-end justify-between pt-2 border-t border-white/15">
                          <div>
                            <div className="text-[8px] uppercase tracking-wider text-emerald-200 font-semibold">ID National</div>
                            <div className="text-xs font-mono font-bold tracking-widest text-emerald-100">7748 9201 3842</div>
                          </div>
                          <div className="bg-white p-1 rounded-md shadow">
                            <QrCode className="w-7 h-7 text-slate-900" />
                          </div>
                        </div>

                      </div>

                      {/* Quick Action Badges inside app */}
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
                          <FileText className="w-4 h-4 text-emerald-600 mb-1" />
                          <span className="text-[10px] font-bold text-slate-700">Ordonnances</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
                          <Activity className="w-4 h-4 text-teal-600 mb-1" />
                          <span className="text-[10px] font-bold text-slate-700">Dossier Médical</span>
                        </div>
                      </div>

                    </div>

                    {/* App Bottom Navigation Bar */}
                    <div className="pt-3 border-t border-slate-100 flex justify-around text-slate-400">
                      <div className="flex flex-col items-center text-emerald-600">
                        <Shield className="w-4 h-4" />
                        <span className="text-[9px] font-bold mt-0.5">Carte</span>
                      </div>
                      <div className="flex flex-col items-center hover:text-slate-600">
                        <Activity className="w-4 h-4" />
                        <span className="text-[9px] font-medium mt-0.5">Santé</span>
                      </div>
                      <div className="flex flex-col items-center hover:text-slate-600">
                        <Users className="w-4 h-4" />
                        <span className="text-[9px] font-medium mt-0.5">Profil</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      /* STREAMING_CHUNK:Rendering Features section... */
      <section id="features" className={`py-16 md:py-24 border-t ${isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{curT.featuresTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">{curT.featuresSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className={`p-8 rounded-2xl border transition-all hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-700 hover:border-emerald-500/50' : 'bg-slate-50 border-slate-200 hover:border-emerald-500/50'}`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Carte Digitale Sécurisée</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Portez votre identification médicale partout avec vous. Accessible hors-ligne et protégée par QR Code dynamique.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`p-8 rounded-2xl border transition-all hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-700 hover:border-emerald-500/50' : 'bg-slate-50 border-slate-200 hover:border-emerald-500/50'}`}>
              <div className="w-12 h-12 rounded-xl bg-teal-600/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dossier Médical Centralisé</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Historique des consultations, résultats de laboratoire et traitements regroupés au même endroit pour vos médecins.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={`p-8 rounded-2xl border transition-all hover:shadow-xl ${isDark ? 'bg-slate-800 border-slate-700 hover:border-emerald-500/50' : 'bg-slate-50 border-slate-200 hover:border-emerald-500/50'}`}>
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Suivi Pharmaceutique</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Vérification rapide des ordonnances et renouvellements simplifiés dans toutes les pharmacies partenaires de Djibouti.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* STANDALONE CARTE MÉDICALE NATIONALE SECTION */}
      /* STREAMING_CHUNK:Rendering Standalone Card section... */
      <section id="card" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Standalone Enriched Visual Card Container */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md">
                
                {/* Visual Card (Matching Phone Card Header & Structure) */}
                <div className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-emerald-400/30 overflow-hidden">
                  
                  {/* Background Watermark/Glow */}
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

                  {/* Header: DrSan e-santé (Left) + [Flag] R. Djibouti (Right) */}
                  <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                    <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-white text-lg shadow-sm">
                        <CrossIcon size={20} />
                      </div>
                      <div>
                        <span className="font-extrabold text-lg sm:text-xl tracking-tight block leading-tight">DrSan</span>
                        <span className="text-xs font-semibold text-emerald-200 block uppercase tracking-widest -mt-0.5">e-santé</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-white/20">
                      <DjiboutiFlag className="w-4 h-3 rounded-sm" />
                      <span>R. Djibouti</span>
                    </div>
                  </div>

                  {/* Chip & NFC Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-9 bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-500 rounded-lg shadow border border-amber-200/60 flex items-center justify-center">
                      <div className="w-8 h-6 border border-amber-800/40 rounded"></div>
                    </div>
                    <div className="text-white/80 font-mono text-xs font-bold tracking-widest uppercase">
                      ((( NFC CONNECTED )))
                    </div>
                  </div>

                  {/* Field Label: Titulaire */}
                  <div className="space-y-1 mb-6 text-left rtl:text-right">
                    <div className="text-xs uppercase tracking-wider text-emerald-200 font-semibold">{curT.cardHolderLabel}</div>
                    <div className="text-lg sm:text-xl font-black tracking-wider font-mono text-white">MOHAMED ALI DJAMA</div>
                  </div>

                  {/* Bottom Info: ID National & QR Code */}
                  <div className="flex items-end justify-between pt-4 border-t border-white/20">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-emerald-200 font-semibold">{curT.cardIdLabel}</div>
                      <div className="text-base sm:text-lg font-mono font-bold tracking-widest text-emerald-100">7748 9201 3842</div>
                    </div>
                    
                    <div className="bg-white p-2 rounded-xl shadow-md">
                      <QrCode className="w-10 h-10 text-slate-900" />
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Explanation */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left rtl:lg:text-right">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Norme Nationale de Santé</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {curT.cardSecTitle}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {curT.cardSecDesc}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm font-semibold">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Compatibilité immédiate avec tous les hôpitaux nationaux</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm font-semibold">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Lecture instantanée par QR Code ou technologie NFC</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm font-semibold">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>Données hautement cryptées préservant le secret médical</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4-STEP PROCESS SECTION */}
      /* STREAMING_CHUNK:Rendering 4-step process section... */
      <section id="process" className={`py-16 md:py-24 border-t ${isDark ? 'bg-slate-800/30 border-slate-800' : 'bg-slate-100/70 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{curT.processTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">{curT.processSub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className={`p-6 rounded-2xl border relative ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center mb-4 text-sm shadow-md">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">{curT.step1Title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{curT.step1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className={`p-6 rounded-2xl border relative ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center mb-4 text-sm shadow-md">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">{curT.step2Title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{curT.step2Desc}</p>
            </div>

            {/* Step 3 */}
            <div className={`p-6 rounded-2xl border relative ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center mb-4 text-sm shadow-md">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">{curT.step3Title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{curT.step3Desc}</p>
            </div>

            {/* Step 4 */}
            <div className={`p-6 rounded-2xl border relative ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center mb-4 text-sm shadow-md">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">{curT.step4Title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">{curT.step4Desc}</p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING SECTION (FDJ) */}
      /* STREAMING_CHUNK:Rendering Pricing section... */
      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{curT.pricingTitle}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">{curT.pricingSub}</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className={`rounded-3xl p-8 border-2 relative shadow-2xl transition-all ${isDark ? 'bg-slate-800 border-emerald-500' : 'bg-white border-emerald-600'}`}>
              
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest shadow">
                Tarif National
              </div>

              <div className="text-center my-6">
                <div className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                  {curT.priceTag}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-2 uppercase tracking-wider">
                  {curT.pricePeriod}
                </div>
              </div>

              <div className="space-y-4 my-8 text-sm">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{curT.priceFeat1}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{curT.priceFeat2}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{curT.priceFeat3}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{curT.priceFeat4}</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center shadow-lg shadow-emerald-600/30 transition-all">
                {curT.pricingCta}
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* DOWNLOAD APP SECTION (IMG tags with ALT ready for PNG replacement) */}
      /* STREAMING_CHUNK:Rendering Download App section... */
      <section className={`py-16 border-t ${isDark ? 'bg-slate-800/60 border-slate-800' : 'bg-slate-900 text-white border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold">{curT.downloadTitle}</h2>
            <p className="text-slate-400 text-base">{curT.downloadSub}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* App Store Badge Image Placeholder */}
            <a href="#download" className="inline-block hover:opacity-90 transition-opacity">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Télécharger dans l'App Store - DrSan e-santé" 
                className="h-12 w-auto min-w-[150px]"
              />
            </a>

            {/* Google Play Badge Image Placeholder */}
            <a href="#download" className="inline-block hover:opacity-90 transition-opacity">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Disponible sur Google Play - DrSan e-santé" 
                className="h-12 w-auto min-w-[150px]"
              />
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      /* STREAMING_CHUNK:Rendering Footer... */
      <footer className={`py-12 border-t text-sm ${isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-950 text-slate-400 border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-base">
                <CrossIcon size={16} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">DrSan</span>
            </div>

            <div className="text-center md:text-left text-xs text-slate-500">
              © {new Date().getFullYear()} DrSan e-santé. {curT.footerRights}
            </div>

            <div className="flex space-x-6 rtl:space-x-reverse text-xs">
              <a href="#" className="hover:text-emerald-400 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Sécurité</a>
            </div>

          </div>
        </div>
      </footer>

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-700 transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* STATIC FLOATING AI CHATBOT WIDGET */}
      /* STREAMING_CHUNK:Rendering Chatbot widget... */
      <div className="fixed bottom-6 left-6 z-50">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-3 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-700 transition-all hover:scale-105"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="font-bold text-xs">Assistant DrSan</span>
          </button>
        ) : (
          <div className="w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden text-slate-800 dark:text-slate-100">
            
            {/* Chatbot Header */}
            <div className="p-4 bg-emerald-600 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <CrossIcon size={14} />
                </div>
                <div>
                  <div className="font-bold text-sm">Assistant e-santé</div>
                  <div className="text-[10px] text-emerald-100">En ligne | Support DrSan</div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-64 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-900/50 text-xs">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl ${msg.sender === 'user' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 dark:border-slate-700 flex gap-2 bg-white dark:bg-slate-800">
              <input
                type="text"
                placeholder="Posez votre question..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button type="submit" className="p-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700">
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        )}
      </div>

    </div>
  );
}

// HELPER COMPONENTS

function CrossIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function DjiboutiFlag({ className = "w-4 h-3" }) {
  return (
    <svg className={className} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="200" fill="#6AB2E7" />
      <rect y="200" width="600" height="200" fill="#12AD2B" />
      <polygon points="0,0 0,400 346.41,200" fill="#FFFFFF" />
      <polygon points="115.47,150 128.53,190.21 170.83,190.21 136.62,215.09 149.68,255.3 115.47,230.42 81.26,255.3 94.32,215.09 60.11,190.21 102.41,190.21" fill="#D7141A" />
    </svg>
  );
}