<template>
  <footer class="footer">
    <div class="footer__main container">
      <div class="columns">
        <div class="column is-6">
          <img
            alt="Logo"
            class="footer__logo"
            src="https://assets.mspimages.in/zariance/logo/logo-grey.svg"
          >
          <div class="footer__copyright">© 2019 zariance.com · All rights reserved.</div>
        </div>
        <div class="column is-6">
          <div class="footer__social columns">
            <div class="column is-1">
              <a
                class="footer__social-link"
                href="https://www.linkedin.com/company/zariance/"
                title="LinkedIn"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M21 21H17V14.3C17 13.2 15.8 12.3 14.8 12.3 13.7 12.3 13 13.2 13 14.3V21H9V9H13V11C13.7 9.9 15.4 9.2 16.5 9.2 19 9.2 21 11.3 21 13.8V21M7 21H3V9H7V21M5 3A2 2 0 0 1 7 5 2 2 0 0 1 5 7 2 2 0 0 1 3 5 2 2 0 0 1 5 3Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="column is-1">
              <a
                class="footer__social-link"
                href="https://twitter.com/zariance"
                title="Twitter"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M22.5 6C21.7 6.4 20.9 6.6 20 6.7 20.9 6.2 21.6 5.3 21.9 4.3 21.1 4.8 20.1 5.2 19.2 5.4 18.4 4.5 17.3 4 16 4 13.7 4 11.7 5.9 11.7 8.3 11.7 8.6 11.8 9 11.8 9.3 8.3 9.1 5.1 7.4 3 4.8 2.6 5.4 2.4 6.2 2.4 6.9 2.4 8.4 3.2 9.8 4.3 10.5 3.6 10.5 3 10.3 2.4 10 2.4 10 2.4 10 2.4 10 2.4 12.1 3.9 13.9 5.8 14.2 5.5 14.3 5.1 14.4 4.7 14.4 4.4 14.4 4.2 14.4 3.9 14.3 4.4 16 6 17.3 7.9 17.3 6.4 18.5 4.6 19.1 2.6 19.1 2.2 19.1 1.9 19.1 1.5 19.1 3.4 20.3 5.7 21 8.1 21 16 21 20.3 14.5 20.3 8.8 20.3 8.6 20.3 8.4 20.3 8.2 21.2 7.6 21.9 6.9 22.5 6Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="footer__link is-clearfix ">
            <a class="footer__link-item is-pulled-right	" href="/about">About Us</a>
            <a class="footer__link-item is-pulled-right	" href="/team">Team</a>
            <a class="footer__link-item is-pulled-right	" href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="sass">
.footer
    position: fixed
    width: 100%
    bottom: 0
    padding: 30px 0 20px 0
    &__copyright
        margin-top: 10px
    &__social
        flex-direction: row-reverse
        .column
            padding-bottom: 0
    &__link
        flex-direction: row-reverse
        &-item
            color: #1a73e8
            font-weight: 600
            & + &
                margin-right: 10px

</style>
