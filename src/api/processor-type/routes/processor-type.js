'use strict';

/**
 * processor-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::processor-type.processor-type');
