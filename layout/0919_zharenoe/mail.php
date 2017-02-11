<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['mail'])) {$mail = $_POST['mail'];}
    if (isset($_POST['comment'])) {$comment = $_POST['comment'];}
    if (isset($_POST['data'])) {$data = $_POST['data'];}
    if (isset($_POST['corp'])) {$corp = $_POST['corp'];}
    if (isset($_POST['quantity'])) {$quantity = $_POST['quantity'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "neonx2007@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "pixwhite.com@gmail.com"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData<br> 
    <b>Дата:</b> $data 
    <br><b>Мероприятие:</b> $corp
    <br><b>Кол-во гостей:</b> $quantity 
    <br><b>Имя:</b> $name
    <br><b>Телефон:</b> $phone
    <br><b>Email:</b> $mail
    <br><b>Комментарий:</b> $comment";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center><p class="success">Ваша заявка получена,<br>
наш менеджер свяжется с<br>
Вами в ближайшее время.</p></center>';
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