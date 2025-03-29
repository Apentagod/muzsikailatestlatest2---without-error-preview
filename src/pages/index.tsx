import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, MessageSquare, Music, Wand2, Check, Zap, Palette, Lightbulb, Layout, User, ArrowRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { ContactForm } from '@/components/contact/ContactForm';
import { getMarkdownContent } from '@/lib/markdown';
import { Header } from '@/components/layout/Header';

export async function getStaticProps() {
  const footerContent = getMarkdownContent('footer-content.md');
  return {
    props: {
      footerContent,
    },
  };
}

interface HomePageProps {
  footerContent: string;
}

export default function HomePage({ footerContent }: HomePageProps) {
  return (
    <>
      <Head>
        <title>MuzsikAI – Főoldal</title>
        <meta name="description" content="Generálj egyedi dalszövegeket AI segítségével, népszerű magyar előadók stílusában. Változatos lírai stílusok és testreszabható dalszövegek." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00DDEB" />
        <meta name="keywords" content="dalszöveg, dalszövegírás, lírai stílus, magyar előadók, AI dalszöveg, dalszöveg generátor" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800;900&family=Poppins:wght@400;600;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main 
        className="min-h-screen bg-gradient-muzsikaI overflow-hidden relative"
        role="main"
        aria-label="MuzsikAI kezdőoldal"
      >
        {/* Background Music Notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <Music
              key={i}
              className="music-note absolute text-white/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 2 + 1}rem`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section id="home" className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="relative group animate-fadeIn">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Card 
                className="gradient-card border-none rounded-xl overflow-hidden relative p-6"
                role="banner"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                <div className="flex items-center gap-2 relative z-20">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] to-[#FF69B4] rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-black/20 rounded-lg p-2">
                      <Rocket 
                        className="h-12 w-12 text-white"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <h1 className="brand-name">
                    Muzsik<span className="highlight">AI</span>
                  </h1>
                </div>
              </Card>
            </div>

            <div className="text-center space-y-8 my-12 animate-fadeInUp">
              <h2 
                className="text-[2.75rem] md:text-[3.3rem] font-extrabold text-balance px-4
                  font-montserrat text-white text-glow-enhanced
                  animate-fadeIn"
                role="heading"
                aria-level={2}
              >
                Alkosd meg a következő slágeredet AI-val!
              </h2>
              <div className="flex justify-center items-center">
                <p 
                  className="text-white/90 font-montserrat leading-relaxed font-medium text-glow-enhanced"
                  role="contentinfo"
                >
                  Generálj egyedi dalszövegeket AI segítségével, népszerű magyar előadók stílusában
                </p>
              </div>
            </div>

            <Link 
              href="/auth/register"
              aria-label="Regisztráció kezdése"
              className="animate-fadeInUp animate-delay-300"
            >
              <Button 
                size="lg"
                className="btn-muzsikaI text-white text-lg px-8 py-6 
                  rounded-xl transform hover:scale-105 transition-all duration-300 
                  shadow-lg font-semibold group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Kezdés
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </section>

          {/* Features Section */}
          <section id="features" className="py-24">
            <div className="relative group animate-fadeInUp mb-16 mx-auto w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Card className="gradient-card border-none rounded-xl overflow-hidden relative p-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                <h2 
                  className="text-3xl md:text-4xl font-extrabold text-white font-montserrat relative z-20 text-glow-enhanced"
                  role="heading"
                  aria-level={2}
                >
                  Hogyan működik a MuzsikAI?
                </h2>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {[
                {
                  icon: <User className="h-8 w-8 text-white/90" aria-hidden="true" />,
                  title: "Válaszd ki az előadót",
                  description: "Válaszd ki az előadót a chatbot tetején",
                  ariaLabel: "Előadó kiválasztása funkció leírása"
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-white/90" aria-hidden="true" />,
                  title: "Dalszöveg Generálás",
                  description: "Kezdj el chattelni a dalszövegíró bottal",
                  ariaLabel: "Dalszöveg generálás funkció leírása"
                },
                {
                  icon: <Wand2 className="h-8 w-8 text-white/90" aria-hidden="true" />,
                  title: "Szöveg Finomítása és Testreszabása",
                  description: "Testreszabd a generált szövegeket különböző stílusokkal vagy változtatásokkal",
                  ariaLabel: "Szöveg finomítása és testreszabása funkció leírása"
                }
              ].map((feature, index) => (
                <div key={index} className="relative group animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
                  <Card 
                    className="gradient-card border-none rounded-xl overflow-hidden relative p-6 h-full"
                    aria-label={feature.ariaLabel}
                  >
                    <div className="flex items-start gap-4 relative z-20">
                      <div className="p-2 bg-white/10 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white font-montserrat mb-2 text-glow-enhanced">
                          {feature.title}
                        </h3>
                        <p className="text-white/90 font-montserrat font-medium text-glow-enhanced">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-24">
            <div className="relative group animate-fadeInUp mb-16 mx-auto w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Card className="gradient-card border-none rounded-xl overflow-hidden relative p-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                <h2 
                  className="text-3xl md:text-4xl font-extrabold text-white font-montserrat relative z-20 text-glow-enhanced"
                  role="heading"
                  aria-level={2}
                >
                  Előfizetési Csomagok
                </h2>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
              {/* Basic Plan */}
              <div className="relative group animate-fadeInUp">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <Card className="gradient-card border-none rounded-xl overflow-hidden relative p-8 h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                  <div className="relative z-20 space-y-6">
                    <h3 className="text-2xl font-extrabold text-white font-montserrat text-glow-enhanced">
                      Alap
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white font-montserrat text-glow-enhanced">
                        2.990 Ft.
                      </span>
                      <span className="text-lg text-white/90 font-montserrat font-medium text-glow-enhanced">/hó</span>
                    </div>
                    <ul className="space-y-4">
                      {[
                        "1000 chat üzenet havonta",
                        "Magyar előadók stílusa",
                        "Alapvető finomítások",
                        "Email támogatás"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="p-1 bg-white/10 rounded-full">
                            <Check className="h-4 w-4 text-white/90" aria-hidden="true" />
                          </div>
                          <span className="text-white/90 font-montserrat font-medium text-glow-enhanced">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/subscription">
                      <Button 
                        className="w-full btn-muzsikaI text-white font-semibold
                          py-5 rounded-xl transform transition-all duration-300 group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Csomag Megvásárlása
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>

              {/* Pro Plan */}
              <div className="relative group animate-fadeInUp animate-delay-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <Card className="gradient-card border-none rounded-xl overflow-hidden relative p-8 h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                  <div className="relative z-20 space-y-6">
                    <h3 className="text-2xl font-extrabold text-white font-montserrat text-glow-enhanced">
                      Pro
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold text-white font-montserrat text-glow-enhanced">
                        6.990 Ft.
                      </span>
                      <span className="text-lg text-white/90 font-montserrat font-medium text-glow-enhanced">/hó</span>
                    </div>
                    <ul className="space-y-4">
                      {[
                        "5000 chat üzenet havonta",
                        "Részletes finomítások",
                        "Egyedi funkciók támogatása",
                        "Prioritásos email támogatás"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="p-1 bg-white/10 rounded-full">
                            <Check className="h-4 w-4 text-white/90" aria-hidden="true" />
                          </div>
                          <span className="text-white/90 font-montserrat font-medium text-glow-enhanced">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/subscription">
                      <Button 
                        className="w-full btn-muzsikaI text-white font-semibold
                          py-5 rounded-xl transform transition-all duration-300 group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Csomag Megvásárlása
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="py-24">
            <div className="relative group animate-fadeInUp mb-16 mx-auto w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Card className="gradient-card border-none rounded-xl overflow-hidden relative p-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                <h2 
                  className="text-3xl md:text-4xl font-extrabold text-white font-montserrat relative z-20 text-glow-enhanced"
                  role="heading"
                  aria-level={2}
                >
                  Miért válaszd a MuzsikAI-t?
                </h2>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
              {[
                {
                  icon: <Zap className="h-8 w-8 text-white/90" aria-hidden="true" />,
                  title: "Villámgyors Dalszövegírás",
                  description: "Generálj profi szintű dalszövegeket másodpercek alatt.",
                  ariaLabel: "Villámgyors dalszövegírás funkció leírása",
                  delay: 0
                },
                {
                  icon: <Palette className="h-8 w-8 text-white/90" aria-hidden="true" />,
                  title: "Egyedi stílus",
                  description: "Válaszd ki, melyik magyar előadó lírai stílusa inspiráljon!",
                  ariaLabel: "Egyedi lírai stílus választás funkció leírása",
                  delay: 100
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-white/90" aria-hidden="true" />,
                  title: "Alkotói inspiráció",
                  description: "Legyen a MuzsikAI a dalokhoz való új ötleteid forrása",
                  ariaLabel: "Alkotói inspiráció funkció leírása",
                  delay: 200
                },
                {
                  icon: <Layout className="h-8 w-8 text-white/90" aria-hidden="true" />,
                  title: "Egyszerű használhatóság",
                  description: "Felhasználóbarát felület, amely bármilyen tudásszinttel működik",
                  ariaLabel: "Egyszerű használhatóság funkció leírása",
                  delay: 300
                }
              ].map((benefit, index) => (
                <div key={index} className="relative group animate-fadeInUp" style={{ animationDelay: `${benefit.delay}ms` }}>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
                  <Card 
                    className="gradient-card border-none rounded-xl overflow-hidden relative p-8 h-full"
                    aria-label={benefit.ariaLabel}
                  >
                    <div className="flex items-start gap-4 relative z-20">
                      <div className="p-2 bg-white/10 rounded-lg">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-white font-montserrat mb-2 text-glow-enhanced">
                          {benefit.title}
                        </h3>
                        <p className="text-white/90 font-montserrat font-medium text-glow-enhanced">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24">
            <div className="relative group animate-fadeInUp mb-16 mx-auto w-fit">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <Card className="gradient-card border-none rounded-xl overflow-hidden relative p-6">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                <div className="relative z-20 text-center">
                  <h2 
                    className="text-3xl md:text-4xl font-extrabold text-white font-montserrat text-glow-enhanced"
                    role="heading"
                    aria-level={2}
                  >
                    Kapcsolat
                  </h2>
                  <p className="mt-2 text-white/90 font-montserrat font-medium text-glow-enhanced">
                    Kérdésed van? Írj nekünk, hamarosan válaszolunk!
                  </p>
                </div>
              </Card>
            </div>

            <div className="max-w-2xl mx-auto px-4 animate-fadeInUp animate-delay-300">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <Card className="gradient-card border-none rounded-xl overflow-hidden relative p-8">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
                  <div className="relative z-20">
                    <ContactForm />
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="py-8">
            <div className="relative animate-fadeInUp">
              <Card className="footer-card border-none rounded-xl overflow-hidden relative p-4 w-full mx-auto max-w-5xl">
                <div className="relative z-20 flex flex-row justify-between items-center gap-2 text-center">
                  <p className="text-white/90 font-montserrat font-medium text-glow-enhanced text-sm">
                    © 2025 MuzsikAI. Minden jog fenntartva.
                  </p>
                  <div className="flex flex-row gap-3">
                    <Link 
                      href="/privacy-policy"
                      className="text-white hover:text-white/80 transition-colors duration-300 font-montserrat font-medium text-glow-enhanced text-sm"
                      aria-label="Adatvédelmi Tájékoztató megtekintése"
                    >
                      Adatvédelmi Tájékoztató
                    </Link>
                    <Link 
                      href="/terms-of-service"
                      className="text-white hover:text-white/80 transition-colors duration-300 font-montserrat font-medium text-glow-enhanced text-sm"
                      aria-label="Általános Szerződési Feltételek megtekintése"
                    >
                      Általános Szerződési Feltételek
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </footer>
        </div>
      </main>

      <style jsx global>{`
        /* Override navigation links in Header to be white */
        .nav-link,
        a[href="/"],
        a[href="/hogyan-mukodik"],
        a[href="/arak"],
        a[href="/miert-hasznald"],
        a[href="/kapcsolat"] {
          color: #ffffff !important;
        }
        a[href="/"]:hover,
        a[href="/hogyan-mukodik"]:hover,
        a[href="/arak"]:hover,
        a[href="/miert-hasznald"]:hover,
        a[href="/kapcsolat"]:hover {
          color: #ffffffcc !important;
        }

        /* Enhanced glow effect for text */
        .text-glow-enhanced {
          text-shadow: 0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.7), 0 0 75px rgba(255, 255, 255, 0.5) !important;
          letter-spacing: 0.5px;
        }

        /* Gradient card styling with independent gradient */
        .gradient-card {
          background: linear-gradient(135deg, #1A0B2E 0%, #3B1A5A 50%, #5E2A8A 100%) !important;
          border: none !important;
          transition: all 0.3s ease-in-out;
        }

        .group:hover .gradient-card {
          background: linear-gradient(135deg, #2A1B4E 0%, #4B2A7A 50%, #7E3AAA 100%) !important;
          transform: scale(1.02);
          box-shadow: 0 0 20px rgba(255, 105, 180, 0.5);
        }

        /* Footer card styling */
        .footer-card {
          background: linear-gradient(135deg, #1A0B2E 0%, #3B1A5A 50%, #5E2A8A 100%) !important;
          border: none !important;
        }

        /* MuzsikAI text styling */
        .brand-name {
          font-family: "Poppins", sans-serif !important;
          font-weight: 900;
          font-size: 3.5rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          text-shadow: 0 0 25px rgba(255, 105, 180, 0.9), 0 0 50px rgba(0, 221, 235, 0.7);
          color: #ffffff !important;
          background: none !important;
          -webkit-text-fill-color: #ffffff !important;
          animation: pulse 2s infinite ease-in-out;
        }

        .highlight {
          background: linear-gradient(45deg, #FF69B4, #00DDEB, #7B3FE4) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          font-weight: 900;
          text-shadow: 0 0 20px rgba(255, 105, 180, 0.9);
        }

        .brand-name:hover .highlight {
          transform: scale(1.1);
          transition: transform 0.3s ease-in-out;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .brand-name {
            font-size: 2.5rem !important;
            letter-spacing: 2px !important;
          }

          .gradient-card {
            padding: 1rem !important;
          }

          .text-3xl {
            font-size: 1.875rem !important;
            line-height: 2.25rem !important;
          }

          .text-4xl {
            font-size: 2rem !important;
            line-height: 2.5rem !important;
          }

          .text-2xl {
            font-size: 1.5rem !important;
            line-height: 2rem !important;
          }

          .text-xl {
            font-size: 1.25rem !important;
            line-height: 1.75rem !important;
          }

          .text-lg {
            font-size: 1rem !important;
            line-height: 1.5rem !important;
          }

          .text-sm {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }

          .footer-card {
            padding: 0.75rem !important;
          }

          .footer-card .relative {
            flex-direction: row !important;
            gap: 0.5rem !important;
            font-size: 0.75rem !important;
          }
        }

        @media (min-width: 768px) {
          .brand-name {
            font-size: 4.5rem;
          }
        }

        /* Pulsing animation for MuzsikAI text */
        @keyframes pulse {
          0% {
            text-shadow: 0 0 25px rgba(255, 105, 180, 0.9), 0 0 50px rgba(0, 221, 235, 0.7);
          }
          50% {
            text-shadow: 0 0 35px rgba(255, 105, 180, 1), 0 0 70px rgba(0, 221, 235, 0.9);
          }
          100% {
            text-shadow: 0 0 25px rgba(255, 105, 180, 0.9), 0 0 50px rgba(0, 221, 235, 0.7);
          }
        }
      `}</style>
    </>
  );
}
