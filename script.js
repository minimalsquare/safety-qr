function generateQR() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const snsType = document.getElementById('sns-type').value;
            const snsId = document.getElementById('sns-id').value;
            const email = document.getElementById('email').value;

            document.getElementById('p-name').innerText = name;
            document.getElementById('p-phone').innerText = phone;
            document.getElementById('p-sns-type').innerText = snsType;
            document.getElementById('p-sns-id').innerText = snsId;
            
            // 1. 큐알 인식률을 위해 메시지를 핵심만 담아 짧게 줄였습니다.
            const subject = encodeURIComponent("Found Passport Wallet");
            const body = encodeURIComponent("Hello, I found your wallet. Please reply with your contact number.");
            const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

            const emailElement = document.getElementById('p-email');
            emailElement.innerHTML = `<a href="${mailtoLink}" style="text-decoration:none; color:inherit; display:block; width:100%;">${email}</a>`;

            const qrContainer = document.getElementById('qrcode');
            qrContainer.innerHTML = ""; 
            
            try {
                // 2. 큐알 코드 설정을 '인식 우선' 모드로 변경
                new QRCode(qrContainer, {
                    text: mailtoLink,
                    width: 75,
                    height: 75,
                    colorDark: "#000000",
                    colorLight: "#ffffff",
                    correctLevel: QRCode.CorrectLevel.L // 점의 밀도를 낮추어 인식 속도를 높임
                });
            } catch (e) {
                console.error(e);
            }
            document.getElementById('result-area').style.display = 'block';
        }
