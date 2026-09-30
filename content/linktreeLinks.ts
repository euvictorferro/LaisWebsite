import { CALENDLY_URL, WHATSAPP_URL } from './contact';

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
    url: 'https://drive.google.com/file/d/1i76Mx1vXPymIKzbUuR2QuLZ9J8KlHGTc/view?usp=drive_link',
  },
];
