<template>
    <div class="container"> <!--Responsive Bootstrap container-->
          <div class="col">
            <img class="logoBottom" alt="logo" src="@/assets/logo.png">
          </div>
          <div class="col">
            <NavRouter /> <!--Navigation Bar Component-->
          </div>
          <div class="col">
            <address>Pallet House<br> <!--address for easier SEO-->
            Pallet Town<br>
            Kanto</address>
            <div>Contact us via <a href=mailto:theverybest@gmail.com>E-Mail</a>
             or <a href=tel:+999999999> Phone</a></div>
             <div>theverybest@gmail.com | +999 999 999</div>
          </div>
        </div>
</template>

<style>
footer {
  font-size: 13px;
  padding: 10px;
  background: rgba(67, 109, 103, 0.4);
  margin-top: auto;
}
footer nav {
  padding: 10px;
}
</style>
