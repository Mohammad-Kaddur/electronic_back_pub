'use strict';

/**
 * processor-generation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::processor-generation.processor-generation');
