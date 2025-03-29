import { useState, useEffect } from "react";
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage, Message } from "@/components/chatbot/ChatMessage";
import { Artist, getArtists } from "@/services/artists";
import { useToast } from "@/hooks/use-toast";
import { Send, Music, Sparkles } from "lucide-react";
import Image from "next/image";
import { getCreditSettings, calculateCreditCost, updateUserCredits, LyricsRequest, CreditSettings } from '@/services/credits';
import { generateLyrics } from '@/services/lyrics';
import { useAuth } from '@/contexts/AuthContext';
import Link from "next/link";

export default function ChatbotPage() {
  const [artists, setArtists] = useState<Artist[]>([
    { 
      id: 'missh', 
      name: 'Missh', 
      genre: 'hip-hop', 
      imageUrl: 'https://i.ibb.co/BK3HF9JV/channels4-profile.jpg',
      context: ''
    },
    { 
      id: 'manuel', 
      name: 'Manuel', 
      genre: 'pop', 
      imageUrl: 'https://i.ibb.co/ynY0Kxkw/IMG-3513.png',
      context: ''
    },
    { 
      id: 'tdanny', 
      name: 'T. Danny', 
      genre: 'rap', 
      imageUrl: 'https://i.ibb.co/FpFwf4g/dani.png',
      context: ''
    }
  ]);
  const [selectedArtist, setSelectedArtist] = useState<string>('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [credits, setCredits] = useState<number>(1000);
  const [creditSettings, setCreditSettings] = useState<CreditSettings | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const settings = await getCreditSettings();
        setCreditSettings(settings);
        setCredits(settings.initialCredits);

        const fetchedArtists = await getArtists();
        setArtists(fetchedArtists);

        setMessages([{
          id: 'welcome',
          content: 'Szia! 🎵 Én a MuzsikaI, a te személyes dalszövegíró asszisztensed. Válassz egy előadót a fenti menüből, és írd meg, miről szóljon a dalod – én pedig megírom neked a következő slágeredet! 😊',
          isBot: true,
          timestamp: new Date()
        }]);
      } catch (error) {
        console.error('Error loading initial data:', error);
        toast({
          variant: 'destructive',
          title: 'Hiba történt',
          description: 'Nem sikerült betölteni a kezdeti adatokat. Kérlek, próbáld újra később.',
        });
      }
    };

    loadInitialData();
  }, [toast]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!selectedArtist || !input.trim()) {
      toast({
        variant: 'destructive',
        title: 'Hiányzó adatok',
        description: 'Kérlek válassz előadót és írd meg a kérésed!',
      });
      return;
    }

    const selectedArtistData = artists.find(a => a.id === selectedArtist);
    if (!selectedArtistData) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const processingMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: 'Köszönöm a kérést! Dolgozom a dalszövegen...',
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, processingMessage]);

    try {
      const lyrics = generateLyrics('basic', selectedArtistData);
      
      const responseMessage: Message = {
        id: (Date.now() + 2).toString(),
        content: lyrics,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => 
        prev.map(msg => msg.id === processingMessage.id ? responseMessage : msg)
      );
    } catch (error) {
      console.error('Error generating lyrics:', error);
      toast({
        variant: 'destructive',
        title: 'Hiba történt',
        description: 'Nem sikerült legenerálni a dalszöveget. Kérlek, próbáld újra később.',
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <Head>
        <title>Dalszövegíró Chatbot - MuzsikaI</title>
        <meta name='description' content='Generálj egyedi dalszövegeket magyar előadók stílusában a MuzsikaI chatbottal' />
      </Head>

      <main 
        className="min-h-screen bg-gradient-muzsikaI animate-gradient-x overflow-hidden relative py-8 md:py-12 px-4"
        role="main"
        aria-label="MuzsikaI Dalszövegíró"
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

        <div className="container mx-auto max-w-4xl">
          <div className="relative group animate-fadeInUp mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <Card className="glass-card border-none rounded-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4]"></div>
              
              <CardHeader className="space-y-2 pb-6 relative z-20">
                <div className="text-center">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-white font-montserrat text-glow">
                    MuzsikaI Dalszövegíró
                  </CardTitle>
                  <p className="text-lg text-white/80 font-montserrat mt-2">
                    Generálj egyedi slágereket magyar előadók stílusában, pillanatok alatt! 🎵
                  </p>
                </div>

                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <Select 
                    value={selectedArtist} 
                    onValueChange={setSelectedArtist}
                    aria-label="Válassz előadót"
                  >
                    <SelectTrigger className="w-full md:w-72 bg-white/10 border-white/20 focus:border-white/30 text-white rounded-xl h-12 text-lg">
                      <SelectValue placeholder="Válassz előadót" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/80 backdrop-blur-md border-white/20 rounded-xl">
                      {artists.map((artist) => (
                        <SelectItem 
                          key={artist.id} 
                          value={artist.id}
                          className="flex items-center gap-3 py-3 px-4 text-lg hover:bg-white/10 focus:bg-white/10 cursor-pointer group text-white"
                        >
                          <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-200">
                            <Image
                              src={artist.imageUrl}
                              alt={artist.name}
                              width={32}
                              height={32}
                              className="rounded-full group-hover:border-2 group-hover:border-[#00DDEB]"
                            />
                          </div>
                          <span className={selectedArtist === artist.id ? "text-[#00DDEB] font-medium" : "text-white/80"}>
                            {artist.name}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] to-[#FF69B4] rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                    <Card className="glass-card border-none rounded-xl overflow-hidden relative px-4 py-2">
                      <span className="text-[#00DDEB] font-medium text-glow">
                        Kreditek: {credits}
                      </span>
                    </Card>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-6 relative z-20">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00DDEB] via-[#FF69B4] to-[#7B3FE4] rounded-xl blur-md opacity-50 group-hover:opacity-70 transition duration-500"></div>
                  <ScrollArea className="h-[500px] rounded-xl bg-black/20 backdrop-blur-md p-6 relative">
                    <div className="space-y-6">
                      {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                      ))}
                    </div>
                  </ScrollArea>
                </div>

                <form onSubmit={handleSubmit} className='flex gap-3 mt-6'>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Írd meg, miről szóljon a dalod... 🎤'
                    className='bg-white/10 border-white/20 focus:border-white/30 text-white placeholder:text-white/50 rounded-xl h-12 text-lg font-montserrat'
                    onKeyDown={handleKeyDown}
                    aria-label='Dalszöveg témájának megadása'
                  />
                  <Button 
                    type='submit'
                    className='btn-muzsikaI text-white px-6 h-12 rounded-xl transition-all duration-300'
                    aria-label='Üzenet küldése'
                  >
                    <Send className='h-6 w-6' />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
