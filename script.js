document.addEventListener('DOMContentLoaded', function () {
    const cartoon = document.querySelector('.cartoon');

    cartoon.addEventListener('click', function () {
        cartoon.classList.add('jump');

        setTimeout(() => {
            cartoon.classList.remove('jump');
        }, 500);
    });
});
