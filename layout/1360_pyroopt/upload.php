<html lang="ru">
<head>
   <meta charset="UTF-8">
</head>
<body>
<?php 
  // Если поле выбора вложения не пустое - закачиваем его на сервер 
  if (!empty($_FILES['u_file']['tmp_name']))
  { 
    // Закачиваем файл 
    $path = $_FILES['u_file']['name']; 
    if (copy($_FILES['u_file']['tmp_name'], $path)) $picture = $path; 
  } 
  $thm = 'Заявка с сайта PYROOPT.RU';
  $mail = $_POST['mail'];
  $tirazh = $_POST['tirazh'];
  $colorball = $_POST['colorball'];
  $colorlogo = $_POST['colorlogo'];
  $mess = $_POST['mess'];
  $phone = $_POST['phone'];
  $city= $_POST['city'];
  $msg="
  <b>Телефон:</b> $phone<br>
  <b>E-mail:</b> $mail<br>
  <b>Город:</b> $city<br>
  <b>Тираж:</b> $tirazh шаров <br>
  <b>Цвет:</b> $colorball<br>
  <b>Цвет логотипа:</b> $colorlogo<br>
  <b>Комментарий:</b> $mess<br>
";
  // $mail_to = 'dyaroman@gmail.com';
  $mail_to = 'pixlp7@gmail.com';
  // Отправляем почтовое сообщение 
  if(empty($picture)) mail($mail_to, $thm, $msg); 
  else send_mail($mail_to, $thm, $msg, $picture); 
  // Вспомогательная функция для отправки почтового сообщения с вложением (Trianon)
  function send_mail($mail_to, $thema, $html, $path)   
  { if ($path) {  
    $fp = fopen($path,"rb");   
    if (!$fp)   
    { print "Cannot open file";   
      exit();   
    }   
    $file = fread($fp, filesize($path));   
    fclose($fp);   
    }  
    $name = $path; // в этой переменной надо сформировать имя файла (без всякого пути)  
    $EOL = "\r\n"; // ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём
    $boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.  
    $headers    = "MIME-Version: 1.0;$EOL";   
    $headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";  
    $headers   .= "From: PYROOPT.RU";  
      
    $multipart  = "--$boundary$EOL";   
    $multipart .= "Content-Type: text/html; charset=utf-8$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом html-части 
    $multipart .= chunk_split(base64_encode($html));   

    $multipart .=  "$EOL--$boundary$EOL";   
    $multipart .= "Content-Type: application/octet-stream; name=\"$name\"$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= "Content-Disposition: attachment; filename=\"$name\"$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла 
    $multipart .= chunk_split(base64_encode($file));   

    $multipart .= "$EOL--$boundary--$EOL";   
      
        if(!mail($mail_to, $thema, $multipart, $headers))   
         {return False;           //если письмо не отправлено
      }  
    else { //// если письмо отправлено
    return True;
    }  
  exit;  
  }
print "<script language='Javascript'><!--
    alert('Сообщение отправленно');
    window.location.href = 'index.html'
//--></script>";
?>
</body>
</html>