<?php

// Retrieve form data with checks to prevent warnings

$email = $_POST['email']?? null; // Using null as a fallback if 'Email';
$phone = $_POST['zip'] ?? null;


// Connect to the database
$conn = new mysqli('localhost', 'root', '42276879', 'event'); // Make sure 'final' is the correct database name

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // Prepare the SQL statement with the table name and bind parameters correctly
    $stmt = $conn->prepare("INSERT INTO event_data (email,zip) VALUES (?,?)");
    
    if (!$stmt) {
        die("Error preparing statement: " . $conn->error);
    }

    // Bind parameters to the prepared statement
    $stmt->bind_param("ss", $email, $zip); // Use 'ssss' as all are strings

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
