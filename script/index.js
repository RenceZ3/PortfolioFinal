
const square1 = document.querySelectorAll('.square-1');
const square2 = document.querySelectorAll('.square-2');
const upButton = document.querySelector('.up-button');
const resumeDownload = document.querySelector('.resume-download');
resumeDownload.addEventListener('click', downloadResume);

window.addEventListener('scroll', onScroll);

document.onreadystatechange = function() {
    let state = document.readyState;

    console.log(state);
    if(state === 'interactive') {
        document.getElementById('load-screen').classList.add('loading-state');
        document.getElementById('web-page').classList.add('hidden');
    }else if(state === 'complete') {
        setTimeout(() => {
            document.getElementById('load-screen').classList.add('fade-out');

            setTimeout(() => {
                document.getElementById('load-screen').classList.remove('loading-state');
                document.getElementById('load-screen').classList.add('hidden');
                document.getElementById('web-page').classList.remove('hidden');
                document.getElementById('web-page').classList.add('fade-in');
            }, 500);
        }, 1500);
    }
}

function toggleMenu(e) {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}


function onScroll(e) {
    const isRotating = window.scrollY === 0;
    scrollSquareShapes(isRotating);

}

function scrollSquareShapes(isRotating) {
    square1.forEach(square => {
        if(isRotating) {
            square.classList.remove('rotate-45');
            square.classList.add('rotate-6');
        }else {
            square.classList.remove('rotate-6');
            square.classList.add('rotate-45');
        }
    });

    square2.forEach(square => {
        if(isRotating) {
    
            square.classList.remove('rotate-[55deg]');
            square.classList.add('rotate-[75deg]');
        }else {
            square.classList.remove('rotate-[75deg]');
            square.classList.add('rotate-[55deg]');

        }
    });
}



window.addEventListener('scroll', (e) => {
    if(window.scrollY > 600) {
        upButton.classList.remove('hidden');
    } else {
        upButton.classList.add('hidden');
    }
});

upButton.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


window.addEventListener('scroll', () => {
    const experienceItems = document.querySelectorAll('.list-experience-item');
  
    experienceItems.forEach(item => {
      const rect = item.getBoundingClientRect().top + 150;
      if (rect <= window.innerHeight) {
        setTimeout(() => {
            item.querySelector('.circle-list').classList.add('glowing');
        }, 2100);

        setTimeout(() => {
            item.querySelector('.line-list').classList.add('line-glow');
        }, 2000);

        scrollSquareShapes(rect - 150 <= window.innerHeight)

      } else {
          item.querySelector('.circle-list').classList.remove('glowing');
          item.querySelector('.line-list').classList.remove('line-glow');
      }



    });
  });


  function downloadResume() {
    const gdriveDocID = '1OUdxMrkIz8wqHlB_t5DtAWnN6bytsSU5';
    const url = `https://drive.google.com/uc?export=download&id=${gdriveDocID}`;

    const a = document.createElement('a');
    a.href = url;
    a.download = 'ClarenceJuanataResume.pdf';
    a.click();
  }

