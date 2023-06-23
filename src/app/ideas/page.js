import CardIdeate from '../components/CardIdeate';
import { content } from './content';

export default function Ideas() {
    return (
    <main className="flex flex-col min-h-[calc(100%-90px)] items-center justify-center p-6 md:p-20">
        <header className="relative flex place-items-center">
          <h1 className="text-8xl md:text-9xl sm:text-9xl text-orange-100 font-figtree font-bold">Ideas</h1>
        </header>
  
        <div className="flex flex-col items-center mt-12">
          <div className="grid lg:mb-0 lg:grid-cols-1 lg:text-left">
            {content.map((card, index) => (
              <CardIdeate key={index} title={card.title} description={card.description} href={card.href} />
            ))}
          </div>
          <a href="mailto:hello@msmurph.com" className="text-white text-lg px-4 py-2 mt-12 bg-red-600 rounded">Email Me</a>
        </div>
      </main>
    )
  }
  
