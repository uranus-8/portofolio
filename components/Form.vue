<template>
  <div class="form-conts">
    <div class="mt-3">
      <form
        action="https://formspree.io/f/mrbzvrla"
        method="POST"
      >
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="_replyto" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    isExpanded: false
    }
  }
}
</script>

<style>
.form-conts{
  width: 100%;
  max-width: 1200px;
}

@media (min-width: 1200px) {
  .form-control{
    min-width: 600px;
  }
}
</style>
