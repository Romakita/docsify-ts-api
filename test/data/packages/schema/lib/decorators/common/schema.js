"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonEntityFn_1 = require("./jsonEntityFn");
/**
 * Write data formatted to JsonSchema.
 *
 * ## Example
 *
 * ```typescript
 * @Schema({title: "test"})
 * class Model {
 *    @Schema({formatMinimum: "1987-10-24"})
 *    @Format("date")
 *    birthDate: Date
 * }
 * ```
 *
 * Will produce:
 *
 * ```json
 * {
 *   "type": "object",
 *   "title": "test",
 *   "properties": {
 *     "birthdate": {
 *        "type": "string",
 *        "format": "date",
 *        "formatMinimum": "1987-10-24"
 *     }
 *   }
 * }
 * ```
 *
 * @param partialSchema
 * @decorator
 * @ajv
 * @jsonMapper
 * @swagger
 * @schema
 * @propertyDecorator
 * @paramDecorator
 * @model
 */
function Schema(partialSchema) {
    return jsonEntityFn_1.JsonEntityFn((entity) => {
        Object.entries(partialSchema).forEach(([key, value]) => {
            entity.schema.set(key, value);
        });
    });
}
exports.Schema = Schema;
//# sourceMappingURL=schema.js.map