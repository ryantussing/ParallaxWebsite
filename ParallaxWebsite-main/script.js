window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    this.document.querySelector("main").style.transform = `translateY(${distance *
    1} px)`;
    this.document.querySelector(
        ".MountainImage"
    ).style.transform = `translateY(${distance * 0.3}px)`;
    this.setTimeout(() => {
        this.document.querySelector("div.MountainSection").classList.add("animate-me");
    }, 0);
});