<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="#/index">主页</a><span>|</span>
      <a href="https://github.com/hanwork17/miMall" target="_blank">GitHub地址</a>
    </div>
    <div class="copyright">Copyright ©2019 <a href="#/index" class="domain">© mi.com</a> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
}
</script>

<style lang="scss">
.footer{
  height: 234px;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin-top: 46px;
    margin-bottom: 31px;
    img{
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    margin-bottom: 13px;
     a{
       color: #999999;
       display: inline-block;
     }
     span{
       margin: 0 10px;
     }
  }
  .copyright{
    .domain{
      color: #999999;
      &:hover{
        color: #ff6600;
      }
    }
    
  }
}
</style>