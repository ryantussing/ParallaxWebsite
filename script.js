window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    this.document.querySelector("header").style.transform = `translateY(${distance *
    1} px)`;
    this.document.querySelector(
        ".MountainImage"
    ).style.transform = `translateY(${distance * 0.3}px)`;
    this.setTimeout(() => {
        this.document.querySelector("section").classList.add("animate-me");
    }, 400);
});