import badRequest from './badRequest';
import created from './created';
import forbidden from './forbidden';
import negotiate from './negotiate';
import noContent from './noContent';
import notFound from './notFound';
import ok from './ok';
import serverError from './serverError';
import unAuthorized from './unAuthorized';

module.exports = (req, res, next) => {
  res.badRequest = badRequest(res);
  res.ok = ok(res);
  res.created = created(res);
  res.serverError = serverError(res);
  res.negotiate = negotiate(res);
  res.notFound = notFound(res);
  res.noContent = noContent(res);
  res.unAuthorized = unAuthorized(res);
  res.forbidden = forbidden(res);
  next();
};
