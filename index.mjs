import en from './en.json' with { type: 'json' };
import ar from './ar.json' with { type: 'json' };
import de from './de.json' with { type: 'json' };
import es from './es.json' with { type: 'json' };
import fr from './fr.json' with { type: 'json' };
import ru from './ru.json' with { type: 'json' };
import uk from './uk.json' with { type: 'json' };

export const messages = {
  en, ar, de, es, fr, ru, uk,
};

export const locales = Object.keys(messages);
