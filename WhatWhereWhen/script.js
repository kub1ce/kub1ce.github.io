const wheel = document.getElementById('wheel');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// ! let arr = [0];
arr = shuffle(arr);
console.log("%c>>> Индексный порядок:", 'background: #222; color: #bada55', arr);
let usedSegments = [];

let QN = 0; // Номер вопроса (который берётся из DATA)

function shuffleSegments(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function spinWheel() {
    var wheel = document.getElementById('wheel');
    var segments = wheel.getElementsByClassName('segment');
    var selectedNumberSpan = document.getElementById('selected-number');
    var numberOfSegments = segments.length;
    var degreesPerSegment = 360 / numberOfSegments;

    // Выбираем случайный сегмент, который должен остановиться вверху
    var segmentToStopOn = arr.pop();
    console.log(segmentToStopOn+1);
    usedSegments.push(segmentToStopOn);

    // Вычисляем угол поворота так, чтобы выбранный сегмент оказался вверху
    // Сначала получаем угол на основе выбранного сегмента
    var segmentStopAngle = segmentToStopOn * degreesPerSegment - 40;
    // Далее, вычисляем угол поворота, добавляя кратное 360 градусов для плавности анимации
    var rotationDegrees = 360 - segmentStopAngle + (360 * (Math.floor(Math.random() * 5) + 5));

    // Устанавливаем анимацию вращения
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${rotationDegrees}deg)`;

    // Обрабатываем окончание анимации
    wheel.addEventListener('transitionend', function handleTransitionEnd() {
        // Обновляем отображаемое число
        selectedNumberSpan.textContent = segments[segmentToStopOn].getAttribute('data-number');

        // Изменяем данные о вопросе и изменяем их
        document.getElementById('question').innerHTML = Questions[segmentToStopOn].text;
        document.getElementById('question').style.display = 'block';
        document.getElementById('Name').innerHTML = Questions[segmentToStopOn].vsN;
        document.getElementById('photo').innerHTML = `<img src="${Questions[segmentToStopOn].vsI}" alt="Пользователь не оставил фото 😖">`;
        document.getElementById('playVS-container').style.display = 'grid';

        // Сбрасываем прокрутку для следующего использования
        wheel.style.transition = 'none';
        // Сбрасываем угол колеса к начальному положению выбранного сегмента
        wheel.style.transform = `rotate(${-segmentStopAngle}deg)`;
        
        // Удаляем обработчик событий, чтобы он не вызывался повторно
        wheel.removeEventListener('transitionend', handleTransitionEnd);
        QN++;
    });
}

// Сброс вращения для следующего запуска
wheel.addEventListener('transitionend', () => {
    wheel.style.transition = 'none';
    const currentRotation = parseInt(wheel.style.transform.replace(/[^\d.]/g, ''), 10);
    wheel.style.transform = `rotate(${currentRotation % 360}deg)`;
});

document.getElementById('spinButton').addEventListener('click', spinWheel);






// =====================================================================================
// =====================================================================================
// ================== DATA =============================================================
// =====================================================================================
// =====================================================================================



Questions = {
    "0" : {
        "text" : "Какой всем известный термин больше не употребляется в своем изначальном значении внутри нашего класса?",
        "vsN" : "Артём",
        "vsI" : "./Images/Levi michi.jpg",
    },
    "1" : {
        "text" : "Даже в кабинете химии меньше химикатов чем в этом месте. Про что идёт речь?",
        "vsN" : "Артём",
        "vsI" : "./Images/Levi michi.jpg",
    },
    "4" : {
        "text" : `<video controls="controls" width="auto" height="90%" src="./Images/Black Clover - Opening 4 _ Guess Who Is Back.mp4"></video>`,
        "vsN" : "Артём",
        "vsI" : "./Images/Levi michi.jpg",
    },
}