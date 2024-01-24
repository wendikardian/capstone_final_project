<template>  
 <main>
        <div class="container">
            <div class="row my-5">
                
                <user-menu @changeComponent="$router.push($event)" >

                </user-menu>
                <div class="col-12 col-lg-9 mt-5">
                    <div class="card p-2 p-lg-5">
                        <h4>Edit profile</h4>
                        <div class="d-flex justify-content-between mt-4">
                            <p class="font-weight-bold">Photo</p>
                            <div class="upload-image d-flex align-items-center justify-content-end" style="gap: 20px;">
                                <!-- icon profile -->
                                <h1 class="fas fa-user"></h1>
                                <div class="col-6 col-lg-12">

                                    <input type="file" class="form-control w-100" id="exampleFormControlInput1"
                                        placeholder="name@example.com">
                                </div>
                                <!-- font awesome icon trash -->


                                <i class="fas fa-trash">
                                </i>

                                <!-- if icon trash clicked input will be reset -->
                       
                            </div>
                        </div>
                        <div class="my-3">
                            <label for="exampleFormControlInput1" class="form-label">Full name</label>
                            <input type="text" value="Jack Daniel" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="my-3">
                            <label for="exampleFormControlInput1" class="form-label">Username</label>
                            <input type="text" value="jackdaniel" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="my-3">
                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                            <input type="mail" value="jack@gmail.com" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button type="button" class="btn btn-success" >Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

</template>


<script setup> 
    import UserMenu from '../user/UserMenu.vue';
    import { useRoute } from 'vue-router';


    const route = useRoute();
</script>

