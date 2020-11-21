"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const jsonEntityFn_1 = require("../common/jsonEntityFn");
/**
 * An object instance is valid against `maxProperties` if its number of properties is less than, or equal to, the value of this keyword.
 *
 * ::: warning
 * The value of this keyword MUST be a non-negative integer.
 * :::
 *
 * ## Example
 * ### On prop
 * ```typescript
 * class Model {
 *    @MaxProperties(10)
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
 *       "maxProperties": 10
 *     }
 *   }
 * }
 * ```
 *
 * ### On class
 *
 * ```typescript
 * @MaxProperties(10)
 * class Model {
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "maxProperties": 10
 * }
 * ```
 *
 * ### On Parameter
 *
 * ```typescript
 *
 * class Model {
 *   method(@Any() @MaxProperties(10) obj: any){}
 * }
 * ```
 *
 * @param {number} maxProperties The maximum properties allowed on the given object
 * @decorator
 * @ajv
 * @jsonMapper
 * @swagger
 * @schema
 * @propertyDecorator
 * @paramDecorator
 * @model
 */
function MaxProperties(maxProperties) {
  if (maxProperties < 0) {
    throw new Error("The value of maxProperties MUST be a non-negative integer.");
  }
  return jsonEntityFn_1.JsonEntityFn((store) => {
    store.isCollection ? store.schema.maxProperties(maxProperties) : store.itemSchema.maxProperties(maxProperties);
  });
}
exports.MaxProperties = MaxProperties;
//# sourceMappingURL=maxProperties.js.map
