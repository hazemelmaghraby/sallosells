document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('.navbar').forEach(el => el.classList.toggle('dark-mode'));
        document.querySelectorAll('.btn-primary').forEach(el => el.classList.toggle('dark-mode'));
        document.querySelectorAll('.cardd').forEach(el => el.classList.toggle('dark-mode'));
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelectorAll('.range-bar');

    const fillBars = () => {
        bars.forEach(bar => {
            const fill = bar.querySelector('.range-bar-fill');
            const percentage = fill.getAttribute('data-percentage');
            const color = bar.getAttribute('data-color');
            fill.style.width = percentage + '%';
            fill.style.backgroundColor = color; // Set color directly
        });
    };

    const isScrolledIntoView = (elem) => {
        const rect = elem.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const onScroll = () => {
        bars.forEach(bar => {
            if (isScrolledIntoView(bar) && !bar.classList.contains('filled')) {
                fillBars();
                bar.classList.add('filled');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check in case elements are already in view
});


function BestSellersPrices() {
    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');
    const item1Price = "50$"
    const item2Price = "30$"
    const item3Price = "100$"

    item1.innerHTML = `Price : ${item1Price}`;
    item2.innerHTML = `Price : ${item2Price}`;
    item3.innerHTML = `Price : ${item3Price}`;
}

BestSellersPrices();

