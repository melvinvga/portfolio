<?php
    if(isset($_POST['submit']))
    {
        if(!empty($_POST['nom']) AND !empty($_POST['email']) AND !empty($_POST['message']))
        {
            $header="MIME-Version: 1.0\r\n";
            $header.='From:"VOTRE NOM"<email-expediteur@example.org>'."\n";
            $header.='Content-Type:text/html; charset="uft-8"'."\n";
            $header.='Content-Transfer-Encoding: 8bit';

            $message='
            <html>
                <body>
                    <div align="center">
                        <u>Nom de l\'expéditeur :</u>'.$_POST['nom'].'<br />
                        <u>Mail de l\'expéditeur :</u>'.$_POST['email'].'<br />
                        <br />
                        '.nl2br($_POST['message']).'
                    </div>
                </body>
            </html>
            ';

            mail("contact@melvin-vga.fr", "Message - portfolio", $message, $header);
            $msg="Votre message a bien été envoyé !";
            header("Location: index.html");
        }
        else
        {
            $msg="Tous les champs doivent être complétés !";
        }
    }
?>