// Dark Mode Toggle
const btn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
btn.addEventListener('click', () => {
  if (htmlEl.classList.toggle('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
});

// Preserve theme on reload
if (localStorage.theme === 'dark' 
  || (!('theme' in localStorage) 
      && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  htmlEl.classList.add('dark');
} else {
  htmlEl.classList.remove('dark');
}
