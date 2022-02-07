<?php
//Define prices
$priceList = Array(
    "Strawberry Cheese Cake"=> 25.95,
    "Strawberry Chocolate Cake"=> 20.95,
    "Rose Cheese Cake"=> 30.95,
    "Dark Chococalte Cake"=> 25.95,
    "Chocolate Mousse Cake"=> 20.95,
    "Layered Mocha Cheese Cake"=> 25.95
);

//POST for input
$firstname = isset($_POST['first_name']) ? htmlspecialchars($_POST['first_name']) : "";
$lastname = isset($_POST['last_name']) ? htmlspecialchars($_POST["last_name"]) : "";
$address = isset($_POST['address']) ? htmlspecialchars($_POST['address']) : "";
$phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : "";
$cctype = isset($_POST['card']) ? htmlspecialchars($_POST['card']) : "";
$cnum = isset($_POST['credit_card']) ? htmlspecialchars($_POST['credit_card']) : "";
$cdate = isset($_POST['exp_date']) ? htmlspecialchars($_POST['exp_date']) : "";
$cakes = isset($_POST['product']) ? $_POST['product'] : Array();


//calculate total price
$total = 0;
foreach ($cakes as $cake) {
    $total += $priceList[$cake];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>Result of Form Submission</title>
</head>

<body>
    <h1>Comfirm Your Order</h1>
    <p>Customer Name: <?php echo "$firstname $lastname"; ?></p>
    <p>Shipping Address: <?php echo "$address"; ?></p>
    <p>Phone Number: <?php echo "$phone"; ?></p>
    <p>Payment Type: <?php echo "$cctype"; ?>, expires on <?php echo "$cdate" ?> </p>
    <p>Card Number: <?php echo "$cnum"; ?></p>
    <p>You are ordering:<br>
        <?php
        foreach ($cakes as $cake)
            echo "$" . number_format($priceList[$cake], 2) . " - " . ucfirst($cake) . "<br>";
        ?>
    </p>
    <p>The total order cost is $ <?php echo number_format($total, 2); ?></p>
    <form action="assign12_a.php" method="POST">
        <input type="submit" name="order" value="Comfirm">
        <input type="submit" name="cancel" value="Cancel">
    </form>

</body>

</html>