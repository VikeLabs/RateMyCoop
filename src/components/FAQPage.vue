<template>
  <div class="pt-4">
    <QuestionAndAnswer question="What is RateMyCoop?"
                       answer="RateMyCoop is a student created website allowing students to leave a review on a company after they have completed a coop work term."/>
    <QuestionAndAnswer question="How do I use RateMyCoop?"
                       answer="RateMyCoop can be used to leave reviews on completed coops or view reviews from other student experiences."/>
    <QuestionAndAnswer question="How do I leave a review?"
                       answer="To leave a review you first must create an account, then click on the '+' to go to the create review page."/>
    <QuestionAndAnswer question="What is RateMyCoop?"
                       answer="RateMyCoop is a student created website allowing students to leave a review on a company after they have completed a coop work term."/>
  </div>
</template>

<script>

import QuestionAndAnswer from "@/components/QuestionAndAnswer";

export default {
  name: 'FAQPage',
  components: {
    QuestionAndAnswer
  },
}
</script>
