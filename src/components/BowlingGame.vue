<template>
  <div class="hello">
    <h1 style="color: white">{{ title }}</h1>

    <div class="stars-board">
      <h4
        style="
          background-color: brown;
          color: white;
          border-radius: 5px 5px 0 0;
          height: 3vh;
        "
      >
        Stars Board
      </h4>
      <div class="the-white-board"></div>
    </div>
    <input type="text" />
    <router-link to="/started_" class="start-btn"
      ><b>Let get started!!!</b></router-link
    >
  </div>
</template>
<script>
export default {
  name: "Title",
  data() {
    return {
      title: "The Bowling Game",
    };
  },
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.start-btn {
  padding: 10px;
  outline: none !important;
  border: none;
  border-radius: 4px;
  background-color: burlywood;
  text-decoration: none;
  color: #1d4131;
}
.start-btn:hover {
  background-color: #5f8675;
  color: white;
}
.stars-board {
  background-color: burlywood;
  border-radius: 5px;
  min-height: 60vh;
  margin-right: 30vw;
  margin-left: 30vw;
  margin-bottom: 4vh;
}
.the-white-board {
  background-color: white;
  min-height: 52.5vh;
  margin-left: 10px;
  margin-right: 10px;
}
@media only screen and (max-width: 600px) {
  .stars-board {
    background-color: burlywood;
    border-radius: 5px;
    min-height: 60vh;
    margin-right: 0vw;
    margin-left: 0vw;
    margin-bottom: 4vh;
  }
}
</style>
