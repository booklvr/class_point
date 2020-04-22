const file = document.getElementById('file');

console.log('made it to helper function');

file.addEventListener('change', (e) => {
    e.target.closest('form').submit();
})