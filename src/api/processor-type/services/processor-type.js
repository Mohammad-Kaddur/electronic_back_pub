'use strict';

/**
 * processor-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processor-type.processor-type');
