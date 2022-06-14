<template>
  <div class="CreateReview">
    <br />
    <h1>Create a Review</h1>
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