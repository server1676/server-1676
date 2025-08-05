import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ServerBanner from '@/components/ServerBanner';
import Alliances from '@/components/Alliances';
import Events from '@/components/Events';
import SVSPrepTracker from '@/components/SVSPrepTracker';
import Rules from '@/components/Rules';
import { getSVSPreps } from '@/data';

export default function Home() {
  const svsPreps = getSVSPreps();
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <ServerBanner /> */}
      <Alliances />
      <Events />
      <SVSPrepTracker preps={svsPreps} />
      <Rules />
    </main>
  );
}
