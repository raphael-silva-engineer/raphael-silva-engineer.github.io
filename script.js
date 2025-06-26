document.addEventListener('DOMContentLoaded', () => {
  const videoModal = document.getElementById('video-modal');
  const closeModalBtn = document.getElementById('video-modal-close');
  const videoIframe = document.getElementById('video-modal-iframe');
  const videoThumbnails = document.querySelectorAll('.aspect-video-youtube');

  // Abrir modal ao clicar na miniatura
  videoThumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoId = thumb.getAttribute('data-video-id');
      if (videoId && videoIframe) {
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        videoModal.style.display = 'flex';
      }
    });
  });

  // Função para fechar o modal
  const closeModal = () => {
    if (videoModal && videoIframe) {
      videoModal.style.display = 'none';
      videoIframe.src = ''; // Interrompe o vídeo
    }
  };

  // Fechar modal ao clicar no botão de fechar ou no overlay
  closeModalBtn.addEventListener('click', closeModal);
  videoModal.addEventListener('click', (e) => {
    // Fecha apenas se clicar no overlay, não no conteúdo
    if (e.target === videoModal) {
      closeModal();
    }
  });
}); 