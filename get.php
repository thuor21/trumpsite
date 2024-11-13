<?php

// Retrieve form data with checks to prevent warnings
$name = $_POST['name'] ?? null;  // Using null as a fallback if 'Fullname' is not set
$email = $_POST['email']?? null; // Using null as a fallback if 'Email';
$phone = $_POST['phone'] ?? null;
$message = $_POST['message'] ?? null;

// Connect to the database
$conn = new mysqli('localhost', 'root', '42276879', 'mydb'); // Make sure 'final' is the correct database name

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // Prepare the SQL statement with the table name and bind parameters correctly
    $stmt = $conn->prepare("INSERT INTO details (name,email, phone, message) VALUES (?,?, ?, ?)");
    
    if (!$stmt) {
        die("Error preparing statement: " . $conn->error);
    }

    // Bind parameters to the prepared statement
    $stmt->bind_param("ssis", $name,$email, $phone, $message); // Use 'ssss' as all are strings

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
