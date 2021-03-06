"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const jsonEntityFn_1 = require("../common/jsonEntityFn");
/**
 * An object instance is valid against `minProperties` if its number of properties is less than, or equal to, the value of this keyword.
 *
 * ::: warning
 * The value of this keyword MUST be a non-negative integer.
 * :::
 *
 * ## Example
 * ### On prop
 * ```typescript
 * class Model {
 *    @MinProperties(10)
 *    property: any;
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "properties": {
 *     "property": {
 *       "type": "any",
 *       "minProperties": 10
 *     }
 *   }
 * }
 * ```
 *
 * ### On class
 *
 * ```typescript
 * @MinProperties(10)
 * class Model {
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "minProperties": 10
 * }
 * ```
 *
 * ### On Parameter
 *
 * ```typescript
 *
 * class Model {
 *   method(@Any() @MinProperties(10) obj: any){}
 * }
 * ```
 *
 * @param {number} minProperties The minimum properties allowed on the object.
 * @decorator
 * @ajv
 * @jsonMapper
 * @swagger
 * @schema
 * @propertyDecorator
 * @paramDecorator
 * @model
 */
function MinProperties(minProperties) {
  if (minProperties < 0) {
    throw new Error("The value of minProperties MUST be a non-negative integer.");
  }
  return jsonEntityFn_1.JsonEntityFn((store) => {
    store.isCollection ? store.schema.minProperties(minProperties) : store.itemSchema.minProperties(minProperties);
  });
}
exports.MinProperties = MinProperties;
//# sourceMappingURL=minProperties.js.map
