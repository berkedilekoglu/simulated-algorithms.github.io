<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <style>
        body{
            background-color: #FFFFF0;
        }
        .card{
            background-color: #FFFAF0;

        }
        .col-lg-6{
            padding-bottom: 3rem;
        }
        h2{
            color: #696969;
        }
        .alert {

            margin-left: 4%;
            margin-right: 4%;
            text-align: center;
        }
    </style>
    <title>Contact Form</title>
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-lg-6 m-auto">
            <div class="card mt-5">
                <img src="img/contact.jpg" class="card-img-top" alt="...">
                <div class="card-title">
                    <h2 class="text-center py-2">Contact Me</h2>
                    <hr>
                        <?php
                            $Msg = "";
                            if(isset($_GET['error']))
                            {
                                $Msg = " Please Fill in the Blanks!";
                                echo '<div class="alert alert-danger">'.$Msg.'</div>';
                            }

                            if(isset($_GET['success']))
                            {
                                $Msg = "Your Message Has Been Sent";
                                echo '<div class="alert alert-success">'.$Msg.'</div>';
                            }
                        ?>
                </div>
                <div class="card-body">
                    <form action="process.php" method="post">
                        <input type="text" name="UName" placeholder="Name Surname" class="form-control mb-2">
                        <input type="email" name="Email" placeholder="Eg. helloworld@gmail.com" class="form-control mb-2">
                        <input type="text" name="Subject" placeholder="Subject" class="form-control mb-2">
                        <textarea name="msg" class="form-control mb-2" placeholder="Write your message..."></textarea>
                        <button class="btn btn-outline-dark" name="btn-send">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>








<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>
</body>

</html>
