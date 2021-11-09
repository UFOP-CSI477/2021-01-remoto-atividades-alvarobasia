<?php

require_once "./connection.php";


$name = $_POST['name'];
$un = $_POST['un'];


if (empty($name) || empty($un)) {
    header('Location: index.php?error=empty');
    exit();
}

try {

    $connection->beginTransaction();
    $stmt = $connection->prepare("INSERT INTO produtos(nome, um) VALUES(:name, :un);");

    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':um', $um);

    $stmt->execute();


    $connection->commit();
    header('Location: ./index.php');

    exit();
} catch (Exception $e) {
    $connection->rollBack();
    header('Location: index.php?error=dberror');
    exit();
}
