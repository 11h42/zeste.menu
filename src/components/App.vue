<template>
    <div id="header" class="container m-t-1">
        <nav class="navbar navbar-dark ">
            <a class="navbar-brand" href="/">
                <img id="logo" alt="lesspass" class="img-fluid" src="../../static/logo.png">
            </a>
        </nav>
    </div>
    <div id="wrapper" class="container m-t-3">
        <router-view>
        </router-view>
    </div>
</template>

<style>
    @import '../../node_modules/bootstrap/dist/css/bootstrap.css';

    body {
        background: white;
    }

    #header #logo {
        width: 250px;
    }

</style>
