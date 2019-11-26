<template>
  <div class="containe">
    <div class="row">
      <div class="col-md-12">
        <h1>Welcome to the Product Store!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis augue in mi fermentum imperdiet a non massa. Maecenas vestibulum, ipsum eget posuere suscipit, orci nisl consequat lorem, ac eleifend felis nisi sit amet urna. Morbi auctor tellus quis elit efficitur, nec eleifend quam sagittis. Nam nec semper elit, vel eleifend metus. Donec laoreet dui sit amet suscipit dictum. Integer tristique a ipsum ac fermentum. Cras quis tempus mi. Proin luctus, risus at finibus dapibus, nisl massa ullamcorper odio, vitae interdum orci metus vitae justo. Suspendisse a nisi metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In a malesuada quam. Ut id mauris metus. Etiam ut justo auctor, euismod leo id, accumsan arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nunc sem, luctus ornare ex ut, malesuada elementum erat.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <List></List>
      </div>
    </div>
  </div>
</template>
<script>
import List from "./product/List";

export default {
  components: {
    List
  }
};
</script>