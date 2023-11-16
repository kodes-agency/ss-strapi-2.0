'use strict';

/**
 * wine-cap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wine-cap.wine-cap');
