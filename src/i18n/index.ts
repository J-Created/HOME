import { pt, type Content } from './pt';
import { en } from './en';
import { es } from './es';

export type Lang = 'pt' | 'en' | 'es';

export const languages: { code: Lang; label: string; name: string; href: string }[] = [
  { code: 'pt', label: 'PT', name: 'Português', href: '/' },
  { code: 'en', label: 'EN', name: 'English', href: '/en/' },
  { code: 'es', label: 'ES', name: 'Español', href: '/es/' },
];

// [REVISAR] EN e ES são traduções do PT aprovado e precisam de revisão antes de publicar.
const dictionaries: Record<Lang, Content> = { pt, en, es };

export function getContent(lang: Lang): Content {
  return dictionaries[lang];
}
