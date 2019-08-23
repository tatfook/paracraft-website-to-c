module.exports = app => {
  return class HomeController extends app.Controller {
    async homepage() {
      const { ctx } = this
      await ctx.renderClient('home/index.js')
    }
    
    async qr() {
      const { ctx } = this
      await ctx.renderClient('qr/index.js')
    }
  }
}
