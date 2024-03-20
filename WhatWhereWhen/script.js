const wheel = document.getElementById('wheel');
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let arr = [0, 1, 2, 3];
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

// const delay = ms => new Promise(res => setTimeout(res, ms));

function spinWheel (){
    document.getElementById('spin').play();
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
        selectedNumberSpan.textContent = `N${segmentToStopOn+1}`;
        document.getElementById(`N${segmentToStopOn+1}`).style.color = `red`;
        // await delay(2000);
        document.getElementById(`N${segmentToStopOn+1}`).innerHTML = `<img src="./Images/right-arrow.png">`;

        if (QN == 10){
            document.getElementById('question').innerHTML = Questions[QN].text;
            document.getElementById('question').style.display = 'block';
            document.getElementById('black').play();
        } else {
            // Изменяем данные о вопросе и изменяем их
            document.getElementById('question').innerHTML = Questions[QN].text;
            document.getElementById('question').style.display = 'block';
            document.getElementById('Name').innerHTML = Questions[QN].vsN;
            document.getElementById('photo').innerHTML = `<img src="${Questions[QN].vsI}" alt="Пользователь не оставил фото 😖">`;
            document.getElementById('playVS-container').style.display = 'grid';
        }


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



document.addEventListener('keydown', function(e) {
    if(e.keyCode == 65){
        // A - GONG
        document.getElementById('gong').play();
    } else if(e.keyCode == 66){
        // B - BLACK
        document.getElementById('black').play();
    } else if (e.keyCode == 67) {
        // ! C - PAUSE
        var audios = document.getElementsByTagName('audio');
        for(var i = 0, len = audios.length; i < len;i++){
            if(audios[i] != e.target){
                audios[i].pause();
            }
        
        }
    } else if (e.keyCode == 68) {
        // ! D - STOP
        var audios = document.getElementsByTagName('audio');
        for(var i = 0, len = audios.length; i < len;i++){
            if(audios[i] != e.target){
                audios[i].pause();
                audios[i].currentTime = 0;
            }
        
        }
    } else if(e.keyCode == 69){
        // E - Pause
        document.getElementById('pause').play();
    } else if(e.keyCode == 70){
        // F - Timer
        document.getElementById('timer').play();
    } else if(e.keyCode == 71){
        // G - Start
        document.getElementById('start').play();
    } else if(e.keyCode == 72){
        // * H - SPIN WHEEL
        // document.getElementById('start').play();
        spinWheel();
    }
});






// =====================================================================================
// =====================================================================================
// ================== DATA =============================================================
// =====================================================================================
// =====================================================================================



Questions = {
    "0" : {
        "text" : `Даже в кабинете химии меньше химикатов чем в этом месте. Про что идёт речь?`,
        "vsN" : "Шевченко Ян Владиславович",
        "vsI" : "./Images/Yan.jpg",
    },
    "1" : {
        "text" : `<video controls="controls" width="auto" height="90%" src="./Videos/LV.mp4"></video>`,
        "vsN" : "Старцева Лариса Вячеславовна",
        "vsI" : "./Images/SLV(t).jpg",
    },
    "2" : {
        "text" : `<video controls="controls" width="auto" height="90%" src="./Videos/AK.mp4"></video>`,
        "vsN" : "Гилязова Альфия Курбановна",
        "vsI" : "./Images/GAK.jpg",
    },
    "3" : {
        "text" : `<video controls="controls" width="auto" height="90%" src="./Videos/EN.mp4"></video>`,
        "vsN" : "Лукина Екатерина Николаевна",
        "vsI" : "./Images/EN.jpg",
    },
    "4" : {
        "text" : `Какой всем известный термин больше не употребляется в своем изначальном значении внутри нашего класса?`,
        "vsN" : "Пашаzxcкий Никита Антонович",
        "vsI" : "./Images/NN.jpg",
    },
    "5" : {
        "text" : `Один волшебник сказал, что запросто может в центре комнаты поставить пустую бутылку и вползти в нее. Как он это сделает?`,
        "vsN" : "Рожков Андрей Сергеевич",
        "vsI" : "./Images/A.jpg",
    },
    "6" : {
        "text" : `<video controls="controls" width="auto" height="90%" src="./Videos/EF.mp4"></video>`,
        "vsN" : "Якубовская Елена Ивановна",
        "vsI" : "./Images/YEV.jpg",
    },
    "7" : {
        "text" : `Какой учитель имел настолько большое влияние, что мог заставить учеников выпить?`,
        "vsN" : "Богданов Артём Евгеньевич",
        "vsI" : "./Images/Art.jpg",
    },
    "8" : {
        "text" : `<video controls="controls" width="auto" height="90%" src="./Videos/AL.mp4"></video>`,
        "vsN" : "Бабетов Алексей Алимович",
        "vsI" : "./Images/BAA.jpg",
    },
    "8" : {
        "text" : `<video controls="controls" width="auto" height="90%" src="./Videos/AL.mp4"></video>`, // ! =====
        "vsN" : "Воронова Наталья Васильевна",
        "vsI" : "./Images/VNV.jpg",
    },
    "10" : {
        "text" : `Чёрный ящик`,
        "vsN" : "",
        "vsI" : "",
    },
}