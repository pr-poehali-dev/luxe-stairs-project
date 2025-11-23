import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Сообщение отправлено!",
      description: "Наш консультант свяжется с вами в ближайшее время.",
    });

    setName('');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] shadow-2xl z-50 animate-fade-in">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Icon name="User" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Консультант Luxe Stairs</h3>
                <p className="text-xs opacity-90 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Онлайн
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsOpen(false)}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          <div className="p-4">
            <div className="mb-4 space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">
                  Здравствуйте! Я консультант Luxe Stairs. Чем могу помочь?
                </p>
                <span className="text-xs text-muted-foreground">Только что</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Textarea
                placeholder="Ваше сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-[100px]"
              />
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить
              </Button>
            </form>

            <div className="mt-4 pt-4 border-t text-center">
              <p className="text-xs text-muted-foreground mb-2">Или свяжитесь с нами напрямую:</p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://wa.me/71111111111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all"
                  title="WhatsApp"
                >
                  <Icon name="MessageCircle" size={16} />
                </a>
                <a
                  href="tel:+71111111111"
                  className="w-8 h-8 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all"
                  title="Позвонить"
                >
                  <Icon name="Phone" size={16} />
                </a>
                <a
                  href="mailto:1234d@gmail.com"
                  className="w-8 h-8 bg-accent/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all"
                  title="Email"
                >
                  <Icon name="Mail" size={16} />
                </a>
              </div>
            </div>
          </div>
        </Card>
      )}

      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl bg-accent text-accent-foreground hover:bg-accent/90 z-50 hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Icon name="X" size={24} />
        ) : (
          <Icon name="MessageCircle" size={24} />
        )}
      </Button>
    </>
  );
};

export default ChatWidget;
