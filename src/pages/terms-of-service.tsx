import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import { Music, ArrowLeft } from "lucide-react";

interface TermsOfServiceProps {
  content: string;
}

export default function TermsOfService({ content }: TermsOfServiceProps) {
  return (
    <>
      <Head>
        <title>Általános Szerződési Feltételek - MuzsikaI</title>
        <meta name="description" content="MuzsikaI szolgáltatás használatának feltételei és szabályai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main 
        className="min-h-screen bg-gradient-muzsikaI animate-gradient-x overflow-hidden relative py-16 px-4"
        role="main"
      >
        {/* Background Music Notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
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

        <div className="container mx-auto max-w-4xl">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 mb-8 group animate-fadeIn w-fit mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] to-[#FF69B4] rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-black/5 backdrop-blur-sm rounded-lg p-2">
                <Music className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold text-white font-montserrat">MuzsikaI</span>
          </Link>

          <div className="relative group animate-fadeInUp mb-8 mx-auto w-fit">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <Card className="glass-card border-none rounded-xl overflow-hidden relative p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
              <h1 
                className="text-3xl md:text-4xl font-bold text-white font-montserrat relative z-20 text-glow"
                role="heading"
                aria-level={1}
              >
                Általános Szerződési Feltételek
              </h1>
            </Card>
          </div>

          <div className="relative group animate-fadeInUp mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <Card className="glass-card border-none rounded-xl overflow-hidden relative p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
              <div 
                className="prose prose-lg max-w-none relative z-20 font-montserrat"
                dangerouslySetInnerHTML={{ __html: content }}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              />
            </Card>
          </div>

          <div className="flex justify-center animate-fadeInUp animate-delay-300">
            <Link href="/">
              <Button 
                className="btn-muzsikaI text-white font-semibold
                  px-8 py-6 rounded-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  Vissza a Főoldalra
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/content/terms-of-service.md");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const htmlContent = marked(fileContent);

  return {
    props: {
      content: htmlContent,
    },
  };
}
