<template>
  <div class="CreateReview">
    <h1>This page allows us to create reviews</h1>

    <CreateFields/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateFields from '@/components/CreateReviewFields.vue'

export default {
  name: 'CreateReviewFields',
  components: {
    CreateFields
  }
}
</script>
