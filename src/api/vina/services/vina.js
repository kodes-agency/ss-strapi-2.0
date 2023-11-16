'use strict';

/**
 * vina service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vina.vina');
