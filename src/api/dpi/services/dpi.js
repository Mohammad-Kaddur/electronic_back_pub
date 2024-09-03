'use strict';

/**
 * dpi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dpi.dpi');
