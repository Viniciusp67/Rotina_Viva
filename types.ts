
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  imageUrl: string;
}

export interface AppContextType {
  user: User | null;
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  // Future: editEvent, deleteEvent
}
