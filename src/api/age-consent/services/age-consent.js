'use strict';

/**
 * age-consent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::age-consent.age-consent');
