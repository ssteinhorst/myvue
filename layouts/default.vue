<template>
  <div>
    <div class="headerBox container-fluid m-0 p-0">
      <div id="topRow" class="topRow row w-100 mr-0" >
        <div class="col ml-0 mt-1 pl-0 align-middle">
          <nuxt-link id="homeLink" to="/">Home</nuxt-link>
        </div>
        <div class="col text-center mr-0 pr-0">
          <div id="environment">
            <p id="environmentText"> Environment</p>
          </div>
        </div>
        <div class="col text-right mr-0 pr-0">
          <p id="userName" class="m-0 mt-2" >Welcome: currentUserName</p>
        </div>
      </div>
      <div class="navBar row m-1">
        <div class="m-1" id="nav">
          <p class="navLinks m-1">
            <span>
              <nuxt-link  id="search" to="/search">Search</nuxt-link>
              |
            </span>
            <span>
              <nuxt-link  id="editrecord" to="/edit">Edit</nuxt-link>
              |
            </span>
            <span>
              <nuxt-link id="newrecord" to="/newrecord">New</nuxt-link>
            </span>
          </p>
        </div>
      </div>
    </div>
    <nuxt />
  </div>



  </template>
<script>

</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  white-space: nowrap;
  color: #2c3e50;
}

.pdfIconColor {
  font-size:20px;
  color:darkred;
}

.centerAlign, th.centerAlign, td.centerAlign {
  text-align: center;
}

.deleteIcon {
  color:#d89374;
}

.navLinks {
  font-family: Avenir Next LT W01 Demi,Arial,sans-serif;
}

.topRow {
  padding: 15px;
  margin: 0px;
  border-bottom: 0.5px solid #f0f4f8;
}

.nonProdBg {
  background-image: linear-gradient(45deg, #fff, #F5821F, #81BE41, #00A7E1);
}

.environmentText {
  color: #fff;
}

.headerBox {
  background-color: white;
  box-sizing: border-box;

}
.navBar {
  background-color: white;
}
.topRow {
  background-color: wheat;
  
}
</style>
