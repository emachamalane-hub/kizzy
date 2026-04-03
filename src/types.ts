export interface Masterclass {
  id: string;
  title: string;
  instructor: string;
  style: string;
  thumbnail: string;
  duration: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
