import { CALENDLY_URL, WHATSAPP_URL, CHECKLIST_URL } from './contact';

export interface LinktreeLink {
  label: string;
  url: string;
}

export const linktreeLinks: LinktreeLink[] = [
  {
    label: 'Agendar Consultoria',
    url: CALENDLY_URL,
  },
  {
    label: 'Entrar em Contato (WhatsApp)',
    url: WHATSAPP_URL,
  },
  {
    label: 'Checklist Patrimonial',
    url: CHECKLIST_URL,
  },
];
