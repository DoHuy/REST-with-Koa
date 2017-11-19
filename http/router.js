const Router     = require('koa-router');
const router     = new Router();
const Controller = require('./controller/index-controller');
const Middleware = require('./middleware/index-middleware');

router.get('/api/credentials',Controller.CredentialController.getAllCredential);

router.get('/api/credentials/:id',Controller.CredentialController.getDetail);

router.post('/api/credentials',Middleware.CredentialMiddleware.validateAddForm, Controller.CredentialController.addCredential);

router.patch('/api/credentials/:id',Middleware.CredentialMiddleware.validateUpdateForm, Controller.CredentialController.updateCredential);

router.delete('/api/credentials/:id', Controller.CredentialController.deleteCredential);

module.exports = router;