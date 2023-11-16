'use strict';

/**
 * cookies-gdpr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cookies-gdpr.cookies-gdpr');
