<template>
  <div class="footer" :class="$mq">
    <div class="footer__left">
      <g-link to="https://www.linkedin.com/in/damien-lachambre/"
        >NEIWAD x DAMIEN</g-link
      >
    </div>
    <div class="footer__center">
      <p>Powered by Gridsome & Netlify</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: black;
  display: flex;
  justify-content: space-between;
  .footer__center {
    p {
      color: white;
    }
  }
  a {
    color: white;
  }
  &.lg {
    padding: 50px 160px;
  }
  &.md {
    padding: 30px 60px;
  }
  &.sm {
    padding: 15px 30px;
    flex-direction: column;
    align-items: center;
    a,
    p {
      text-align: center;
    }
  }
}
</style>
