import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Ваша почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          placeholder="Оставьте заявку"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full min-h-[120px]"
        />
      </div>
      <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        Отправить
      </Button>
    </form>
  );
};

export default ContactForm;
