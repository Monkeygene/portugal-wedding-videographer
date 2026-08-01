document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".lazy-video");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const video = entry.target;
        const source = video.querySelector("source");

        if (source.dataset.src) {
          source.src = source.dataset.src;
          video.load();

          video.play().catch(() => {});
        }

        observer.unobserve(video);
      });
    },
    {
      rootMargin: "300px",
    },
  );

  videos.forEach((video) => observer.observe(video));
});
