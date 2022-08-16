<?php
    session_start();
    define('DB_SERVER','localhost'); 
    define('DB_USERNAME','root'); 
    define('DB_PASSWORD',''); 
    define('DB_NAME','atlantic'); 
    $link = new mysqli(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME); 
    $link->set_charset('utf8');
    if($link->connect_errno){ 
     printf("Ocorreu um Erro - Ligação Falhou; %s\n", $link->connect_error); 
     exit(); 
    } 
?>