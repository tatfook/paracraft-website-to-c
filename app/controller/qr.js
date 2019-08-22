module.exports = app => {
  return class QrController extends app.Controller {
    async index() {
      const { ctx } = this
      await ctx.renderClient('qr/index.js')
    }
  }
}
