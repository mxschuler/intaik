function showNextCelebrity(drug) {
    const section = document.getElementById(`${drug}-celebrities`);
    const currentCelebrity = section.querySelector('.celebrity-box:not([style="display:none;"])');
    const nextCelebrity = currentCelebrity.nextElementSibling;
  
    if (nextCelebrity) {
      currentCelebrity.style.display = 'none';
      nextCelebrity.style.display = 'block';
    }
  }