<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['colorball'])) {$colorball = $_POST['colorball'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "neonx2007@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "pixwhite.com@gmail.com"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> <b>Цвет:</b> $colorball <br><b>Телефон:</b> $phone";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
     echo "<html><head><meta http-equiv='Refresh' content='1; URL=index.html?id=".$_SESSION['id']."'></head><body></body></html>";//отправляем пользователя назад 
    }
    else 
    {
    echo '<center><p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p></center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>