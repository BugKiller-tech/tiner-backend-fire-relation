
module.exports = {
  sendSomethingWentWrong: async (req, res, errors) => {
    return res.status(400).json({
      errors: res.__('SOMETHING_WRONG')
    })
  }
}