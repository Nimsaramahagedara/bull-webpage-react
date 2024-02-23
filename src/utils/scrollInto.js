export const scrollInto = (target) => {
    const targetElement = document.getElementById(target);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 8000 });
    }
}