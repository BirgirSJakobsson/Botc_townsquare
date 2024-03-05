<script setup>
    import Controls from '../Controls.vue';
</script>

<template>
    <header>
        <nav>
            <p>Navbar</p>
        </nav>
        
        <h2><span id="Welcome">Welcome_to_the_site</span></h2>
        <p>Future Div group</p>
    </header>
</template>

<style>
    * {
    box-sizing: border-box;
    }
    html, body, div, img {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    body {
        line-height: 1;
    }
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: blueviolet;
    }
</style>


