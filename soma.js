(function() {
    const links = document.querySelectorAll('a[aria-label^="Assistir"]');
    let totalTime = 0;
  
    links.forEach(link => {
      const button = link.querySelector('button');
      const icon = button.querySelector('i.unchecked');
      
      if (icon) {
        const ariaLabel = link.getAttribute('aria-label');
        const timeMatches = ariaLabel.match(/duração da aula: (\d{2}:\d{2}:\d{2})/);
        
        if (timeMatches) {
          const time = timeMatches[1];
          const [hours, minutes, seconds] = time.split(':').map(Number);
          const totalSeconds = hours * 3600 + minutes * 60 + seconds;
          totalTime += totalSeconds;
        }
      }
    });
  
    const totalHours = Math.floor(totalTime / 3600);
    const totalMinutes = Math.floor((totalTime % 3600) / 60);
    const totalSeconds = totalTime % 60;
  
    console.log(`Total de tempo: ${totalHours.toString().padStart(2, '0')}:${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`);
  })();
  