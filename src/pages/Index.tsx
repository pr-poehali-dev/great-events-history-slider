import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface HistoricalEvent {
  id: number;
  title: string;
  year: string;
  period: string;
  description: string;
  significance: string;
  category: string;
  image?: string;
}

const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    title: "Крещение Руси",
    year: "988",
    period: "X век",
    description: "Князь Владимир I принял христианство как государственную религию Киевской Руси.",
    significance: "Культурное и духовное преобразование древнерусского общества",
    category: "Религия",
  },
  {
    id: 2,
    title: "Куликовская битва",
    year: "1380",
    period: "XIV век", 
    description: "Решающая битва между русскими войсками под командованием Дмитрия Донского и Золотой Ордой.",
    significance: "Начало освобождения Руси от монгольского ига",
    category: "Военная история",
  },
  {
    id: 3,
    title: "Основание Санкт-Петербурга",
    year: "1703",
    period: "XVIII век",
    description: "Петр I основал новую столицу Российской империи на берегах Невы.",
    significance: "Символ европеизации России и новой эпохи",
    category: "Градостроительство",
  },
  {
    id: 4,
    title: "Отечественная война",
    year: "1812",
    period: "XIX век",
    description: "Победа России над наполеоновской армией в войне 1812 года.",
    significance: "Укрепление международного авторитета России",
    category: "Военная история",
  },
  {
    id: 5,
    title: "Отмена крепостного права",
    year: "1861",
    period: "XIX век",
    description: "Александр II подписал манифест об освобождении крестьян от крепостной зависимости.",
    significance: "Важнейшая социальная реформа в истории России",
    category: "Социальные реформы",
  },
  {
    id: 6,
    title: "Великая Октябрьская революция",
    year: "1917",
    period: "XX век",
    description: "Свержение Временного правительства и приход к власти большевиков.",
    significance: "Коренное изменение политической системы страны",
    category: "Революция",
  }
];

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Все");

  const categories = ["Все", ...Array.from(new Set(historicalEvents.map(event => event.category)))];

  const filteredEvents = activeCategory === "Все" 
    ? historicalEvents 
    : historicalEvents.filter(event => event.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-vintage-parchment via-background to-vintage-parchment">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/08ec4982-3dde-49e0-819f-1a0dadf0da6a.jpg')"
        }}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 animate-float">
              <Icon name="Crown" className="text-vintage-gold" size={32} />
              <Badge variant="outline" className="px-4 py-2 text-vintage-brown border-vintage-gold">
                Историческое наследие
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-vintage-brown mb-6 leading-tight">
              Великие События
              <br />
              <span className="text-vintage-gold">Русской Истории</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-body">
              Путешествие через века величия, побед и преобразований, 
              которые сформировали нашу Родину
            </p>
            
            <Button 
              size="lg" 
              className="bg-vintage-gold hover:bg-vintage-bronze text-vintage-brown font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Начать изучение
            </Button>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="px-6 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-vintage-gold text-vintage-brown hover:bg-vintage-bronze" 
                      : "border-vintage-gold text-vintage-brown hover:bg-vintage-gold/10"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-vintage-gold via-vintage-bronze to-vintage-gold opacity-60"></div>
              
              <div className="space-y-12">
                {filteredEvents.map((event, index) => (
                  <div 
                    key={event.id}
                    className={`relative flex items-start gap-8 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-vintage-gold border-4 border-vintage-parchment flex items-center justify-center shadow-lg">
                        <Icon name="Clock" className="text-vintage-brown" size={24} />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-vintage-brown bg-vintage-parchment px-2 py-1 rounded">
                        {event.year}
                      </div>
                    </div>

                    {/* Event Card */}
                    <Card 
                      className={`flex-1 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-vintage-gold/30 bg-card/95 backdrop-blur-sm ${
                        selectedEvent?.id === event.id ? 'ring-2 ring-vintage-gold shadow-xl' : ''
                      }`}
                      onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-2xl font-serif text-vintage-brown mb-2 group-hover:text-vintage-gold transition-colors">
                              {event.title}
                            </CardTitle>
                            <CardDescription className="text-lg font-body mb-3">
                              {event.period}
                            </CardDescription>
                          </div>
                          <Badge variant="secondary" className="bg-vintage-gold/20 text-vintage-brown">
                            {event.category}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        {selectedEvent?.id === event.id && (
                          <div className="animate-scale-in">
                            <Separator className="my-4 bg-vintage-gold/30" />
                            <div className="space-y-3">
                              <div>
                                <h4 className="font-semibold text-vintage-brown mb-2 flex items-center gap-2">
                                  <Icon name="Star" size={16} className="text-vintage-gold" />
                                  Историческое значение
                                </h4>
                                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                  {event.significance}
                                </p>
                              </div>
                              
                              <div className="flex gap-2 pt-3">
                                <Button size="sm" variant="outline" className="border-vintage-gold text-vintage-brown hover:bg-vintage-gold/10">
                                  <Icon name="BookOpen" size={16} className="mr-2" />
                                  Подробнее
                                </Button>
                                <Button size="sm" variant="outline" className="border-vintage-gold text-vintage-brown hover:bg-vintage-gold/10">
                                  <Icon name="Share2" size={16} className="mr-2" />
                                  Поделиться
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-vintage-brown/10 border-t border-vintage-gold/30 py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Scroll" className="text-vintage-gold" size={28} />
              <h3 className="text-2xl font-serif text-vintage-brown">Исторический портал</h3>
            </div>
            <p className="text-muted-foreground font-body">
              Сохраняем память о великих событиях для будущих поколений
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;