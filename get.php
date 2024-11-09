<?php

$name = $_POST['Fullname'];
$email = $_POST['email'];
$subject = $_POST['phone'];
$message = $_POST['message'];

// Connect to database
$conn = new mysqli('localhost', 'root', '', 'get');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO forward (Fullname, email, phone, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $name, $email, $subject, $message);

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Message sent successfully...";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
