// All resources loaded
window.addEventListener('load', () => {
  // Open video links in modal window
  // Needs SweetAlert
  if (typeof Swal !== "function") {
    document.querySelectorAll('a[href$=".mp4"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
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
  }
  // Log page request
  fetch(`https://wikihoops.com/log/${window.location.hostname}${window.location.pathname}`);
});
