
<!-- Notificación al usuario (El div se encuentra oculto hasta recibir la variable envio con valor ok) -->
<?php if($_GET[‘envio’] == ’ok’){ ?>
<div id="mensaje_para_usuario">El mensaje ha sido enviado correctamente. </div>
<?php } ?>