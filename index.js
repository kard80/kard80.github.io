let count = 0;
const wordArr = ['Yes, pls', 'Absolutely Yes', 'Yes Yes Yes']
// default w:72, h:24, fontSize: 24
const buttonStyle = [{
    width: '128px',
    height: '36px',
    fontSize: '24px'
    
}, {
    width: '256px',
    height: '48px',
    fontSize: '24px'
}, {
    width: '480px',
    height: '72px',
    fontSize: '36px'
}]

function changePage() {
    const main = document.getElementById('main')
    const final = document.getElementById('final')
    main.style.display = 'none';
    final.style.display = 'block';
}

function onAccept() {
    changePage();
}

function onReject() {
    if (count >= wordArr.length) {
        changePage();
        return;
    }


    const yesButton = document.getElementById('yes-button')
    yesButton.innerHTML = wordArr[count]
    yesButton.style.width = buttonStyle[count].width
    yesButton.style.height = buttonStyle[count].height
    yesButton.style.fontSize = buttonStyle[count].fontSize
    count += 1

    if (count === wordArr.length) {
        const noButton = document.getElementById('no-button');
        noButton.innerHTML = 'Also Yes, but Red'
    }

}