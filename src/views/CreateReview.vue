<template>
  <div class="CreateReview">
    <br />
    <h1><b>Create a Review</b></h1>
    <CreateFields/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateFields from '@/components/CreateReviewFields.vue'

export default {
  name: 'CreateReview',
  components: {
    CreateFields
  }
}
</script>