const CanteensSurvey = require('../model/canteensSurveySchema')

module.exports = {
  method: 'POST',
  path: '/canteens',
  options: {
    handler: async (request, h) => {
      await CanteensSurvey.create(request.payload)

      return { status: 'success' }
    }
  }
}