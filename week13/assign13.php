<?php
//POST for input
$firstname = isset($_POST['first_name']) ? htmlspecialchars($_POST['first_name']) : "";
$lastname = isset($_POST['last_name']) ? htmlspecialchars($_POST["last_name"]) : "";
$studentID = isset($_POST['student_id']) ? htmlspecialchars($_POST['student_id']) : "";
$performance = isset($_POST['performance']) ? htmlspecialchars($_POST['performance']): "";
$instrument=  isset($_POST['instrument']) ? htmlspecialchars($_POST['instrument']): "";
$skill = isset($_POST['skill']) ? htmlspecialchars($_POST['skill']): "";
$location = isset($_POST['location']) ? htmlspecialchars($_POST['location']): "";
$room = isset($_POST['room']) ? htmlspecialchars($_POST['room']): "";
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
    <h1>Your Registeration</h1>
    <p>Customer Name: <?php echo "$firstname $lastname"; ?></p>
    <p>Student ID: <?php echo "$studentID"; ?></p>
    <p>Your Skill Level is <?php $skill ?></p>
    <p>You will perform in <?php $performance ?> with <?php $instrument?>.</p>
    <p>You will perform at Room <?php $room ?> in <?php $location ?> Building.</p>
    <br> 
    <br>
  
    <form>
        <input type="submit" name="apply" value="Comfirm">
        <input type="submit" name="cancel" value="Cancel">
    </form>

</body>

</html>
