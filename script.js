const buttons = document.querySelectorAll('[data-set-lang]');
const stored = localStorage.getItem('zinkoolab-site-lang');
const initial = stored || (navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es');
function setLanguage(lang){
  document.body.classList.toggle('en', lang === 'en');
  document.documentElement.lang = lang;
  localStorage.setItem('zinkoolab-site-lang', lang);
  buttons.forEach(b => b.classList.toggle('active', b.dataset.setLang === lang));
}
buttons.forEach(b => b.addEventListener('click', () => setLanguage(b.dataset.setLang)));
setLanguage(initial);
