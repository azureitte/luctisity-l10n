import en from './en.json' with { type: 'json' };
import ar from './en.json' with { type: 'json' };
import de from './en.json' with { type: 'json' };
import es from './en.json' with { type: 'json' };
import fr from './en.json' with { type: 'json' };
import ru from './en.json' with { type: 'json' };
import uk from './en.json' with { type: 'json' };

export const messages = {
  en, ar, de, es, fr, ru, uk,
};

export const locales = Object.keys(messages);
