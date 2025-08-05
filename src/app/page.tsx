import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Alliances from '@/components/Alliances';
import Events from '@/components/Events';
import Rules from '@/components/Rules';
import Join from '@/components/Join';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Alliances />
      <Events />
      <Rules />
      <Join />
    </main>
  );
}
