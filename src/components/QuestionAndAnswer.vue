<template>
  <div class="container w-50 pb-5">
    <div class="row">
      <div class="col-sm h4 bg-dark rounded-pill p-4 my-auto">
        <div>
          {{ question }}
        </div>
      </div>
      <div class="col-sm h5">
        {{ answer }}
      </div>
    </div>
  </div>

</template>

<script>

export default {
  props: ['question', 'answer']
}

</script>