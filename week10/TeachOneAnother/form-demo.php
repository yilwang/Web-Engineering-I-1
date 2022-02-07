<?php

$x = $_GET["x"]; 
$y = $_GET["y"];
$answer = $x + $y;

?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hello World Example 3</title>
    </head>
<body>
<?php
   //$answer = $_GET["x"] + $_GET["y"];
   //echo "The asnwer is " . $answer;
   echo " X + Y :" .($x + $y) . "<br>";
   echo " X * Y :" .($x * $y) . "<br>";
   echo " X ^ Y :" .($x ** $y) . "<br>";
   //echo "<p> X + Y :" .($x + $y) . "</p>";
   //echo "<p> X * Y :" .($x * $y) . "</p>";
   //echo "<p> X ^ Y :" .($x ** $y) . "</p>";

?>
</body>
</html>