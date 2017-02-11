<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['mess'])) {$mess = $_POST['mess'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = ""; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "pixwhite.com@gmail.com"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> 
    <b>Имя:</b> $name 
    <br><b>Телефон:</b> $phone
    <br><b>Коментарий:</b> $mess";
    $send = mail ($to, $subject, $message, $headers);
        if ($send == 'true')
    {
    echo "<html><head><meta http-equiv='Refresh' content='1; URL=sent.html?id=".$_SESSION['id']."'></head><body></body></html>";//отправляем пользователя назад 
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