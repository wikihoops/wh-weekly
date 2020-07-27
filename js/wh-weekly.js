// All resources loaded
window.addEventListener('load', () => {
  // Open video links in modal window
  document.querySelectorAll('a[href$=".mp4"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      // Need SweetAlert for all this
      if (typeof Swal !== "function") return;
      Swal.fire({
        html: `<video src="${a.href}" autoplay controls></video>`,
        background: "#222324",
        backdrop: "rgba(0,0,0,0.8)",
        width: "640px",
        padding: 0,
        showCloseButton: true,
        showConfirmButton: false,
        showCancelButton: false
      });
    });
  });
});
