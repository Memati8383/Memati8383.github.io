<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $adsoyad = $_POST["adsoyad"];
    $email = $_POST["email"];
    $mesaj = $_POST["mesaj"];

    // Burada e-posta gönderme işlemini gerçekleştirin
    $to = "iletisim@mail.com";
    $subject = "İletişim Formu Mesajı";
    $message = "Ad Soyad: $adsoyad\nE-posta: $email\nMesaj: $mesaj";
    mail($to, $subject, $message);
}
?>
