<?php
if (isset($_POST['order'])) {
    $message = "Your order has been placed.";
} else {
    $message = "Your order was not sent.";
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Status</title>
</head>

<body>
    <h1><?php echo "$message" ?></h1>
</body>

</html>