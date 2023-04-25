function format(command) {
    document.execCommand(command, false, null);
}

function openFindDialog() {
    const findString = prompt('Enter the text to find:');
    if (findString) {
        const textEditor = document.querySelector('.text-editor');
        const regex = new RegExp(findString, 'gi');
        const highlightedText = textEditor.innerHTML.replace(regex, `<mark>${findString}</mark>`);
        textEditor.innerHTML = highlightedText;
    }
}

function insertLoremIpsum() {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const textEditor = document.querySelector('.text-editor');
    textEditor.innerHTML = loremIpsum;
}

function openFindModal() {
    const findModal = document.getElementById('find-modal');
    findModal.style.display = 'block';
}

function closeFindModal() {
    const findModal = document.getElementById('find-modal');
    findModal.style.display = 'none';
}

function performFind() {
    const findText = document.getElementById('find-text').value;
    if (findText) {
        const textEditor = document.querySelector('.text-editor');
        const regex = new RegExp(findText, 'gi');
        const highlightedText = textEditor.innerHTML.replace(regex, `<mark>${findText}</mark>`);
        textEditor.innerHTML = highlightedText;
    }
    closeFindModal();
}
