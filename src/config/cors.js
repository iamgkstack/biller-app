module.exports.cors = {
  /** *************************************************************************
   *                                                                          *
   * Which headers should be allowed for CORS requests? This is only used in  *
   * response to preflight requests.                                          *
   *                                                                          *
   **************************************************************************
   */
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Authorization', 'for-domain'],

  /** *************************************************************************
   *                                                                          *
   * Which methods should be allowed for CORS requests? This is only used in  *
   * response to preflight requests (see article linked above for more info)  *
   *                                                                          *
   **************************************************************************
   */

  methods: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',

  /** *************************************************************************
   *                                                                          *
   * Allow cookies to be shared for CORS requests?                            *
   *                                                                          *
   **************************************************************************
   */

  credentials: true,

  /** *************************************************************************
   *                                                                          *
   * Which domains which are allowed CORS access?                             *
   *                                                                          *
   **************************************************************************
   */
  origin: '*',

  maxAge: 600
};
