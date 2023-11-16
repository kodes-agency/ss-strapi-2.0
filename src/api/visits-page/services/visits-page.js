'use strict';

/**
 * visits-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visits-page.visits-page');
