<template>
  <div class="CreateReview">
    <h1>Create a Review:</h1>
    <div> 
        <CreateReviewForm/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateReviewForm from '@/components/CreateReviewForm.vue'

export default {
  name: 'Home',
  components: {
    CreateReviewForm
  }
}
</script>