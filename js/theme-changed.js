let boxes = document.getElementsByClassName('rounded');
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        let color = boxes[i].getAttribute('data-color');
        if (color) {
            document.body.style.backgroundColor = color;
        }
    });
}