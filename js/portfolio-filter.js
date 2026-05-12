const filterBtns = document.querySelectorAll('.nav__btn');
const projectItems = document.querySelectorAll('.project__item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('nav__btn--active'));
        btn.classList.add('nav__btn--active');

        const filter = btn.dataset.filter;

        projectItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
