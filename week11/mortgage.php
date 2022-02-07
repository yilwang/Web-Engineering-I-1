<?php
/*Perform caculations*/
$apr = isset($_GET['apr']) ? $_GET['apr'] : 0;
$term = isset($_GET['term']) ? $_GET['term'] : 0;
$amount = isset($_GET['amount']) ? $_GET['amount'] : 0; // principal

$r = $apr / 1200; // monthly interest rate
$n = $term * 12; // number of months   
$x = (1 + $r) ** $n;
$payment = $amount * (($r *$x) /($x-1));
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "css/style.css">
    <title>Assignment 11</title>
</head>

<body>
    <h1 style="text-align: center; list-style-position: inside;">PHP Mortgage Calculator</h1>
    
    <p style="text-align: center; list-style-position: inside;">This is a mortgage calculator </p>

    <form action = "mortgage.php" method = "GET" id="calculator">
        <fieldset class ="cal">
          <legend>Start Here</legend>
          APR (must be between 0 and 25.00%)<br>

          <input type="text" name="apr" id="apr" size="6" class="right" readonly value = "<?= $apr?>"/>%
          <span class="invalid_input" id="aprValid"><br />INVALID: Input must be between 0 and 25.0%</span>
          <br>
          <br>
          Term length in years (must be an integer greater than 0 and less than or equal to 40)
          <br>

          <input type="text" name="term" id="term" size="10" readonly value = "<?= $term?>"/>years
          
          <span class="invalid_input" id="termValid"><br>INVALID: Input must be an integer greater than zero and less than
            or equal to 40</span>
          <br>
          <br>
          Amount of loan in dollars
          <br>
          $<input type="text" name="amount" id="amount" size="9" readonly value = "<?= $amount?>" />
          <span class="invalid_input" id="amountValid"><br />INVALID: Input must be greater than zero</span>
          <br>
          <br>
        </fieldset>

        <fieldset>
          <legend>Result</legend>
          Monthly Payment
          <br>
          $<input type="text" name="payment" id="payment" size="9" readonly value = "<?= number_format($payment,2); ?>" disabled/>
          <br>
          <button type="submit" id="calculate">Calculate
          </button>

          <input type="reset" id="clear">
        </fieldset>
      </form>

</body>

</html>