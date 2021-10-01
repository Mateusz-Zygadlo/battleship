const checkedFields = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('visiblity');

    const checkedField = document.createElement('div');
    checkedField.classList.add('checkedField');
    checkedField.textContent = 'You cannot click on the field again';

    container.appendChild(checkedField);

    document.body.appendChild(container);
}

export default checkedFields;