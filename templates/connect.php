<?php

try {
  /* local */
  $pdo = new PDO('mysql:host=127.0.0.1;dbname=oliwood', 'root', '');

  /* web */
  //$pdo = new PDO('mysql:host=127.0.0.1;dbname=obfiscco_oliwood', 'obfiscco_oliwood', 'LKwacl)qn)z9wc6a');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
  echo $e->getMessage();
  die();
}

?>
