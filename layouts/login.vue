<template>  

    <div id="content">
        <div id="content-container"> 
            <div>
                <AppHeader />
                <Nuxt />
            </div>
 
            <AppFooter />

        </div>        
    </div>          
</template>

<style>
*{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
}
:root {
    --black: rgb(67, 67, 67);
    --grey: rgb(178, 178, 178);
    --purple: #5d50a8;
    --white: #f8f7f8;
  }
body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: var(--black);

    background-image: url("../assets/BacgroundImage.png");
    background-repeat: no-repeat, repeat;
    background-size: cover; 
    background-color: var(--purple);
    overflow-y: auto;

   }
#content{
    padding: 5vh 30vw;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    width: 100vw;
}
#content-container{
    min-height: 90vh;
    padding: 10px 30px;
    background-color: var(--white);
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 50px 3px rgba(0,0,0,0.6); 
    box-shadow: 0px 0px 50px 3px rgba(0,0,0,0.6);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
main{
    width: 100%;
    padding-bottom: 60px;
}
#content-title{
    margin-bottom: 30px;
    color: var(--purple);
    text-transform: uppercase;
}
</style>