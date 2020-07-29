"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonEntityFn_1 = require("./jsonEntityFn");
/**
 * A numeric instance is valid only if division by this keyword's value results in an integer.
 *
 * !> The value of `multipleOf` MUST be a number, strictly greater than 0.
 *
 * ## Example
 * ### With primitive type
 *
 * ```typescript
 * class Model {
 *    @MultipleOf(2)
 *    property: Number;
 * }
 * ```
 *
 * ```json
 * {
 *   "type": "object",
 *   "properties": {
 *     "property": {
 *       "type": "number",
 *       "multipleOf": 2
 *     }
 *   }
 * }
 * ```
 *
 * ### With array type
 *
 * ```typescript
 * class Model {
 *    @CollectionOf(number)
 *    @MultipleOf(2)
 *    property: number[];
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
 *       "type": "array",
 *       "items": {
 *          "type": "number",
 *          "multipleOf": 2
 *       }
 *     }
 *   }
 * }
 * ```
 *
 * @param {number} multipleOf The multiple value allowed
 * @decorator
 * @ajv
 * @jsonMapper
 * @swagger
 * @schema
 * @propertyDecorator
 * @paramDecorator
 * @model
 */
function MultipleOf(multipleOf) {
    if (multipleOf <= 0) {
        throw new Error("The value of multipleOf MUST be a number, strictly greater than 0.");
    }
    return jsonEntityFn_1.JsonEntityFn(store => {
        store.itemSchema.multipleOf(multipleOf);
    });
}
exports.MultipleOf = MultipleOf;
//# sourceMappingURL=multipleOf.js.map