<template >
  <div>
    <div>
      <h1 class="h1 py-8"><b>Create a Review</b></h1>
    </div>

    <div class="container">

      <form>
        <div class="row"> 
          <div class="col"> 
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" class="form-control" id="company" placeholder="Enter Company Name">
            </div>
          </div>
          <div class="col"> 
            <div class="form-group">
              <label for="major">Major</label>
              <input type="text" class="form-control" id="major" placeholder="Enter your Major">
            </div>
          </div>
          <div class="col"> 
            <div class="form-group">
              <label for="duration">Duration</label>
              <input type="text" class="form-control" id="duration" placeholder="Enter Co-op Duration (in months)">
            </div>
          </div>
        </div>

        <div class="row"> 
          <div class="col"> 
            <div class="form-group">
              <label for="position">Position</label>
              <input type="text" class="form-control" id="position" placeholder="Enter your Position Title">
            </div>
          </div>
          <div class="col"> 
            <div class="form-group">
              <label for="industry">Industry</label>
              <input type="text" class="form-control" id="industry" placeholder="Enter Industry">
            </div>
          </div>
        </div>

        <div class="row"> 
          <div class="col"> 
            <div class="form-group">
              <label for="enjoyment">Enjoyment</label>
              <input type="text" class="form-control" id="enjoyment" placeholder="Rate Enjoyment">
            </div>
          </div>
          <div class="col"> 
            <div class="form-group">
              <label for="personalGrowth">Personal Growth</label>
              <input type="text" class="form-control" id="personalGrowth" placeholder="Rate Growth">
            </div>
          </div>
          <div class="col"> 
            <div class="form-group">
              <label for="support">Support</label>
              <input type="text" class="form-control" id="support" placeholder="Rate support">
            </div>
          </div>
        </div>

        <div class="row"> 
          <div class="col"> 
            <div class="form-group">
              <label for="notes">Additional Notes</label>
              <textarea class="form-control" id="notes" rows="3" placeholder="Any notes or comments?"></textarea>
            </div>
          </div>
        </div>


        <!-- <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateReviewFields',
}
</script>