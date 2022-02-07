<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hello World Example 2</title>
            
    </head>
<body>
    
    <h1> Hello World From PHP</h1>
    <p> 
        <?php
        $x =5;
        $y =1;
        echo "X: $x<br>";
        echo "Y: $y<br>";
        echo "X + Y: " . ($x+$y) . "<br>";
        ?>
    </p>
    <h2>Current Date</h2>
    <p>Today's day is:
        <?php
            echo date("l,F jS");
        ?>
    </p>
</body>
</html>