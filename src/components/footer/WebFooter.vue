<template>
    <footer class="container-fluid py-5 mt-5 text-white" style="background-color: var(--base-color);">
        <div class="container-md">
            <div class="row">
                <div class="col-lg-3">
                    <h2>Vintage</h2>
                    <ul type="none">
                        <li>About us</li>
                        <li>Sustainability</li>
                        <li>Blog</li>
                        <li>Advertising</li>
                    </ul>
                    <!-- create footer nav using that menu -->
                </div>
                <div class="col-lg-3">
                    <h2>Discover</h2>
                    <ul type="none">
                        <li>How it works</li>
                        <li>Help center</li>
                        <li>Infoboard</li>
                        <li>Mobile Apps</li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h2>Help</h2>
                    <ul type="none">
                        <li>Help center</li>
                        <li>Buying</li>
                        <li>Trust & Safety</li>

                    </ul>
                </div>
                <div class="col-lg-3">
                    <h2>Community</h2>
                    <ul type="none">
                        <li>Forum</li>


                    </ul>
                </div>
            </div>
            <div class="d-flex space-between social-media">
                <div class="social-media-icons">
                    <a href="your-whatsapp-link"><i class="fab fa-whatsapp"></i></a>
                    <a href="your-instagram-link"><i class="fab fa-instagram"></i></a>
                    <a href="your-linkedin-link"><i class="fab fa-linkedin"></i></a>
                </div>
                <div class="copyright-notice">
                    Copyright &copy; Sharpie 2024
                </div>
            </div>
        </div>

    </footer>
</template>


<style>
.d-flex {
  display: flex;
  justify-content: space-between;
}

.social-media{
    margin-top: 20px;
    padding: 7px;
    border-top: 2px solid grey;
}

.social-media-icons a {
  margin-right: 10px;

}


.social-media-icons i{
    color: white;
}
.social-media-icons a:last-child {
  margin-right: 0;
}
</style>