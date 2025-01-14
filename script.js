document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지

    // 사용자 입력값 가져오기
    var name = document.getElementById('name').value;
    var department = document.getElementById('department').value;
    var year = document.getElementById('year').value;

    // QR 코드 내용 생성
    var qrContent = `이름: ${name}\n학과: ${department}\n학년: ${year}`;

    // 이전 QR 코드 제거 (기존 QR 코드가 있을 경우)
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";

    // QR 코드 생성
    new QRCode(qrcodeContainer, {
        text: qrContent,
        width: 128,
        height: 128
    });
});