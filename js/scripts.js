
// const btnCreateImportFile = document.querySelectorAll('.btn-create-import-file');
const btnCreateImportFile = document.querySelector('.btn-create-import-file');
const importContainer = document.querySelector('.import-container');
const btnX = document.querySelector('#btn-x');
const btnCreateReviewFfile = document.querySelector('#btn-create-review-file');

// btnCreateImportFile.forEach((btn) => {
btnCreateImportFile.addEventListener('click', () => {
    importContainer.style.display = 'flex';
});
// });

btnX.addEventListener('click', (e) => {
    importContainer.style.display = 'none';
});