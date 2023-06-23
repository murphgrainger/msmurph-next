import CardHomepage from './components/CardHomepage';
import { content } from './content';

export default function Home() {
  return (
    <main className="flex flex-col min-h-[calc(100%-90px)] items-center justify-between p-6 md:p-20">
      <div className="flex-grow flex items-center">
        <header className="relative w-full text-center">
          <h1 className="text-6xl md:text-9xl sm:text-8xl text-orange-100 font-figtree font-bold">MsMurph</h1>
        </header>
      </div>
      <div className="grid lg:grid-cols-4 lg:text-left pb-6 md:pb-20">
        {content.map((card, index) => (
          <CardHomepage key={index} title={card.title} description={card.description} href={card.href} />
        ))}
      </div>
    </main>
  )
}

