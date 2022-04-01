<template >
  <div>
    <div class="container">
      <form>
        <div class="row"> 
          <div class="col-lg-5"> 
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" class="form-control" id="company" placeholder="Enter Company Name">
            </div>
          </div>
          <div class="col-lg-5"> 
            <div class="form-group">
              <label for="position">Position</label>
              <input type="text" class="form-control" id="position" placeholder="Enter your Position Title">
            </div>
          </div>
          <div class="col-lg-2"> 
            <div class="form-group">
              <label for="duration">Duration</label>
              <input type="text" class="form-control" id="duration" placeholder="Enter Co-op Duration (in months)">
            </div>
          </div>
        </div>
        <div class="row"> 
          <div class="col-lg-6"> 
            <div class="form-group">
              <label for="major">Major</label>
              <input type="text" class="form-control" id="major" placeholder="Enter your Major">
            </div>
          </div>
          <div class="col-lg-6"> 
            <div class="form-group">
              <label for="industry">Industry</label>
              <input type="text" class="form-control" id="industry" placeholder="Enter your Industry">
            </div>
          </div>
        </div>
        <div class="row"> 
          <div class="col-lg-4"> 
            <div class="form-group">
              <label for="enjoyment">Enjoyment</label>
              <input type="text" class="form-control" id="enjoyment" placeholder="Rate Enjoyment">
              <RateStars/>
            </div>
          </div>
          <div class="col-lg-4"> 
            <div class="form-group">
              <label for="personalGrowth">Personal Growth</label>
              <input type="text" class="form-control" id="personalGrowth" placeholder="Rate Growth">
            </div>
          </div>
          <div class="col-lg-4"> 
            <div class="form-group">
              <label for="support">Support</label>
              <input type="text" class="form-control" id="support" placeholder="Rate support">
            </div>
          </div>
        </div>
        <div class="row"> 
          <div class="col-lg-12"> 
            <div class="form-group">
              <label for="notes">Additional Notes</label>
              <textarea class="form-control" id="notes" rows="3" placeholder="Any notes or comments?"></textarea>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>
</template>

<script>
import RateStars from '@/components/RateStars.vue'

export default {
  name: 'CreateReviewFields',
  components: {
    RateStars
  }
}
</script>