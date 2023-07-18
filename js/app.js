document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('aside');
    const openButton = document.querySelector('.navbar-toggler');
    const closeButton = document.querySelector('.close-button');

    function openSidebar() {
        sidebar.classList.add('show');
    }

    function closeSidebar() {
        sidebar.classList.remove('show');
    }

    function handleWindowResize() {
        if (window.innerWidth >= 867) {
            closeSidebar();
            closeButton.style.display = 'none';
        } else {
            closeButton.style.display = 'block';
        }
    }

    openButton.addEventListener('click', openSidebar);
    closeButton.addEventListener('click', closeSidebar);
    window.addEventListener('resize', handleWindowResize);

    // Handle initial state on page load
    handleWindowResize();
});

