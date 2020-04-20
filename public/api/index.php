<?php
$link = mysqli_connect("localhost", "root", "", "currency");
mysqli_set_charset($link, "utf8");

function get_data($link) {
if (isset($_GET['valuteID'])) {
	$dateStart = $_GET['dateStart'];
    $dateEnd = $_GET['dateEnd'];
	$valuteID = $_GET['valuteID'];
	
}
	
    if ($link === false) {
        return ("Ошибка: Невозможно подключиться к MySQL  ");
    } else {
        $sql = "SELECT charCode, name, value, date FROM currency WHERE valuteID='$valuteID' AND date <= $dateEnd AND date >= $dateStart  GROUP BY date  ORDER BY date LIMIT 200";
        $result = mysqli_query($link, $sql);
        if ($result) {
            $projects = mysqli_fetch_all($result, MYSQLI_ASSOC);
			
			if($projects.length === 0){
				return "По вашему запросу ничего не найдено";
			} else {
				return $projects;
			}
            
        }
    }
};




 print_r(json_encode(get_data($link)));
?>

