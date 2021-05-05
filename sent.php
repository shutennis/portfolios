<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>shu Oomori My portfolio2</title>
    <link rel="stylesheet" href="stylesheet.css">
  </head>
  <body>

  <div id="contact">
  <div class="container5">
    <div class="contact-heading">
    <h4 class="heading4">CONTACT</h4>
    <p class="heading-p">お問い合わせいただきありがとうございます</p>
  </div>  
    
      <div class="form-item">name</div>
      <?php echo $_POST['name']; ?>
      <div class="form-item">your Email</div>
      <?php echo $_POST['email']; ?>

      <div class="form-item">内容</div>
      <?php echo $_POST['body']; ?>

     
  </div>
</div>
  </body>