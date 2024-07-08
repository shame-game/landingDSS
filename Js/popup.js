function createPopup() {
  let popup = document.createElement('div');
  popup.innerHTML = `
    <div id="popup" class="fixed inset-0 z-[100000] w-full h-screen flex flex-col gap-3 justify-center items-center bg-black/50 md:top-auto md:right-0 md:bottom-0 md:left-auto md:rounded md:w-fit md:h-fit"><div class="relative"><img src="https://dsseducation.com/wp-content/uploads/2023/12/2a3ddc933cb094eecda1.jpg" alt="ads" class="object-contain rounded border border-red-500 max-w-80 cursor-pointer"><button class="absolute top-1.5 right-1.5 rounded-full bg-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="size-6 fill-blue-500"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg></button></div></div>
  `;
  document.body.appendChild(popup);

  document.querySelector('#popup img').addEventListener('click', function () {
    window.open('https://tr1nh-demo.web.app/demo', '_blank');
    closePopup();
  });

  document.querySelector('#popup button').addEventListener('click', closePopup);

  function closePopup() {
    document.querySelector('#popup').remove();
  }
}

createPopup(); 
