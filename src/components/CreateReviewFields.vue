<template >
  <div>
    <div class="container">
      <form>
        <div class="row"> 
          <div class="col-lg-6"> 
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" class="form-control" id="company" placeholder="Enter Company Name">
            </div>
          </div>
          <div class="col-lg-6"> 
            <div class="form-group">
              <label for="position">Position</label>
              <input type="text" class="form-control" id="position" placeholder="Enter your Position Title">
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
          <div class="col-lg-6"> 
            <div class="form-group">
              <label for="duration">Duration (Months)</label>
              <select id="duration" class="form-control form-select">
                <option value="" disabled selected>Select a Duration</option>
                <option>4</option>
                <option>8</option>
                <option>12</option>
                <option>16</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6"> 
            <div class="form-group">
              <label for="year">Academic Year</label>
              <select id="year" class="form-control form-select">
                <option value="" disabled selected>Select a Year</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row"> 
          <div class="col-lg-4"> 
            <div class="form-group">
              <label for="enjoyment">Enjoyment</label>
              <RateStars name="enjoyment"/>
            </div>
          </div>
          <div class="col-lg-4"> 
            <div class="form-group">
              <label for="personalGrowth">Personal Growth</label>
              <RateStars name="personal-growth"/>
            </div>
          </div>
          <div class="col-lg-4"> 
            <div class="form-group">
              <label for="support">Support</label>
              <RateStars name="support"/>
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

<style scoped>
.form-select {
  appearance: inherit;
}
</style>