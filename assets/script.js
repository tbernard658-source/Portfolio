// popup logic and positioning
document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const popupInner = popup.querySelector('.popup-inner');
  const popupTitle = document.getElementById('popupTitle');
  const popupContent = document.getElementById('popupContent');
  const popupClose = document.getElementById('popupClose');

  // open popup from card
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const raw = card.getAttribute('data-popup');
      if(!raw) return;
      let meta;
      try { meta = JSON.parse(raw); } catch(err){ console.warn('Invalid data-popup', raw); return; }

      // if external link -> open new tab
      if(meta.type === 'external' && meta.url){
        window.open(meta.url, '_blank', 'noopener');
        return;
      }

      // fill panel
      popupTitle.textContent = meta.title || '';
      // allow HTML in content if needed (be careful when using real content)
      popupContent.innerHTML = meta.content || '';

      // position side: decide based on step index ancestor
      const stepEl = card.closest('.step');
      let index = parseInt(stepEl?.getAttribute('data-index') || '1', 10);

      // default: steps 1-3 -> panel on right; 4-6 -> left
      const useLeft = index >= 4;

      // set aria and classes
      popup.setAttribute('aria-hidden','false');
      popupInner.classList.remove('popup-inner-left');

      if(window.innerWidth > 800){
        // desktop - position to left or right by swapping order
        if(useLeft){
          // show panel on left: we flip layout by adding class and align start
          popup.style.justifyContent = 'flex-start';
          popupInner.classList.add('popup-inner-left');
        } else {
          popup.style.justifyContent = 'flex-end';
          popupInner.classList.remove('popup-inner-left');
        }
      } else {
        // mobile: center modal
        popup.style.justifyContent = 'center';
        popupInner.classList.remove('popup-inner-left');
      }

      // focus trap basic
      popupClose.focus();
    });
  });

  // close handlers
  function closePopup(){
    popup.setAttribute('aria-hidden','true');
    popupTitle.textContent = '';
    popupContent.innerHTML = '';
  }
  popupClose.addEventListener('click', closePopup);

  // click outside to close
  popup.addEventListener('click', (e) => {
    if(e.target === popup) closePopup();
  });

  // esc to close
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') closePopup();
  });
});
