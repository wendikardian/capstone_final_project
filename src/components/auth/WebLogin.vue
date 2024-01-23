<template>
    <main>

        <div class="container ">
            <div class="row my-5">
                <div class="col-12 col-lg-6 d-none d-lg-block">
                    <img src="@/assets/login.jpg" class="img-fluid" style="height: 700px; object-fit: cover;"
                        alt="Login image">
                </div>
                <div class="col-12 col-lg-6">
                    <div class="card p-3">
                        <h3>Login</h3>
                        <p>Enter your detail below</p>
                        <div class="my-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="passwords" placeholder="insert your password">
                        </div>

                        <!-- add button login -->
                        <div class="mt-5 w-100 d-flex justify-content-center">

                            <a href="profile.html" class="text-white btn btn-success w-100">Continue</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>