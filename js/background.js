const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.png", "6.jpg", "7.png", "8.jpg", "9.jpg"];
const quotes = [
    {"quote" : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.", "author": "앙드레 말로"},
    {"quote" : "우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다워지는 것이다.", "author": "린홀"},
    {"quote" : "인생에 뜻을 세우는데 적당한 때는 없다.", "author": "볼드윈"},
    {"quote" : "너 자신이 돼라. 다른 사람은 이미 있으니까.", "author": "오스카 와일드"},
    {"quote" : "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.", "author": "찰리 채플린"},
    {"quote" : "아무 것도 하지 않으면 아무 일도 일어나지 않는다.", "author": "기시미 이치로"},
    {"quote" : "모든 이의 마음을 얻으려고 계산된 글은 그 누구의 마음도 얻지 못한다.", "author": "아들라이 E.스티븐슨"},
    {"quote" : "가장 큰 위험은 위험없는 삶이다.", "author": "스티븐 코비"},
    {"quote" : "위험은 자신이 무엇을 하는지 모르는 데서 온다.", "author": "워런 버핏"},
    {"quote" : "모험은 그 자체만으로도 해볼 만한 가치가 있다.", "author": "아멜리아 에어하트"}
];

const body = document.body;
const clock = document.querySelector("#time");

//배경이미지 변경
function changeBackgroundImage() {
    const chosenImage = images[Math.floor(Math.random()*images.length)];
    body.style.backgroundImage = `url('images/${chosenImage}')`;
}

//명언
function displayQuotes() {
    const chosenQuote = quotes[Math.floor(Math.random()*quotes.length)];
    body.querySelector("#quote .body-text span:first-child").innerText = `"${chosenQuote.quote}"`;
    body.querySelector("#quote .body-text span:last-child").innerText = `- ${chosenQuote.author}`;
}

//시계
function displayClock() {
    const date = new Date();
    const time =  `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
    clock.innerText = time;
}

displayClock();
displayQuotes();
changeBackgroundImage();
setInterval(changeBackgroundImage, 6000);
setInterval(displayClock, 1000);
setInterval(displayQuotes, 3000);