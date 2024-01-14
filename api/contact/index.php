<!-- <?php
// header("Access-Control-Allow-Origin: *");
// $rest_json = file_get_contents("php://input");
// $_POST = json_decode($rest_json, true);

// if (empty($_POST['fname']) && empty($_POST['email'])) die();

// if ($_POST)
// 	{

// 	// set response code - 200 OK

// 	http_response_code(200);
// 	$subject = $_POST['fname'];
// 	$to = "me@malith.pro";
// 	$from = $_POST['email'];

// 	// data

// 	$msg = $_POST['number'] . $_POST['message'];

// 	// Headers

// 	$headers = "MIME-Version: 1.0\r\n";
// 	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
// 	$headers.= "From: <" . $from . ">";
// 	mail($to, $subject, $msg, $headers);

// 	// echo json_encode( $_POST );

// 	echojson_encode(array(
// 		"sent" => true
// 	));
// 	}
//   else
// 	{

// 	// tell the user about error

// 	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
// 	}

// ?>





<?php
echo "Parameter:".$argv[1]."\n";
echo "Directory content...\n\n";

$output="";
if ($hnd = opendir('.'))
{
  while($file = readdir($hnd))
  {
    if ($file == "." || $file == "..") continue;
    $output .= "$file\n";
  }
  closedir($hnd);
}
echo $output;
?>